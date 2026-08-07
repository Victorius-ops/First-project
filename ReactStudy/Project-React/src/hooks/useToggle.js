import { useState } from "react"

export function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue)

    function open() {
        setValue(true)
    }
    function close() {
        setValue(false)
    }
    function toggle() {
        setValue(!value)
    }
    return {
        value,
        open,
        close,
        toggle
    }
}

// POST /auth/login + email/password

// Сервер проверяет пользователя

// Сервер выдаёт access token 

// Клиент отправляет token с защищённым запросом

// Сервер каждый раз проверяет только token

// xxxxxx.yyyyyyy.zzzzzz
// HEADER.PAYLOAD.SIGNATURE

// Header {
//     "alg": "H5267",
//     "typ": "JWT"
// }
// alg - алогритм подписи. Сервер не должен разрешать токену самостоятельно выбирать любой алгоритм.
// typ - Тип токена. Обычно JWT

// PAYLOAD {
//     "sub": "123", Subject - О ком выпущен токен. id пользователя
//     "name": "Student", - Имя о ком выпущен токен 
//     "role": "user", - Роль пользователя на сайте
//     "iat": 1760000000, - Когда токен был создан
//     "exp": 1760000900, - До какого времени живёт токен 
//     "iss": "lesson-api", - Кто выпустил токен
//     "aud": "react-client" - Для какого получателя предназначен токен
// }

// Signature - Закодированный header и payload с использованием секретного ключа

// header + payload + секретный ключ 

// сервер создаёт signature 

// клиент получает JWT 

// при запросе сервер снова проверяет signature и claims

