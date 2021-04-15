import {useState, useEffect} from 'react';
import {Container, Typography} from '@material-ui/core/';
import PrimaryButton from '../reusable/PrimaryButton';


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
                <Typography variant="h5" style={{color:'white', padding:50}}>
                    What categories do you want to include into the calculation of your carbon footprint?
                </Typography>
                <PrimaryButton selected={foodCategory} onClick={()=>setFood(foodCategory=> !foodCategory)} text="Food"/>
                <PrimaryButton selected={transportationCategory} onClick={()=>setTransportation(transportationCategory => !transportationCategory)} text="Transportation" />
                <div>
                    <PrimaryButton onClick={()=>setCurrentStep(nextStep)} text="Next" />
                </div>
            </Container>
        </div>
    )
}
export default Step1