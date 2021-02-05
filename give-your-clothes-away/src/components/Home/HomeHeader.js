import React from "react";
const HomeHeader =()=>{
    return (
        <>
        <div className="header-home">
            <div className="left-panel">
                <div className="image-left"></div>
            </div>
            <div className="right-panel">
                    <div className="right-panel-center">
                <p>Zacznij pomagać!</p>
               <p> Oddaj niechciane rzeczy w zaufane ręce</p>
                <div className="decoration home-decoration"></div>
                <div className="header-center-btn">
                    <button className="button home-buttons"><a href="/oddaj-rzeczy">Oddaj rzeczy</a></button>
                    <button className="button home-buttons">Zorganizuj zbiórkę</button>
                </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default HomeHeader;