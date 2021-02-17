import React, { Component } from "react";

import Navbar from "./components/shared/navbar/navbar.component";
import Footer from "./components/shared/footer/footer.component";
import Home from "./components/home/home.component";
import Women from "./components/women/women.component";
import Men from "./components/men/men.component";

import "./App.css";

import {
  Switch,
  Route, Redirect,
} from "react-router-dom";



class App extends Component {
  render() {
      return (
        <div>
              <Navbar />
              <div className="container">
                    <Switch>
                
                            <Route exact path="/">
                            {true ? <Redirect to="/home" /> : <Home   />}
                            </Route>
                        
                        <Route path="/home" >
                            <Home />
                        </Route>

                        <Route path="/men" >
                            <Men />
                        </Route>

                        <Route path="/women" >
                            <Women />
                        </Route>


                    </Switch>
              </div>
            <Footer />
        </div>
          
      );
  }
}

export default App;