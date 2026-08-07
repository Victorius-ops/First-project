import { useRef, useState } from "react"

function Search() {

    // const input = document.querySelector("input")
    // input.focus()

    // const inputRef = useRef(null) 

    // function clearAndFocus() {
    //     if(inputRef.current == null) return 

    //     inputRef.current.value = ""
    //     inputRef.current.placeholder = "Поиск очищен"
    //     inputRef.current.focus()
    // }

    // const buttonRef = useRef(null) 
    // console.log("Во время рендера:", inputRef.current)

    // const [value, setValue] = useState("")

    // const nameRef = useRef(null)

    // function showName() {
    //     console.log(nameRef.current.value)
    // }

    function Timer() {
        const [seconds, setSeconds] = useState(0)
        const intervalRef = useRef(null)

        function startTimer() {
            if (intervalRef.current !== null) {
                return
            }
            intervalRef.current = setInterval(() => {
                setSeconds((currentSeconds) => currentSeconds + 1)
            }, 1000)
        }
        function stopTimer() {
            if (intervalRef.current !== null) {
                return
            }
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
        return (
            <>
                <p>123</p>
                <p>123</p>
                <p>123</p>
            </>
        )
    }

    return(
        <div>
            <Timer />
            {/* <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
            <p>{value}</p>

            <input type="text" ref={nameRef} />
            <button onClick={showName}>Прочитать значение</button>


            <input ref={inputRef} type="text" placeholder="Поиск" />
            <button onClick={clearAndFocus}>Очистить и сфокусировать</button>
            <button ref={buttonRef} onClick={() => console.log(buttonRef.current)}>Test</button> */}
        </div>
    )
}
export default Search