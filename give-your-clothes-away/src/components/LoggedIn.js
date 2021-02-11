import React, {useContext, useState} from "react";
import { useHistory } from 'react-router-dom'
import {FirebaseContext} from "./Firebase";
import Home from "./Home/Home";
import HomeHeader from "./Home/HomeHeader";
import HomeAbout from "./Home/HomeAbout";
import HomeSimpleSteps from "./Home/HomeSimpleSteps";
import HomeThreeColumns from "./Home/HomeThreeColumns";
import HomeWhoWeHelp from "./Home/HomeWhoWeHelp";
import HomeContact from "./Home/HomeContact";

const LoggedIn =({userEmail})=>{

    const firebase = useContext(FirebaseContext);
    const history = useHistory()
    // const [isLogged, setIsLogged]=useState(false);


    const handleLogOut = data => {
        firebase.doSignOut(data.email, data.password)
            .then(() => {history.push('/wylogowano')
                            // localStorage.clear()
                // setIsLogged(false)
            } )
        console.log(data);


        // localStorage.clear();

    }
    return (<>
        <div >

        </div>

        <div className="top-menu">
            <div className="login-register">
                <div className="loggedIn">
                    <p>jesteś zalogowany {localStorage.getItem("userEmail")}</p>
                    <button className="button" onClick={handleLogOut}>Wyloguj</button>
                </div>
            </div>
            <div className="navigation">
                <h3><a href="#home">Start</a></h3>
                <h3><a href="#simplesteps">O co chodzi?</a> </h3>
                <h3><a href="#about">O nas</a></h3>
                <h3><a href="#whomwehelp">Fundacja i organizacje</a></h3>
                <h3><a href="#contact">Kontakt</a></h3>
            </div>
        </div>
        <HomeHeader/>
        <HomeThreeColumns/>
        <HomeSimpleSteps/>
        <HomeAbout/>
        <HomeWhoWeHelp/>
        <HomeContact/>
    </>)
}
export default LoggedIn;