import React from "react";
const Register =()=>{
    return (
        <>
            <div className="top-menu">
                <div className="login-register">
                    <button className="button">Zaloguj</button>
                    <button className="button">Załóż konto</button>
                </div>
                <div className="navigation">
                    <h3>Start</h3>
                    <h3>O co chodzi? </h3>
                    <h3>O nas</h3>
                    <h3>Fundacja i organizacje</h3>
                    <h3>Kontakt</h3>
                </div>
            </div>
            <div className="center">
            <p className="title">Załóż konto
                <div className="decoration"></div>
                <div className="form-box">
                    <label className="label">Email</label>
                    <input className="input" type="text" placeholder="email"/>
                    <label className="label">Hasło</label>
                    <input className="input" type="password" placeholder="hasło"/>
                    <label className="label">Powtórz hasło</label>
                    <input className="input" type="password" placeholder="powtórz hasło"/>


                </div>
            </p>

            </div>
            <div className="center buttons">
            <button className="button">Zaloguj się</button>
            <button className="button">Załóż konto</button>
            </div>




        </>
    )
}
export default Register;