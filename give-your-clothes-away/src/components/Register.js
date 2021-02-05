import React, {useRef, useState, useContext} from "react";
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom'
import {FirebaseContext} from "./Firebase";


const Register =()=>{

    const {register, handleSubmit, errors, watch}= useForm({});
    const password = useRef({});
    password.current = watch("password", "");
    const firebase = useContext(FirebaseContext);
    const history = useHistory()


    const onSubmit = data => {
        firebase.doCreateUserWithEmailAndPassword(data.email, data.password)
            .then(() => history.push('/zalogowany') )
        console.log(data);
    }
    return (
        <>
            <div className="top-menu">
                {/*<div className="login-register">*/}
                {/*    <button className="button"><a href="zaloguj">Zaloguj</a></button>*/}

                {/*</div>*/}
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
                <form className="form-box"
                      onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">Email</label>
                    <input className="input"
                           type="email"
                           placeholder="email"
                           name="email"
                           ref={register}
                           // value={email}
                           // onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label className="label">Hasło</label>
                    <input className="input"
                           type="password"
                           placeholder="hasło"
                           name="password"

                           // value={setPassword}
                           ref={register({required:"wymagane hasło", minLength:{value:6, message: "za krótkie hasło"}})}
                           // onChange={(e)=>setPassword(e.target.value)}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                    <label className="label">Powtórz hasło</label>
                    <input className="input"
                           type="password"
                           name="password_repeat"
                           placeholder="powtórz hasło"
                           ref={register({validate: value =>
                           value === password.current || "hasła są różne"
                           })}

                           // value={setPassword}
                           // onChange={(e)=>setPassword(e.target.value)}
                    />
                    {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
                <br/>
                <button className="button" type="submit"  >Zarejestruj się</button>
                </form>
                <div className="form-bottom">
                    <p className="small-info">Masz już konto?</p>
                    <button className="button"><a href="/zaloguj">Zaloguj się</a></button>
                </div>
            </p>

            </div>





        </>
    )
}
export default Register;