
import React, {useRef, useContext} from "react";
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom'
import {FirebaseContext} from "./Firebase";


const Login =()=>{

    const {register, handleSubmit, errors, watch}= useForm({});
    const password = useRef({});
    password.current = watch("password", "");
    const firebase = useContext(FirebaseContext);
    const history = useHistory()


    const onSubmit = data => {
        firebase.doSignInWithEmailAndPassword(data.email, data.password)
            .then(() => history.push('/zalogowany') )
        console.log(data);
    }
    return (
        <>
            <div className="top-menu">
                {/*<div className="login-register">*/}
                {/*    <button className="button">Zaloguj</button>*/}
                {/*    <button className="button">Załóż konto</button>*/}
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
                <p className="title">Zaloguj się
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
                        <label className="label">Wpisz hasło</label>
                        <input className="input"
                               type="password"
                               placeholder="hasło"
                               name="password"
                               ref={register({required:"wymagane hasło", minLength:{value:6, message: "za krótkie hasło"}})}

                        />
                        {errors.password && <p>{errors.password.message}</p>}
                        <div className="center buttons">
                            <button className="button" type="submit">Zaloguj się</button>

                        </div>

                    </form>
                    <div className="form-bottom">
                    <p className="small-info">Nie masz konta?</p>
                    <button className="button"><a href="/zarejestruj">Załóż konto</a></button>
                    </div>
                </p>


            </div>




        </>
    )
}
export default Login;