import { useState } from "react"
function Pet () {
    const[name, setName] = useState("Барсик")
    const[hungry, setHungry] = useState(5)
    const[energy, setEnergy] = useState(5)
    const[mood, setMood] = useState(`Спокойный`)
    const[isSleeping, setIsSleeping] = useState(false)
    const[message, setMessage] = useState(`Выбери действие`)
    const[show, setShow] = useState(false)
    const[image, setImage] = useState(`https://img.magnific.com/free-photo/beautiful-cat-portrait-close-up_23-2149152103.jpg?semt=ais_hybrid&w=740&q=80`)
    const[alt, setAlt] = useState(`Спокойный кот`)
    function feed() {
        if (hungry >= 10) {
            return
        } else{setHungry(hungry + 1)
            setMood(`Радостный`)
            setImage(`https://avatars.mds.yandex.net/get-shedevrum/10713989/7b78f0d0b2fb11ee86ac0a0d9f74bed2/orig`)
            setAlt(`Сытый кот`)
        }
    }
    function play() {
        if(energy <= 0){
            return
        } else {
            setEnergy(energy - 1)
            setMood(`Радостный`)
            setMessage(`Питомец поиграл с тобой`)
            setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxXdTkRCIkguUGUa4M67YF5BpoyfoYzuJv0qyhxs0125PyluknsD3yhE&s=10`)
            setAlt(`Игривый кот`)
        }
    }
    function sleep() {
        setIsSleeping(true)
        setMood(`Спит`)
        setMessage(`Питомец уснул`)
        setImage(`https://i.pinimg.com/736x/67/12/25/671225ca634638262d4a2580accd7a37.jpg`)
        setAlt(`Спящий кот`)
    }
    function awake() {
        if(energy >= 10) {
            return
        } else if (isSleeping == false) {
            setMessage(`Питомец уже бодрствует`)
            return
        }
        else{
        setIsSleeping(false)
        setEnergy(energy + 2)
        setMood(`Отдохнувший`)
        setMessage(`Питомец проснулся`)
        setImage(`https://img-webcalypt.ru/img/thumb/lg/images/meme-templates/0F86d6KPSbDKAhP1E0Xe6OLblSE13Jq7.jpg.jpg`)
        setAlt(`Разбуженный кот`)
        }
    }
    function start() {
        setHungry(5)
        setEnergy(5)
        setMood(`Спокойный`)
        setIsSleeping(false)
        setMessage(`Выбери действие`)
        setImage(`https://img.magnific.com/free-photo/beautiful-cat-portrait-close-up_23-2149152103.jpg?semt=ais_hybrid&w=740&q=80`)
        setAlt(`Спокойный кот`)
    }
    function showMSG(){
        setShow(!show)
    }
    return (
        <>
        <div>Имя: {name}</div>
        <div>Настроение:{mood}</div>
        <div>Сытость:{hungry}/10</div>
        <div>Энергия:{energy}/10</div>
        <div className="Actions">
            <button onClick={feed}>«Покормить»</button>
            <button onClick={play}>«Поиграть»</button>
            <button onClick={sleep}>«Спать»</button>
            <button onClick={awake}>«Разбудить»</button>
            <button onClick={start}>«Сбросить»</button>
            <button onClick={showMSG}>«Показать подсказку»</button>
        </div>
       { show && <div> <p className = {mood}>{message}</p><img src={image} alt={alt} /></div>}
        </>
    )
}
export default Pet