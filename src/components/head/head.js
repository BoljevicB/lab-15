import "./head.css";
import {Link} from "react-router-dom";

export function Head() {
    return (
    <div className="head">
        
        <Link to="./head/hcomponents/news/news.js">Новости</Link>
        <Link to="./head/hcomponents/contacts/contacts.js">Контакты</Link>
        <Link to="./head/hcomponents/about/about.js">О проекте</Link>
    </div>
    );
}

export default Head;

