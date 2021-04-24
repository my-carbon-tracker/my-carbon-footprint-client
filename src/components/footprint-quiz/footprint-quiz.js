import {React, useState, useEffect} from 'react';
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
        let filteredFoodArr = arrFoodServings.filter((item)=>item.servings)
        let totalFoodEmissions = filteredFoodArr.reduce((accum, curr)=>{
            const {name, servings} = curr
            const itemEmissions = food[name].emissionsPerServing * servings
            curr.emissions = itemEmissions
            return accum + itemEmissions
        },0)

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
        //.then((responseJSON)=>console.log(responseJSON))
        //console.log("Food Emissions: " + totalFoodEmissions)
        return totalFoodEmissions
    }
    
    const submitTransportationEmissions = () => {
        let totalTransportEmissions = distances.reduce((accum,curr)=>{
            const {type,distance} = curr
            const tripEmissions = transport[type]*distance*1609.34
            return accum + tripEmissions
        },0)
        //totalTransportEmissions = Math.round(totalTransportEmissions)
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
        //console.log("Tranport Emissions: " + totalTransportEmissions)
        return totalTransportEmissions
    }

    const submitEmissions = async(e) => {
        e.preventDefault()
        let totalFoodEmissions = 0
        let totalTransportEmissions = 0
        if(categories.food){
            totalFoodEmissions = await submitFoodEmissions()
        }
        if(categories.transportation){
            totalTransportEmissions = await submitTransportationEmissions()
        }
        setTotalEmissions(totalEmissions => totalEmissions+totalFoodEmissions+totalTransportEmissions)
    }

    useEffect(() => {
        if(totalEmissions){
            fetch(`http://localhost:3000/auth/adjust/total`,{
                method:'PATCH',
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                },
                body: JSON.stringify({
                    result_grand_total:totalEmissions
                })
            })
            .then((res)=>res.json())
            .then((resJSON)=>{
                console.log(resJSON)
                setCurrentStep('TotalEmissions') 
            })
            .catch(err=>console.log(err))
        }
    },[totalEmissions])

    return (
        // <div style={{background: 'linear-gradient(#41B898, #84C57F)', height:'100vh'}}>
        <div style={{background: 'linear-gradient(#DFB593, #DF7B7D)', height:'100vh'}}>
            <form onSubmit={submitEmissions} style={{textAlign:'center', color:'white'}}> 
                <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} categories={categories} setCategories={setCategories}/>
                <FoodStep1 currentStep={currentStep} setCurrentStep={setCurrentStep} setFoodItems={setFoodItems}/>
                <FoodStep2 currentStep={currentStep} setCurrentStep={setCurrentStep} setArrFoodServings={setArrFoodServings} categories={categories} foodItems={foodItems}/>
                <TransportationStep1 currentStep={currentStep} setCurrentStep={setCurrentStep} categories={categories} setModesOfTransport={setModesOfTransport}/>
                <TransportationStep2 currentStep={currentStep} setCurrentStep={setCurrentStep} modesOfTransport={modesOfTransport} setDistances={setDistances}/>
                <TotalEmissions currentStep={currentStep} totalEmissions={totalEmissions} token={token}/>
            </form>
        </div>
    )
}

export default FootprintQuiz; 