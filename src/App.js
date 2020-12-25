import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Redirect,withRouter} from 'react-router-dom';
import Header from './components/Header';
import Favourite from './components/Favourite';
import Viewplanets from './components/Viewplanets';
import {PlanetProvider} from './components/Context1';
import Registration from './components/Registration';
import Login from './components/Login';


function App() {
 
    return (
      <div className="App">
                  

     <Router>

          <Switch>

          <PlanetProvider>

          <Header/>
          <Route exact path="/login" component={Login} ></Route>
          <Route exact path=""><Redirect to="/login" /></Route>
          <Route exact path="/viewplanets" component={Viewplanets}></Route>
          <Route exact path="/fav" component={Favourite}></Route>
          <Route exact path="/register" component={Registration}></Route>
          </PlanetProvider>
          </Switch>
        </Router>
        
      </div>
    );
 
 
  //}
 
    
  
  
}

export default App;
