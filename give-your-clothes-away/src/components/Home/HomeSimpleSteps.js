import React from "react";

const HomeSimpleSteps=()=>{
    return (<>
        <div id="#simplesteps" className="header-home">
            <div className="right-panel-center">
                <h2>Wystarczą 4 proste kroki</h2>
                <div className="decoration home-decoration"></div>
            </div>

            </div>
        <div className="grey-div header-home">
            <div className="column-small">
                <div className="icon1"></div>
                <br/>
                <div>Wybierz rzeczy</div>
                <hr className="line"/>
                <p className="text">Ubrania, zabawski, sprzęt i inne</p>

            </div>
            <div className="column-small">
                <div className="icon2"></div>
                <br/>
                <div>Spakuj je</div>
                <hr className="line"/>
                <p className="text">Skorzystaj z worków na śmieci</p>
            </div>
            <div className="column-small">
                <div className="icon3"></div>
                <br/>
                <div>Zdecyduj komu chcesz pomóc</div>
                <hr className="line"/>
                <p className="text">Wybierz zaufane miejsce</p>
            </div>
            <div className="column-small"><div className="icon4"></div>
                <br/>
                <div>Zamów kuriera</div>
                <hr className="line"/>
                <p className="text">Kurier przyjedzie w dogodnym terminie</p>
            </div>
        </div>
        <div className="header-home">
            <button className="button home-buttons long-btn">Oddaj <br/>rzeczy</button>
        </div>



        </>)
}
export default HomeSimpleSteps;