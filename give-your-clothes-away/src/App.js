import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './scss/components/App.scss';
import Navigation from "./components/Navigation";
import Home from './components/Home/Home';
import Register from "./components/Register";
import Login from "./components/Login";
import * as ROUTES from "../src/components/Routes";
import LoggedIn from "./components/LoggedIn";
import Logout from "./components/Logout";
import FormPage from "./components/Form/FormPage";

function App() {
  return (
   <BrowserRouter>
       {/*<Navigation/>*/}

       <Switch>
           <Route exact path={ROUTES.Home} component={Home}/>
            <Route path={ROUTES.Register} component={Register}/>
           <Route path={ROUTES.Login} component={Login}/>
           <Route path={ROUTES.LoggedIn} component={LoggedIn}/>
           <Route path={ROUTES.Logout} component={Logout}/>
           <Route path={ROUTES.FormPage} component={FormPage}/>
       </Switch>
   </BrowserRouter>
  );
}

export default App;
