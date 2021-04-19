import {Container, Typography} from '@material-ui/core/';
import PrimaryButton from '../../reusable/PrimaryButton'
import { useState } from 'react';

function TransportationStep1(props){
    const {currentStep, setCurrentStep, categories} = props
    const [bus, setBus] = useState(false)
    const [fossilFueledCar, setFossilFueledCar] = useState(false)
    const [electric, setElectric] = useState(false)

    if(currentStep!=='TransportationStep1'){
        return null
    }
    return(
        <Container maxWidth="sm">
            <Typography variant="h5" style={{color:'white'}}>
                What form of transport did you take?
            </Typography>
            <PrimaryButton selected={bus} onClick={()=>setBus(bus=> !bus)} text="Bus"/>
            <PrimaryButton selected={fossilFueledCar} onClick={()=>setFossilFueledCar(fossilFueledCar=> !fossilFueledCar)} text="Fossil Fueled Car"/>
            <PrimaryButton selected={electric} onClick={()=>setElectric(electric=> !electric)} text="Electric Vehicle"/>

            {categories.food?<PrimaryButton onClick={()=>setCurrentStep('FoodStep2')} text="Go Back"/>:<PrimaryButton onClick={()=>setCurrentStep(1)} text="Go Back"/>}
            <PrimaryButton onClick={()=>setCurrentStep('TransportationStep2')} text="Next"/>
        </Container>
    )
}

export default TransportationStep1