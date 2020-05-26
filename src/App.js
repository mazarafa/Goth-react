import React,{Component} from 'react';
import{Switch ,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Page2 from "./Page2";

class App extends Component{
  render(){
    return (
      <div>
        <header className="App">

          <div class="front-nav">
            <div class="nav-ul">
              <div class="right-element">
                <Link to="/"> HOME </Link>
                <Link to="/page2"> Page2 </Link>
                <Link to="#"> ABOUT </Link>
                <Link to="#"> CONTACT </Link>
              </div>
            </div>
          </div>


        </header>
        <main>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="text">        
            <p> React is a magical technology on the market. With it, we can develop dynamic and 
            statistical applications. Therefore, enter the web and mobile area, stressing that it 
            can be used in games.</p>
            {/* <Link to="/Page2">Ir para a página sobre \o/</Link> */}
            <Switch>
             
              <Route path="/" Component={App}></Route>
              <Route path="/Page2" Component={Page2}></Route>
              

            </Switch>

          </div>

        </main>

        
        <div class="front-nav">
            <div class="nav-ul">
              <div class="right-element">
                <a href="https://www.google.com.br/"  rel="noreferrer"> Google </a>
                <a href="https://br.yahoo.com/" rel="noreferrer"> Yahoo</a>
                <a href="https://www.amazon.com.br/"> Amazon</a>
              </div>
            </div>
          </div>
        <footer>
        
        </footer>
      </div >
    );
  }
}

export default App;
