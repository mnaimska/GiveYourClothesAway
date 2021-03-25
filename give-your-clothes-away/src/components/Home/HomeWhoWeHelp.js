import React, {useContext, useEffect, useState} from "react";
import Firebase from "../Firebase/firebase";
import {FirebaseContext} from "../Firebase";

import {useHistory} from "react-router-dom";
import app from "firebase";
// import {useHistory} from "react-router-dom";

const HomeWhoWeHelp=()=>{
    const [showFoundations, setShowFoundations]=useState(false);
    const [showNGO, setShowNGO] = useState(false);
    const [showLocal, setShowLocal]=useState(false);
    const [names, setNames] = useState([]);

    const [missions, setMissions]=useState([]);
    const [namesNGO, setNamesNGO] = useState([]);
    const [missionsNGO, setMissionsNGO] = useState([])
    const [namesLocal, setNamesLocal] = useState([])
    const [missionsLocal, setMissionsLocal] = useState([])
    const firebase = useContext(FirebaseContext);
    const db= app.firestore();

    const fundacjeRef=db.collection("fundacje");

    // const [allFundNames, setAllFundNames] = useState([]);

    fundacjeRef.doc("Dbam o zdrowie").set({
        name:"Dbam o zdrowie",
        mission:"zajmuje się pomocą osobom z problemami zdrowotnymi",
        items: "inne",
        type: "fundacja"
    });
    fundacjeRef.doc("Pomoc ubogim").set({
        name:"Pomoc ubogim",
        mission: "pomaga ubogim",
        items: "ubrania, zabawki, książki, inne",
        type: "fundacja"
    });
    fundacjeRef.doc("Dla dzieci").set({
        name:"Dla dzieci",
        mission: "Pomaga dzieciom",
        items: "zabawki, ubrania, książki, inne",
        type: "fundacja"
    });
const ngoRef = db.collection("ngo");
ngoRef.doc("Zdrowie").set({
    name:"Zdrowie",
    mission:"ngo pomagające w dbaniu o zdrowie",
    items: "inne"
})
    ngoRef.doc("Dzieci").set({
        name:"Dzieci",
        mission:"ngo pomagające dzieciom w potrzebie",
        items: "zabawki, książki, inne"
    })

const localRef = db.collection("Zbiórki lokalne");
localRef.doc("Zbiórka pierwsza").set({
    name:"Zbiórka lokalna nr 1",
    mission:"pierwsza zbiórka lokalna",
    items: "inne"
})
    localRef.doc("Zbiórka druga").set({
        name:"Zbiórka lokalna nr 2",
        mission:"druga zbiórka lokalna",
        items: "inne"
    })

    const onClickFoundations =()=>{

       fundacjeRef.get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                setNames(doc.data().name);
                setMissions(doc.data().mission);
                // console.log(doc.data().name, doc.data().mission)
                setShowFoundations(!showFoundations);
                setShowLocal(false);
                setShowNGO(false);
                setNames(doc.data().name);
            })
           
           fundacjeRef.get().then((querySnapshot)=>{
               // console.log("pojedyncza nazwa")

           })


            const namesFund = db.collectionGroup("fundacje");
            namesFund.get().then((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    console.log(doc.id, "=>", doc.data().name);
                    // const allFundNames = doc.data().name;
                    // console.log(allFundNames);
                    // setAllFundNames( doc.data().name);
                    console.log(doc.data().name);

                })
            })


        })
        // fundacjeRef.where("name", "==", true).get().then(querySnapshot=>{
        //     console.log(querySnapshot.docs);
        // })
    }
    const onClickNGO =()=>{
        ngoRef.get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                setNamesNGO(doc.data().name);
                setMissionsNGO(doc.data().mission);
                // console.log(doc.data().name, doc.data().mission)
                setShowNGO(!showNGO);
                setShowLocal(false);
                setShowFoundations(false);
                // setNames(doc.data().name);
            })
            fundacjeRef.get().then((querySnapshot)=>{
                console.log("pojedyncza nazwa NGO")
            })

        })

        // fundacjeRef.where("name", "==", true).get().then(querySnapshot=>{
        //     console.log(querySnapshot.docs);
        // })
    }

    const onClickLocal =()=>{
        localRef.get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                setNamesLocal(doc.data().name);
                setMissionsLocal(doc.data().mission);
                // console.log(doc.data().name, doc.data().mission)
                setShowNGO(false);
                setShowFoundations(false);
                setShowLocal(!showLocal);
            })
            localRef.get().then((querySnapshot)=>{
                console.log("pojedyncza nazwa lokalnej zbiórki")
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
        >Fundacjom</button>
        </div>
        <div className="column"><button className="button home-buttons btn-help"
        onClick={onClickNGO}
        >Organizacjom pozarządowym</button></div>
        <div className="column"><button className="button home-buttons btn-help"
        onClick={onClickLocal}
        >Lokalnym zbiórkom</button></div>
        </div>
        <div className="header-home home-help">
            <div className="center-help">
        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
            z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.  </p>
            </div>
        </div>
        {showFoundations?
            <div className="box-list">
            <div className="foundation-list">

                <div className="foundation-name">Fundacja {names} <div>Cel i misja {missions} </div></div>
                <div>ubrania, jedzenie</div>
            </div>
            <hr/>
            <div className="foundation-list">
                <div className="foundation-name">Fundacja {names} <div>Cel i misja {missions}</div></div>
                <div>ubrania, jedzenie</div>
            </div>
            <hr/>
            <div className="foundation-list">
                <div className="foundation-name">Fundacja {names}<div>Cel i misja</div></div>
                <div>ubrania, jedzenie</div>
            </div>
            <hr/>
        </div>

            : <div></div>}
        {showNGO? <div className="box-list">
            <div className="foundation-list">

                <div className="foundation-name">Organizacja pozarządowa {namesNGO}<div>Cel i misja {missionsNGO} </div></div>
                <div>ubrania, jedzenie</div>
            </div>
            <hr/>
            <div className="foundation-list">
                <div className="foundation-name">Organizacja pozarządowa {namesNGO}<div>Cel i misja {missionsNGO}</div></div>
                <div>ubrania, jedzenie</div>
            </div>
            <hr/>
            <div className="foundation-list">
                <div className="foundation-name">Organizacja pozarządowa {namesNGO}<div>Cel i misja {missionsNGO}</div></div>
                <div>ubrania, jedzenie</div>
            </div>
            <hr/>
            {!showFoundations}

        </div> : <div></div>}
        {showLocal? <div className="box-list">
            <div className="foundation-list">

                <div className="foundation-name">Zbiórka lokalna {namesLocal}<div>Cel i misja {missionsLocal} </div></div>
                <div>ubrania, jedzenie</div>
            </div>
            <hr/>
            <div className="foundation-list">
                <div className="foundation-name">Zbiórka lokalna {namesLocal}<div>Cel i misja {missionsLocal}</div></div>
                <div>ubrania, jedzenie</div>
            </div>
            <hr/>
            <div className="foundation-list">
                <div className="foundation-name">Zbiórka lokalna {namesLocal}<div>Cel i misja {missionsLocal}</div></div>
                <div>ubrania, jedzenie</div>
            </div>
            <hr/>
            {/*{!showFoundations}*/}

        </div> : <div></div>}
        <div className="center-box">
        {/*    <div className="box-list">*/}
        {/*<div className="foundation-list">*/}

        {/*    <div className="foundation-name">Fundacja <div>Cel i misja</div></div>*/}
        {/*    <div>ubrania, jedzenie</div>*/}
        {/*</div>*/}
        {/*<hr/>*/}
        {/*<div className="foundation-list">*/}
        {/*    <div className="foundation-name">Fundacja "Dla dzieci"<div>Cel i misja</div></div>*/}
        {/*    <div>ubrania, jedzenie</div>*/}
        {/*</div>*/}
        {/*<hr/>*/}
        {/*<div className="foundation-list">*/}
        {/*    <div className="foundation-name">Fundacja "Bez domu"<div>Cel i misja</div></div>*/}
        {/*    <div>ubrania, jedzenie</div>*/}
        {/*</div>*/}
        {/*<hr/>*/}


        {/*    </div>*/}
            <div className="center-pagination">
                <button className="button">1</button>
                <button className="button">2</button>
                <button className="button">3</button>
            </div>
        </div>

    </>)
}
export default HomeWhoWeHelp;