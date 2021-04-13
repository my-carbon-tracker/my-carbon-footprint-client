import {React, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import { transport, food } from 'carbon-footprint';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

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
    const [arrFoodServings, setArrFoodServings] = useState([])

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
        fetch(`localhost:8000`,{
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
    } 

    return (
        <div style={{background: 'linear-gradient(#157A42,#25DB77)', height:'100vh'}}>
            <form onSubmit={submitServings} style={{textAlign:'center'}}> 
                <Step1 currentStep={currentStep} />
                <Step2 currentStep={currentStep} />
                <Step3 currentStep={currentStep} setArrFoodServings={setArrFoodServings}/>
                {(currentStep===1 || currentStep===2) &&              
                <button 
                    className="btn btn-primary float-right" 
                    type="button" 
                    onClick={()=>setCurrentStep(currentStep+1)}
                >
                    Next
                </button> }
            </form>
        </div>
    )
}

export default FootprintQuiz; 