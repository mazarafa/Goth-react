import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import git from "./teste.gif";
import './App.css';
import App from "./App";

class Page2 extends Component {
    render() {
        return (<div>
            <header className="App">
                <div class="front-nav">
                    <div class="nav-ul">
                        <div class="right-element">
                            <Link to="/"> HOME </Link>
                            <Link to="/Page2"> Page2 </Link>
                            <Link to="#"> ABOUT </Link>
                            <Link to="/#"> CONTACT </Link>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="text">
                    <img src={git} className="git" alt="logo" />
                    <div className="right-text">
                        <p> I think it's the end of the test. Sorry for the delay in delivery,
                            I am writing an article with my teacher.</p>
                    </div>
                    <Switch>
                        <Route path="/" Component={App} ></Route>
                        <Route path="/Page2" Component={Page2}></Route>
                        

                    </Switch>
                </div>
            </main>
        </div>);
    }
}
export default Page2;