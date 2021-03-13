import React, {useContext, useState} from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import app from "firebase";
import {FirebaseContext} from "../Firebase";
import { useHistory } from 'react-router-dom'


export const FormOne = ({formData, setForm, navigation}) => {

    const {checkbox1, checkbox2, checkbox3, checkbox4, checkbox5}=formData;
    console.log(checkbox1);
    console.log(checkbox2);
    console.log(formData);
   const onlyChecked=(e)=>{
       // const [checkedTab, setCheckedTab]=useState([]);
       if(checkbox1){

           console.log(checkbox1);
       }else {
           console.log("empty")
       }
   }
   console.log(onlyChecked());
    return (
        <div>
        <form className="background-image header-home">
            <div className="min-box-height">
                <div>
                    <div>Krok 1/4</div>
                    <h3>Zaznacz co chcesz oddać</h3>
                    <div>
                        <div>
                            <label>
                                <input type="checkbox" name="checkbox1"
                                       onChange={setForm}
                                       value={checkbox1}/>
                                ubrania, które nadają się do ponownego użycia
                            </label>
                        </div>
                        <div>

                            <label>
                                <input type="checkbox" name="checkbox2" onChange={setForm} value={checkbox2}/>
                                ubrania do wyrzucenia
                            </label>
                        </div>
                        <div>

                            <label>
                                <input type="checkbox" name="checkbox3" onChange={setForm} value={checkbox3}/>
                                zabawki</label>
                        </div>
                        <div>

                            <label>
                                <input type="checkbox" name="checkbox4" onChange={setForm} value={checkbox4}/>
                                książki</label>
                        </div>
                        <div>

                            <label>
                                <input type="checkbox" name="checkbox5" onChange={setForm} value={checkbox5}/>
                                inne</label>
                        </div>
                        <button className="button home-buttons form-btn" onClick={()=>navigation.next()}>Dalej</button>
                    </div>
                </div>
                {/*<div className="image-right"></div>*/}
            </div>
        </form>
        </div>
    );
};

export const FormTwo = ({formData, setForm, navigation}) => {

    const {amount}=formData;
    console.log(amount);
    return (
        <form>

            <div className="header-home background-image">
                <div className="min-box-height">
                    <div>Krok 2/4</div>
                    <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy</h3>
                    <div>

                        <div className="control-group">
                            <label className="control control-checkbox">
                                Liczba 60l worków
                                <select type="select" name="amount" onChange={setForm} value={amount}>
                                    <option value="" selected>--Wybierz--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </label>
                            <button type="button" className="button home-buttons form-btn" onClick={()=>navigation.previous()}>Wstecz</button>
                            <button type="button" className="button home-buttons form-btn" onClick={()=>navigation.next()}>Dalej</button>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    );
};

export const FormThree = ({formData, setForm, navigation}) => {
const {selectCity, dzieciom, komu, matkom, bezdomnym, niepełnosprawnym}=formData;
const chosen = ["dzieciom", "matkom", "bezdomnym", "niepełnosprawnym"];
const [checked, setChecked]=useState([]);
const handleChecked=(e)=>{
    const who= chosen[e.target.dataset.id];
    let newTab=checked.filter(item=>item !==who);
    if(e.target.checked) newTab.push(who);
    setChecked(newTab);

    // console.log(who);
    console.log(newTab);

}


    return (
        <form>

            <div className="header-home background-image">
                <div className="min-box-height">
                    <div>Krok 3/4</div>
                    <h3>Lokalizacja</h3>
                    <select type="select" name="selectCity" onChange={setForm} value={selectCity}>
                        <option value="" selected>--Wybierz--</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Gdańsk">Gdańsk</option>
                    </select>
                    <h3>Komu chcesz pomóc?</h3>

                    {/*<div>{chosen.map((who, id)=>(<label key={id}>*/}
                    {/*    <input type="checkbox"*/}
                    {/*           name="komu"*/}
                    {/*           value={komu}*/}
                    {/*         */}
                    {/*           data-id={id}*/}
                    {/*           onChange={setForm}*/}
                    {/*           onClick={handleChecked}/>{who}*/}
                    {/*</label>))}</div>*/}
                    {/*<span>Wybrałeś:</span>*/}
                    {/*<div value={komu} name="komu" id="checkbox1Results" onChange={setForm}>{checked.map((item, id)=><li key={id}>{item}</li>)}</div>*/}
                    {/*<CheckboxResultWho komu={komu} setForm={setForm} checked={checked}/>*/}
                    {/*<div>{checked.map((item, id)=><span key={id}>{item}</span>)}</div>*/}
                    <label><input type="checkbox"
                                  name="dzieciom"
                                  onChange={setForm}
                                  value={dzieciom}
                    />
                    dzieciom</label>

                    <label> <input
                        type="checkbox"
                        name="matkom"
                        onChange={setForm}
                        value={matkom}
                        />samotnym matkom</label>
                    <label><input
                        type="checkbox"
                        name="bezdomnym"
                        onChange={setForm}
                        value={bezdomnym}
                    />bezdomnym</label>
                    <label> <input
                        type="checkbox"
                        name="niepełnosprawnym"
                        onChange={setForm}
                        value={niepełnosprawnym}
                    />niepełnosprawnym</label>
                    <h3>Wpisz nazwę konkretnej orgranizacj (opcjonalnie)</h3>
                    <input className="input-step3" type="text"/>
                    <div>

                        <div className="control-group">

                            <button type="button" className="button home-buttons form-btn" onClick={()=>navigation.previous()}>Wstecz</button>
                            <button type="button" className="button home-buttons form-btn" onClick={()=>navigation.next()}>Dalej</button>
                        </div>
                    </div>
                </div>

            </div>

        </form>
    );
};

