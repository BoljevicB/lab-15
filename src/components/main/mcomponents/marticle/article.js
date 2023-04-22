import "./article.css";
import News from "../../../head/hcomponents/news/news";
import About from "../../../head/hcomponents/about/about";
import Contacts from "../../../head/hcomponents/contacts/contacts";
import Err from "../../../head/hcomponents/err404/err404"
import {Routes, Route} from "react-router-dom";

export function Article() {
    return (
    <div className="article">
        <Routes>
            <Route path="/head/hcomponents/news/news.js" element= {<News/>}/>
            <Route path="/head/hcomponents/about/about.js" element= {<About/>}/>
            <Route path="/head/hcomponents/contacts/contacts.js" element= {<Contacts/>}/>
            <Route path="*" element= {<Err/>}/>
        </Routes>
    </div>
    )
}

export default Article;