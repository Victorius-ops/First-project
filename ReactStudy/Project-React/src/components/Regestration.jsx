import { useRef, useState } from "react"
import { useUsersFavFilms} from "../data/useUsersFavFilms"
import { useToggle } from "../hooks/useToggle"

function Regestration() {
    const intervalRef = useRef(null)
    const intervalRef2 = useRef(null)
    let isReg = useUsersFavFilms((store) => store.isReg)
    let changeIsReg = useUsersFavFilms((store) => store.changeIsReg)
    function show() {
        console.log(intervalRef.current.value)
        console.log(intervalRef2.current.value)
        changeIsReg(true) 
        console.log(isReg)
    }

    function ModalExample() {
      const { value: isOpen,
              open,
              close
       } = useToggle(false)

      return (
        <div>
          <button onClick={open}>Открыть</button>
          {
            isOpen && (
              <div>
                <p>Привет!</p>
                <button onClick={close}>Закрыть</button>
              </div>
            )
          }
          {/* JSX МОДАЛЬНОЕ ОКНО */}
        </div>
      )
    }

    function useSomething() {
      // состояние, эффекты, refs, функции и т.д
      return {
        // данные и действия для компонента
      }
    }


    return(
      <>
      <ModalExample />
      <form action=""></form>
      <h4>
        <label htmlFor="name">Укажите имя</label>
        <input type="text" name="name" required placeholder="Имя пользователя" ref={intervalRef}/>
      </h4>
      <h4>
        <label htmlFor="pass"> Укажите пароль</label>
        <input type="text" name="pass" required placeholder="Пароль" ref={intervalRef2} />
      </h4>
        <button onClick={show}>Отправить данные</button>
      </>  
    )
}
export default Regestration