export const CheckboxResultWho=({komu, setForm, checked})=>{
    return (<>
        <div value={komu} name="komu" id="checkbox1Results" onChange={setForm}>{checked.map((item, id)=><li key={id}>{item}</li>)}</div>



    </>)
}
export const FormFour = ({formData, setForm, navigation}) => {
const {street, city, postalCode, mobile, date, time, remarks}=formData
console.log(street);
    return (
        <form>
            <div className="header-home background-image">
                <div className="min-box-height">
                    <div>Krok 4/4</div>
                    <h3>Podaj adres i termin odbioru rzeczy przez kuriera</h3>
                    <div className="internal-form">
                        <div className="form">
                            <h4>Podaj adres odbioru</h4>
                            <label>Ulica
                                <input
                                    name="street"
                                type="text"
                                onChange={setForm}
                                value={street}/>
                            </label>
                            <label>Miasto <input name="city" onChange={setForm} value={city} type="text"/></label>
                            <label>Kod pocztowy <input name="postalCode" onChange={setForm} value={postalCode} type="text"/></label>
                            <label>Numer telefonu <input name="mobile" onChange={setForm} value={mobile} type="text"/></label>
                        </div>
                        <div className="form">
                            <h4>Termin odbioru</h4>
                            <label>Data <input name="date" onChange={setForm} value={date} type="date"/></label>
                            <label>Godzina <input name="time" onChange={setForm} value={time} type="time"/></label>
                            <label>Uwagi dla kuriera <textarea name="remarks" onChange={setForm} value={remarks} type="text"/></label>

                        </div>


                    </div>


                    <div className="control-group">

                        <button type="button" className="button home-buttons form-btn" onClick={()=>navigation.previous()}>Wstecz</button>
                        <button type="button" className="button home-buttons form-btn" onClick={()=>navigation.next()}>Dalej</button>
                    </div>
                </div>

            </div>
        </form>
    );
};

