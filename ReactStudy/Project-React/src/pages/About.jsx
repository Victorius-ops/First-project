import { useState , useEffect, useReducer} from "react"
import { Link } from "react-router-dom"
import Contacts from "./Contacts"
import ContactsList from "../components/ContactsList"
import Search from "../components/Search"


function About() {
    const [lookContacts, setLookContacts] = useState(false)
    function isVisible() {
        setLookContacts(!lookContacts)
    }
    const [showBlock, setShowBlock] = useState(false);

  useEffect(() => {
    // Включаем таймер при загрузке страницы (монтировании компонента)
    const timer = setTimeout(() => {
      setShowBlock(true);
    }, 1500); 

    // Очищаем таймер, если пользователь ушел со страницы раньше времени
    return () => clearTimeout(timer);
  }, []);

    const product = {
        id: 1,
        name: "Test",
        price: 2000
    }

    function cartReducer(state, action) {
        switch (action.type) {
            case "ADD_TO_CART": {
                const product = action.payload
                const alreadyInCart = state.some(item => item.id == product.id)
                if (alreadyInCart) {
                    return state
                }
                return [...state, action.payload]
            }
            case "CLEAR_CART": {
                return []
            }
            case "REMOVE_FROM_CART": {
                return state.filter(value => value.id !== action.payload)
            }
            default:
                return state
        }
    }

    const [cart, dispatch] = useReducer(cartReducer, [])

    return (
        <>
        <Search />
        <button className="GoTo"><Link to="/" className="clear">На главную</Link></button> 
            <button onClick={() => dispatch({type: "CLEAR_CART"})}>Очистить корзину</button>
            <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product})}>Добавить товар</button>
            <h3>Это проба пера по написанию React-приложения </h3>
            {showBlock && <div className="banner">
                <h3>В приложении прописана логика отображения фильмов и настроена маршрутизация</h3>
            </div>} 
            <button onClick={isVisible}>Показать контакты</button>
            {lookContacts && <div>
                <ContactsList/>
            </div>}
        </>
    )
}
export default About