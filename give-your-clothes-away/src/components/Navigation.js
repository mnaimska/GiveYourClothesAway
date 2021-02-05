import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "./Routes";

const Navigation =()=>{
    return (<>
    <ul>
        <li>
            <Link to={ROUTES.Home}>Strona Główna</Link>
        </li>
        <li>
            <Link to={ROUTES.Register}>Zarejestruj się</Link>
        </li>
        <li>
            <Link to={ROUTES.Login}>Zaloguj się</Link>
        </li>
    </ul>

    </>)
}
export default Navigation;