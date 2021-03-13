import React, {useContext, useEffect, useState} from "react";
import Firebase from "../Firebase/firebase";
import {FirebaseContext} from "../Firebase";

import {useHistory} from "react-router-dom";
import app from "firebase";
// import {useHistory} from "react-router-dom";

const HomeWhoWeHelp=()=>{
    const firebase = useContext(FirebaseContext);
    const db= app.firestore();
    const fundacjeRef=db.collection("fundacje");
    fundacjeRef.doc("Dbam o zdrowie").set({
        name:"Dbam o zdrowie",
        mission:"zajmuje się pomocą osobom z problemami zdrowotnymi",
        items: "inne"
    });
    fundacjeRef.doc("Pomoc ubogim").set({
        name:"Pomoc ubogim",
        mission: "pomaga ubogim",
        items: "ubrania, zabawki, książki, inne"
    });
    fundacjeRef.doc("Dla dzieci").set({
        name:"Dla dzieci",
        mission: "Pomaga dzieciom",
        items: "zabawki, ubrania, książki, inne"
    });




    const onClickFoundations =()=>{
       const names = fundacjeRef.get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                console.log(doc.data().name)
            })

        })
       fundacjeRef.get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                console.log(doc.data().mission)
            })
        })

    }
    return (<>
    <div id="whomwehelp" className="header-home">
        <div className="left-panel-about">
        <div className="title">Komu pomagamy?</div>
        <div className="decoration home-decoration"></div>

        </div>
    </div>
        <div className="header-home home-help">
        <div className="column"><button
            className="button home-buttons btn-help"
            onClick={onClickFoundations}
        >Fundacjom</button></div>
        <div className="column"><button className="button home-buttons btn-help">Organizacjom pozarządowym</button></div>
        <div className="column"><button className="button home-buttons btn-help">Lokalnym zbiórkom</button></div>
        </div>
        <div className="header-home home-help">
            <div className="center-help">
        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
            z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.  </p>
            </div>
        </div>
        <div className="center-box">
            <div className="box-list">
        <div className="foundation-list">
            <div className="foundation-name">Fundacja <div>Cel i misja</div></div>
            <div>ubrania, jedzenie</div>
        </div>
        <hr/>
        <div className="foundation-list">
            <div className="foundation-name">Fundacja "Dla dzieci"<div>Cel i misja</div></div>
            <div>ubrania, jedzenie</div>
        </div>
        <hr/>
        <div className="foundation-list">
            <div className="foundation-name">Fundacja "Bez domu"<div>Cel i misja</div></div>
            <div>ubrania, jedzenie</div>
        </div>
        <hr/>


            </div>
            <div className="center-pagination">
                <button className="button">1</button>
                <button className="button">2</button>
                <button className="button">3</button>
            </div>
        </div>

    </>)
}
export default HomeWhoWeHelp;