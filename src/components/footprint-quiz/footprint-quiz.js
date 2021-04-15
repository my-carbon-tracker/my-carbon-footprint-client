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
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
        const totalEmissions = arrFoodServings.reduce((accum, curr)=>{
            const {name, servings} = curr
            console.log(name,servings)
            const itemEmissions = food[name].emissionsPerServing * servings
            console.log(itemEmissions)
            return accum + itemEmissions
        },0)
        //will change URL once backend route is created
        // fetch(`http://localhost:3000/logFood`,{
        //     method:'POST',
        //     headers:{
        //         "Content-Type":"application/json",
        //         "Authorization":`Bearer ${token}`
        //     },
        //     body: JSON.stringify({result_food_total:totalEmissions})
        //  })
        // .then((res)=>res.json())
        // .then((responseJSON)=>console.log(responseJSON))

        console.log(totalEmissions)
        setTotalEmissions(totalEmissions)
        setCurrentStep('TotalEmissions')
    } 

    return (
        <div style={{background: 'linear-gradient(#157A42,#25DB77)', height:'100vh'}}>
            <form onSubmit={submitServings} style={{textAlign:'center'}}> 
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