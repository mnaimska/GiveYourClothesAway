import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";

const Home =()=>{
    return (
        <>
            <div id="#home">
            <div className="top-menu">
                <div className="login-register">
                    <button className="button"><a href="/zaloguj">Zaloguj</a></button>
                    <button className="button"><a href="zarejestruj">Załóż konto</a></button>
                </div>
                <div className="navigation">
                    <h3><a href="#home">Start</a></h3>
                    <h3><a href="#simplesteps">O co chodzi? </a></h3>
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
            </div>
        </>
    )
}
export default Home;
