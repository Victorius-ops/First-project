// Ranvik-style frontend (исходя из ТЗ)
// Модель: Ranvik-free. Добавлена логика Favorites и изменение поведения фильтров.

(() => {
  const STORAGE_KEY = 'gamesCatalog_v1';
  const STORAGE_FAV_KEY = 'favorite_games_v1';

  // Базовый набор "стандартных" игр (первоначальная загрузка)
  const DEFAULT_GAMES = [
    { id: 1, title: "Apex Quest", price: 19.99, genre: "Action", year: 2022, rating: 8.2, description: "Динамичный аркадный экшен." },
    { id: 2, title: "Mystic Trails", price: 14.5, genre: "Adventure", year: 2020, rating: 7.8, description: "Путь по загадочным тропам." },
    { id: 3, title: "Kingdom Forge", price: 29.99, genre: "RPG", year: 2023, rating: 9.0, description: "Строи королевство и прокачивай героя." },
    { id: 4, title: "Galaxy Tactics", price: 9.99, genre: "Strategy", year: 2019, rating: 7.4, description: "Тактическая битва в космосе." },
    { id: 5, title: "Nebula Racer", price: 12.99, genre: "Indie", year: 2021, rating: 8.0, description: "Супербыстрые гонки в космосе." }
  ];

  let games = [];
  let nextId = 1;
  let favorites = [];

  // DOM элементы
  const container = document.querySelector('#gamesContainer');
  const emptyState = document.getElementById('emptyState');
  const searchInput = document.getElementById('searchInput');
  const genreFilters = document.getElementById('genreFilters');
  const sortSelect = document.getElementById('sortSelect');
  const addGameForm = document.getElementById('addGameForm');
  const statCount = document.getElementById('statCount');
  const statAvgPrice = document.getElementById('statAvgPrice');
  const statAvgRating = document.getElementById('statAvgRating');
  const loadFromApiBtn = document.getElementById('loadFromApi');
  const apiStatus = document.getElementById('apiStatus');
  const externalInfo = document.getElementById('externalInfo');
  const reloadExternal = document.getElementById('reloadExternal');
  const clearCatalogBtn = document.getElementById('clearCatalog');
  const restoreDefaultsBtn = document.getElementById('restoreDefaults');
  const clockEl = document.querySelector(`.Timer`);
  const favoritesSection = document.getElementById('favoritesSection'); // добавьте секцию в HTML, если хотите увидеть избранное
  const favoritesList = document.getElementById('favoritesList'); // элемент под список избранного

  // Заглушки секций
  // Если в HTML нет секции Favorites, можно не использовать эти переменные
  // (для безопасного кода можно проверить на наличие)

  // Загружаем из LocalStorage
  function loadInitial() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        games = JSON.parse(stored);
        const maxId = games.reduce((m,g)=> Math.max(m, g.id||0), 0);
        nextId = maxId + 1;
        return;
      } catch {}
    }
    games = DEFAULT_GAMES.map((g)=> ({...g, id: g.id || 0}));
    nextId = Math.max(...games.map(g => g.id), 0) + 1;
    commitAndRender(games);
  }

  // Таймер
  function startClock() {
    function pad(n){ return n.toString().padStart(2, '0'); }
    let start = Date.now();
    setInterval(() => {
      const diff = Date.now() - start;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      clockEl.textContent = `Установлен: ${pad(h)}:${pad(m)}:${pad(s)}`;
    }, 1000);
  }

  // Отображение карточек
  function renderGames(list) {
    container.innerHTML = '';
    if (!list.length) {
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;
    const frag = document.createDocumentFragment();
    list.forEach(g => {
      const card = document.createElement('div');
      card.className = 'item';
      card.innerHTML = `
        <h3>${escapeHtml(g.title)} <span class="badge" style="font-size:.8em;color:#9bd7ff">(${g.genre})</span></h3>
        <div class="meta">Год: ${g.year} • Цена: ${g.price.toFixed(2)} USD • Рейтинг: ${g.rating.toFixed(1)}/10</div>
        <p>${escapeHtml(g.description || '')}</p>
        <button class="btn btn-secondary favorite-btn" data-id="${g.id}" title="Добавить/удалить из избранного">Избранное</button>
        <button class="btn btn-secondary delete-btn" data-id="${g.id}" title="Удалить игру">Удалить</button>
      `;
      frag.appendChild(card);
    });
    container.appendChild(frag);
  }

  function renderFavorites() {
    if (!favoritesList) return;
    favoritesList.innerHTML = '';
    if (!favorites.length) {
      favoritesList.innerHTML = '<div class="empty">Нет избранного</div>';
      return;
    }
    favorites.forEach(fid => {
      const g = games.find(x => x.id === fid);
      if (!g) return;
      const item = document.createElement('div');
      item.textContent = g.title;
      favoritesList.appendChild(item);
    });
  }

  // Экранирование
  function escapeHtml(text) {
    if (typeof text !== 'string') return '';
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // Фильтры по жанрам
  const allGenres = ["Action","Adventure","RPG","Strategy","Shooter","Indie"];
  function renderGenreFilters() {
    genreFilters.innerHTML = '';
    allGenres.forEach(genre => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.textContent = genre;
      btn.dataset.genre = genre;
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        // НЕ вызываем commitCommit здесь: только фильтр отображения
        applyFilters(false); // флаг indicates not commit to storage
      });
      genreFilters.appendChild(btn);
    });
  }

  function getActiveGenreFilters() {
    return Array.from(genreFilters.querySelectorAll('.filter-btn.active'))
      .map(b => b.dataset.genre);
  }

  // Применение фильтров и сортировки (но без изменения основного массива)
  function applyFilters(commitToStorage = true) {
    const query = searchInput.value.toLowerCase().trim();
    const genres = getActiveGenreFilters();
    const sortVal = sortSelect.value;

    // используем копию исходников
    let result = games.filter(g => {
      const byQuery = !query || g.title.toLowerCase().includes(query);
      const byGenre = genres.length === 0 || genres.includes(g.genre);
      return byQuery && byGenre;
    });

    switch (sortVal) {
      case 'title-asc':
        result = [...result].sort((a,b)=> a.title.localeCompare(b.title)); break;
      case 'title-desc':
        result = [...result].sort((a,b)=> b.title.localeCompare(a.title)); break;
      case 'price-asc':
        result = [...result].sort((a,b)=> a.price - b.price); break;
      case 'price-desc':
        result = [...result].sort((a,b)=> b.price - a.price); break;
      case 'rating-desc':
        result = [...result].sort((a,b)=> b.rating - a.rating); break;
      case 'year-desc':
        result = [...result].sort((a,b)=> a.year - b.year); break;
      default:
        break;
    }

    renderGames(result);
    updateStats(result);

    // если нужно сохранить состояние после фильтра (опционально)
    if (commitToStorage) {
      // здесь не изменяем исходный массив, сохраняем только видимый result
      // чтобы корневой массив оставался стабильным для дальнейших операций
      localStorage.setItem('gamesCatalog_view_v1', JSON.stringify(result));
    }
  }

  // Статистика
  function updateStats(list) {
    const count = list.length;
    const avgPrice = list.reduce((s,g)=> s + g.price, 0) / (count || 1);
    const avgRating = list.reduce((s,g)=> s + g.rating, 0) / (count || 1);
    statCount.textContent = count;
    statAvgPrice.textContent = isFinite(avgPrice) ? avgPrice.toFixed(2) : '0';
    statAvgRating.textContent = isFinite(avgRating) ? avgRating.toFixed(2) : '0';
  }

  // Добавление новой игры
  addGameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(addGameForm);
    const newGame = {
      id: nextId++,
      title: fd.get('title').trim(),
      price: parseFloat(fd.get('price')),
      genre: fd.get('genre'),
      year: parseInt(fd.get('year'), 10),
      rating: parseFloat(fd.get('rating')),
      description: fd.get('description')?.trim() || ''
    };
    if (!newGame.title) return;
    // добавление в локальный массив и сохранение
    games.push(newGame);
    commitAndRender(games);
  });

  // Поиск
  searchInput.addEventListener('input', () => applyFilters(false));

  // Удаление и избранное (делегирование)
  container.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('delete-btn')) {
      const id =    (e.target.dataset.id, 10);
      if (Number.isFinite(id)) {
        // удалить из массива и сохранить
        games = games.filter(g => g.id !== id);
        commitAndRender(games);
      }
    }
    if (e.target && e.target.classList.contains('favorite-btn')) {
      const id = parseInt(e.target.dataset.id, 10);
      if (!Number.isFinite(id)) return;
      toggleFavorite(id);
      // визуально можно обновить кнопки/секцию избранного
      renderFavorites();
    }
  });

  function toggleFavorite(id) {
    const idx = favorites.indexOf(id);
    if (idx === -1) {
      favorites.push(id);
    } else {
      favorites.splice(idx, 1);
    }
    // сохранить favorites
    localStorage.setItem(STORAGE_FAV_KEY, JSON.stringify(favorites));
  }

  // Загрузка из внешнего API
  loadFromApiBtn.addEventListener('click', async () => {
    apiStatus.textContent = 'Загрузка…';
    try {
      const resp = await fetch('https://example.com/api/games');
      if (!resp.ok) throw new Error('Сеть вернула ошибку');
      const data = await resp.json();
      if (Array.isArray(data)) {
        data.forEach(g => {
          if (g.title) {
            games.push({
              id: nextId++,
              title: String(g.title),
              price: Number(g.price) || 0,
              genre: g.genre || 'Indie',
              year: Number(g.year) || new Date().getFullYear(),
              rating: Number(g.rating) || 0,
              description: g.description || ''
            });
          }
        });
        apiStatus.textContent = 'Загрузка выполнена.';
        commitAndRender(games);
      } else {
        apiStatus.textContent = 'Некорректный ответ API.';
      }
    } catch (err) {
      apiStatus.textContent = 'Ошибка загрузки: ' + err.message;
    }
  });

  // Блок отзывов через fetch
  async function loadExternalInfo() {
    externalInfo.textContent = 'Загрузка информации…';
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
      if (!resp.ok) throw new Error('Ошибка сети');
      const data = await resp.json();
      const snippets = data.slice(0, 3).map(d => `"${d.name}": ${d.body}`).join('\n\n');
      externalInfo.textContent = snippets;
    } catch (e) {
      externalInfo.textContent = 'Не удалось загрузить данные: ' + e.message;
    }
  }

  reloadExternal.addEventListener('click', loadExternalInfo);
  loadExternalInfo();

  // Очистка каталога
  clearCatalogBtn.addEventListener('click', () => {
    games = [];
    commitAndRender(games);
  });

  // Восстановление стандартных игр
  restoreDefaultsBtn.addEventListener('click', () => {
    games = DEFAULT_GAMES.map((g)=> ({...g, id: nextId++}));
    commitAndRender(games);
  });

  // Вспомогательная функция: сохранить и отрисовать обновленный массив
  function commitAndRender(list) {
    // Сохранение в LocalStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    // читаем обновлённый массив и рендерим
    const stored = localStorage.getItem(STORAGE_KEY);
    try {
      const refreshed = stored ? JSON.parse(stored) : list;
      games = refreshed;
      applyFilters(); // применяем текущие фильтры к обновлённому списку
      renderFavorites();
      // обязательно обновлять избранное также
      const favs = JSON.parse(localStorage.getItem(STORAGE_FAV_KEY) || '[]');
      favorites = Array.isArray(favs) ? favs : [];
      renderFavorites();
    } catch {
      games = list;
      renderGames(list);
      updateStats(list);
    }
  }

  // Инициализация
  function init() {
    startClock();
    renderGenreFilters();
    loadInitial(); // загрузка из LocalStorage или дефолтов
    renderFavorites();
    // Привязка фильтров по умолчанию
    applyFilters();
  }

  init();
})();
