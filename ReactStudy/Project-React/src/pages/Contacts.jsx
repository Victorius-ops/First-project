import { Link } from "react-router-dom";
import ContactsList from "../components/ContactsList";
function Contacts() {
    return(
        <>
       <button className="GoTo"><Link to="/" className="clear">На главную</Link></button> 
        <h3>Контакты:</h3>
        <div>
            <ContactsList/>
        </div>
        </>
    )
}
export default Contacts