export const FormReview =({formData, navigation})=>{

    const firebase = useContext(FirebaseContext);
    const history = useHistory();
    // function writeUserData(
    //                         userId,
    //                        email,  checkbox1, checkbox2, checkbox3, checkbox4, checkbox5,
    //                        amount, selectCity, dzieciom, matkom, bezdomnym, niepełnosprawnym, street,
    //                        city, postalCode, mobile, date, time, remarks,
    //
    // ) {
    //     const userRef = app.database().ref('Users/');
    //     const singleUser={
    //         userId,
    //         email, checkbox1, checkbox2, checkbox3, checkbox4, checkbox5,
    //         amount, selectCity, dzieciom, matkom, bezdomnym, niepełnosprawnym, street,
    //         city, postalCode, mobile, date, time, remarks,
    //
    //
    //     }
    //
    //     userRef.push(singleUser);
    //     console.log(singleUser);
    //     console.log(singleUser.key);
    // }

    const {go}=navigation;
    const {checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, amount, selectCity,
        dzieciom, matkom, bezdomnym, niepełnosprawnym, street, city, postalCode, mobile,
        date, time, remarks
    }=formData;
        const handleSubmit=()=>{
            const firebaseRef=app.database().ref();
            // const singleUser = firebaseRef.child("Users").set(formData);
            const users = firebaseRef.child("Users");
            const singleUser=users.child("singleUser").set(formData);
        }
        console.log(handleSubmit());

    console.log(formData);



        const submitBtn=document.getElementById("submitBtn");
    return (<>
                {/*<h3>Podsumowanie Twojej darowizny</h3>*/}
                {/*<h4>Oddajesz: </h4>*/}
                {/*<Summary summary="co" go={go} details={[*/}
                {/*    {'Ubrania do ponownego użytku ':checkbox1},*/}
                {/*    {'Ubrania do wyrzucenia':checkbox2},*/}
                {/*    {'Zabawki':checkbox3},*/}
                {/*    {'Książki':checkbox4},*/}
                {/*    {'Inne':checkbox5}*/}

                {/*]}/>*/}
                {/*<h4>Ilość worków: </h4>*/}
                {/*<Summary summary="ile" go={go} key={amount} details={[*/}
                {/*    {'Ilość worków':amount},*/}
                {/*                    ]}/>*/}


                {/*<h4>Komu i w jakim mieście pomagasz: </h4>*/}
                {/*<div>Tutaj</div>*/}
                {/*<Summary  summary="gdzie" go={go} details={[*/}
                {/*    {'Miasto':selectCity},*/}
                {/*    // {'Komu':komu},*/}
                {/*   {'Dzieciom':dzieciom},*/}
                {/*    {'Samotnym matkom': matkom},*/}
                {/*    {'bezdomnym': bezdomnym},*/}
                {/*    {'niepełnosprawnym':niepełnosprawnym},*/}
                {/*]}/>*/}

                {/*<span>{komu.map(item=><span>{item}</span>)}</span>*/}
                {/*<p>{checked.join(", ")}</p>*/}
                {/*<p>{newTab.map(item=>( <span>{item}</span>))}</p>*/}
                {/*<div>{checked.map((item, id)=><span key={id}>{item}</span>)}</div>*/}
                {/*<div className="address-form">*/}
                {/*    <div className="form">*/}
                {/*        <h4>Adres odbioru</h4>*/}
                {/*        <Summary summary="adres" go={go} details={[*/}
                {/*            {'Ulica':street},*/}
                {/*            {'Miasto':city},*/}
                {/*            {'Kod':postalCode},*/}
                {/*            {"Numer tel": mobile}*/}

                {/*            ]}/>*/}


                    {/*</div>*/}
                    {/*<div className="form">*/}
                    {/*    <h4>Termin odbioru</h4>*/}
                    {/*    <Summary  summary="adres" go={go} details={[*/}
                    {/*        {'Data':date},*/}
                    {/*        {'Godzina':time},*/}
                    {/*        {'Uwagi dla kuriera':remarks}*/}

                    {/*    ]}/>*/}
                    {/*</div>*/}


                {/*</div>*/}


        <div className="background-image header-home">
            <div className="min-box-height">
                <h3>Podsumowanie Twojej darowizny:</h3>
                <h3>Oddajesz:</h3>
                <div className="inline">
                <div className="icon1"> </div>
                   <div>   {amount} worki, </div>
                </div>
                <div className="inline">
                    <div className="icon4"></div>
                    <div>  dla lokalizacji:  {selectCity}</div>
                </div>
                <div className="inline">
                    <div className="small-box">
                <h5>Adres odbioru:</h5>
                <div>Ulica:  {street}</div>
                <div>Miasto:  {city}</div>
                <div>Kod pocztowy:  {postalCode}</div>
                <div>Nr telefonu:  {mobile}</div>
                    </div>
                    <div className="small-box">
                        <h5>Termin odbioru:</h5>
                        <div>Data:  {date}</div>
                        <div>Godzina:  {time}</div>
                        <div>Uwagi dla kuriera:  {remarks}</div>
                    </div>
                </div>
                <div className="control-group">
                    <button type="button" className="button home-buttons form-btn" onClick={()=>navigation.previous()}>Wstecz</button>
                    <button type="button"
                            className="button home-buttons form-btn"
                            id="submitBtn"
                            onClick={handleSubmit}
                        // onClick={writeUserData}
                            onClick={()=>go('submit')}
                    >Potwierdzam</button>
                </div>
            </div>


        </div>




    </>)
}

export const Summary=({summary, details, go})=>{

    return (<>

       <Accordion>
       <AccordionSummary
       expandIcon={<ExpandMoreIcon/>}
       >{summary}</AccordionSummary>
           <AccordionDetails>
               <div>
                   {details.map((data,index)=>{
                       const objKey=Object.keys(data)[0];
                       const objVal=data[objKey];
                       return (<ListItemText key={index}>{`${objKey}: ${objVal}`}</ListItemText>)
                   })}
                   <IconButton onClick={()=>go(`${summary.toLowerCase()}`)}><EditIcon/></IconButton>
               </div>

           </AccordionDetails>
       </Accordion>
    </>)
}

