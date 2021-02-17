import React from "react";
import FormHeader from "./FormComponents/FormHeader";
import FormImportant from "./FormComponents/FormImportant";
import FormStepper from "./FormStepper";
import HomeContact from "../Home/HomeContact";

const FormPage=()=>{

    return (<>
        <div className="top-menu">
            <div className="login-register">
                <h4>Cześć {localStorage.getItem("userEmail")} </h4>
                <button className="button"><a href="/wylogowano">Wyloguj</a></button>
                <button className="button"><a href="oddajrzeczy">Oddaj rzeczy</a></button>
            </div>
            <div className="navigation">
                <h3><a href="/zalogowany">Start</a></h3>
                <h3><a href="/zalogowany/#simplesteps">O co chodzi? </a></h3>
                <h3><a href="/zalogowany/#about">O nas</a></h3>
                <h3><a href="/zalogowany/#whomwehelp">Fundacja i organizacje</a></h3>
                <h3><a href="#contact">Kontakt</a></h3>
            </div>
        </div>
        <FormHeader/>
        <FormImportant/>
        <FormStepper/>
        <HomeContact/>

    </>)
}

export default FormPage;