import React from "react";
const FormSummary =()=>{
    return (<>
        <div className="header-home grey-background">
            <div>

                <h3>Podsumowanie Twojej darowizny</h3>
                <h4>Oddajesz:</h4>

                <div className="internal-form">
                    <div className="form">
                        <h4>Adres odbioru</h4>
                        <label>Ulica <input type="text"/></label>
                        <label>Miasto <input type="text"/></label>
                        <label>Kod pocztowy <input type="text"/></label>
                        <label>Numer telefonu <input type="text"/></label>
                    </div>
                    <div className="form">
                        <h4>Termin odbioru</h4>
                        <label>Data <input type="text"/></label>
                        <label>Godzina <input type="text"/></label>
                        <label>Uwagi dla kuriera <textarea type="text"/></label>

                    </div>


                </div>


                <div className="control-group">

                    <button className="button home-buttons form-btn">Wstecz</button>
                    <button className="button home-buttons form-btn">Potwierdzam</button>
                </div>
            </div>
            <div>right</div>
        </div>




    </>)
}

export default FormSummary;