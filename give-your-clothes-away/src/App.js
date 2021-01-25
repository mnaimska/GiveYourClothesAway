import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './scss/components/App.scss';
import Home from './components/Home/Home';
import FormStep1Header from "./components/Form/Form-Step1/FormStep1Header";
import Register from "./components/Register";
function App() {
  return (
   <BrowserRouter>
       <Switch>
           <Route exact path="/" component={Home}/>
            <Route path="/oddaj-rzeczy" component={FormStep1Header}/>
            <Route path="/zarejestruj" component={Register}/>
       </Switch>
   </BrowserRouter>
  );
}

export default App;
