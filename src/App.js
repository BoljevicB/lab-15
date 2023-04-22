import './css/App.css';

import Head from "./components/head/head";
import Section from "./components/main/mcomponents/section/section";
import Article from "./components/main/mcomponents/marticle/article";
import Aside from "./components/main/mcomponents/aside/aside";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <div className="grid_head">
            <Head/>
          </div>
          <div className="grid_section">
          <Section/>
          </div>
          
          <div className="grid_article">
            <Article/>
          </div>
          
          <div className="grid_aside">
          <Aside/>
          </div>
          
          <div className="grid_footer">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
