import {React, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import { transport } from 'carbon-footprint';
import food from './food/food'
import Step1 from './step1';
import FoodStep1 from './food/foodStep1';
import FoodStep2 from './food/foodStep2';
import TransportationStep1 from './transportation/transportationStep1';
import TransportationStep2 from './transportation/transportationStep2';
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
    //food states
    const [foodItems, setFoodItems] = useState([])
    const [arrFoodServings, setArrFoodServings] = useState([])
    //transport states
    const [modesOfTransport, setModesOfTransport] = useState([])
    const [distances, setDistances] = useState([])

    const [totalEmissions, setTotalEmissions] = useState(0);


    const submitFoodEmissions = () => {
        let totalFoodEmissions = arrFoodServings.reduce((accum, curr)=>{
            const {name, servings} = curr
            const itemEmissions = food[name].emissionsPerServing * servings
            return accum + itemEmissions
        },0)

        let filteredFoodArr = arrFoodServings.filter((item)=>item.servings)

        //rounding to integer for now because database needs to be changed to take in a float/decimal
        totalFoodEmissions = Math.round(totalFoodEmissions)
        fetch(`http://localhost:3000/food/logFood`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body: JSON.stringify({
                result_food_total:totalFoodEmissions,
                food_serving:filteredFoodArr
            })
         })
        .then((res)=>res.json())
        .then((responseJSON)=>console.log(responseJSON))

        console.log("Food Emissions: " + totalFoodEmissions)
        return totalFoodEmissions
    }
    
    const submitTransportationEmissions = () => {
        let totalTransportEmissions = distances.reduce((accum,curr)=>{
            const {type,distance} = curr
            const tripEmissions = transport[type]*distance
            return accum + tripEmissions
        },0)
        totalTransportEmissions = Math.round(totalTransportEmissions)
        fetch(`http://localhost:3000/transport/logTransport`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body: JSON.stringify({
                result_transport_total:totalTransportEmissions
            })        
        })
        console.log("Tranport Emissions: " + totalTransportEmissions)
        return totalTransportEmissions
    }

    const submitEmissions = async(e) => {
        e.preventDefault()
        if(categories.food){
            let totalFoodEmissions = await submitFoodEmissions()
            setTotalEmissions(totalEmissions=> totalEmissions+totalFoodEmissions)
        }
        if(categories.transportation){
            let totalTransportEmissions = await submitTransportationEmissions()
            setTotalEmissions(totalEmissions=> totalEmissions+totalTransportEmissions)
        }
        setCurrentStep('TotalEmissions')   
    }

    return (
        <div style={{background: 'linear-gradient(#41B898, #84C57F)', height:'100vh'}}>
            <form onSubmit={submitEmissions} style={{textAlign:'center', color:'white'}}> 
                <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} categories={categories} setCategories={setCategories}/>
                <FoodStep1 currentStep={currentStep} setCurrentStep={setCurrentStep} setFoodItems={setFoodItems}/>
                <FoodStep2 currentStep={currentStep} setCurrentStep={setCurrentStep} setArrFoodServings={setArrFoodServings} categories={categories} foodItems={foodItems}/>
                <TransportationStep1 currentStep={currentStep} setCurrentStep={setCurrentStep} categories={categories} setModesOfTransport={setModesOfTransport}/>
                <TransportationStep2 currentStep={currentStep} setCurrentStep={setCurrentStep} modesOfTransport={modesOfTransport} setDistances={setDistances}/>
                <TotalEmissions currentStep={currentStep} totalEmissions={totalEmissions}/>
            </form>
        </div>
    )
}

export default FootprintQuiz; 