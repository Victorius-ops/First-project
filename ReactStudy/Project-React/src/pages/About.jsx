import { useState , useEffect} from "react"
import { Link } from "react-router-dom"
import Contacts from "./Contacts"
import ContactsList from "../components/ContactsList"


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
  
    return (
        <>
        <button className="GoTo"><Link to="/" className="clear">На главную</Link></button> 
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