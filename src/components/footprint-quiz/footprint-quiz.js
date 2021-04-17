import {React, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import { transport } from 'carbon-footprint';
import food from './food/food'
import Step1 from './step1';
import FoodStep1 from './food/foodStep1';
import FoodStep2 from './food/foodStep2';
import TransportationStep1 from './transportation/transportationStep1';
import TotalEmissions from './TotalEmissions';

const useStyles = makeStyles({
    background: 'linear-gradient(#41B898 50%, #84C57F 50%)',
})

function FootprintQuiz(props) {
    /*
    calculates greenhouse gas emissions produced by one kilo of each food
    1 kilo = 2.2 lbs
    */
    const {token} = props
    const [currentStep, setCurrentStep] = useState(1)
    const [categories, setCategories] = useState({food:false, transportation:false})
    const [arrFoodServings, setArrFoodServings] = useState([])
    const [totalEmissions, setTotalEmissions] = useState(0);


    const submitServings = (e) => {
        e.preventDefault()
        let totalEmissions = arrFoodServings.reduce((accum, curr)=>{
            const {name, servings} = curr
            console.log(name,servings)
            const itemEmissions = food[name].emissionsPerServing * servings
            console.log(itemEmissions)
            return accum + itemEmissions
        },0)
        //rounding to integer for now because database needs to be changed to take in a float/decimal
        totalEmissions = Math.round(totalEmissions)
        fetch(`http://localhost:3000/food/logFood`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body: JSON.stringify({result_food_total:totalEmissions})
         })
        .then((res)=>res.json())
        .then((responseJSON)=>console.log(responseJSON))

        console.log(totalEmissions)
        setTotalEmissions(totalEmissions)
        setCurrentStep('TotalEmissions')
    } 

    return (
        <div style={{background: 'linear-gradient(#41B898, #84C57F)', height:'100vh'}}>
            <form onSubmit={submitServings} style={{textAlign:'center', color:'white'}}> 
                <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} categories={categories} setCategories={setCategories}/>
                <FoodStep1 currentStep={currentStep} setCurrentStep={setCurrentStep}/>
                <FoodStep2 currentStep={currentStep} setArrFoodServings={setArrFoodServings}/>
                <TransportationStep1 currentStep={currentStep}/>
                <TotalEmissions currentStep={currentStep} totalEmissions={totalEmissions}/>
            </form>
        </div>
    )
}

export default FootprintQuiz; 