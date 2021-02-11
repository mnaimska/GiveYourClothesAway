import React from "react";
import {useFormContext} from "react-hook-form";
import {useForm, useStep} from "react-hooks-helper";
import {FormFour, FormOne, FormReview, FormThree, FormTwo} from "./Form";
import FormSubmit from "./FormSubmit";

const defaultData={
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    checkbox4:false,
    checkbox5:false,
    amount:"",
    selectCity:"",
    dzieciom:"",
    matkom:"",
    bezdomnym:"",
    niepełnosprawnym:"",
    newTab:[],
    street:"",
    city:"",
    postalCode:"",
    mobile:"",
    date:"",
    time:"",
    remarks:"",

}
const steps = [
    {id: 'co'},
    {id:'ile'},
    {id:'gdzie'},
    {id:'adres'},
    {id:'podsumowanie'},
    {id:'submit'},
]
const FormStepper =()=>{
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep: 0,
    })
    const props ={formData, setForm, navigation};
    switch(step.id){

        case "co":
            return <FormOne {...props}/>;
        case "ile":
            return <FormTwo {...props}/>;
        case "gdzie":
            return <FormThree {...props}/>;
        case "adres":
            return <FormFour {...props}/>;
        case "podsumowanie":
            return <FormReview {...props}/>;
        case "submit":
            return <FormSubmit{...props}/>;

    }
    console.log(step);


    return (<><h1>FormStepper</h1></>)
}
export default FormStepper;



