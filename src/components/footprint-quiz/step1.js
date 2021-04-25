import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Box} from '@material-ui/core/';
import PrimaryButton from '../reusable/PrimaryButton';
/* eslint-disable react/prop-types */

function Step1(props){
    const {currentStep, setCurrentStep, categories, setCategories} = props;
    const [nextStep, setNextStep] = useState('')
    const [transportationCategory, setTransportation] = useState(false)
    const [foodCategory, setFood] = useState(false)

    useEffect(()=>{
        setCategories({food:foodCategory, transportation:transportationCategory})
        if(foodCategory===true){
            setNextStep('FoodStep1')
        }
        else if(transportationCategory===true){
            setNextStep('TransportationStep1')
        }
        //need to come with solution of what to show when no categories are selected
    },[transportationCategory, foodCategory])

    if(currentStep!==1){
        return null
    }

    return(
        <div className='form group'>
            <Container maxWidth="sm">
                <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', padding:30}}>
                What categories do you want to include into the calculation of your carbon footprint?
                </Box>
                <PrimaryButton selected={foodCategory} onClick={()=>setFood(foodCategory=> !foodCategory)} text="Food"/>
                <PrimaryButton selected={transportationCategory} onClick={()=>setTransportation(transportationCategory => !transportationCategory)} text="Transportation" />
                <div style={{padding:30}}>
                    <PrimaryButton onClick={()=>setCurrentStep(nextStep)} text="Next" />
                </div>
            </Container>
        </div>
    )
}
export default Step1