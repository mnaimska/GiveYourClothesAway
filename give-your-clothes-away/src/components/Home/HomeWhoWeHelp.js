import React from "react";

const HomeWhoWeHelp=()=>{
    return (<>
    <div id="whomwehelp" className="header-home">
        <div className="left-panel-about">
        <div className="title">Komu pomagamy?</div>
        <div className="decoration home-decoration"></div>

        </div>
    </div>
        <div className="header-home home-help">
        <div className="column"><button className="button home-buttons btn-help">Fundacjom</button></div>
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
            <div className="foundation-name">Fundacja "Dbam o zdrowie"<div>Cel i misja</div></div>
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