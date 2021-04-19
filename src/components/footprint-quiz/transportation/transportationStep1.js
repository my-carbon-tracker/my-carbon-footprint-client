import {Container, Typography, Card, Grid} from '@material-ui/core/';
import PrimaryButton from '../../reusable/PrimaryButton'
import { useState, useEffect } from 'react';

function TransportationStep1(props){
    const {currentStep, setCurrentStep, categories, setModesOfTransport} = props
    const [train, setTrain] = useState(false)
    const [bus, setBus] = useState(false)
    const [car, setCar] = useState(false)
    const [carSharing, setCarSharing] = useState(false)
    //const [fossilFueledCar, setFossilFueledCar] = useState(false)
    const [electric, setElectric] = useState(false)
    //const [hybridCar, setHybridCar] = useState(false)
    const [motorbike, setMotorbike] = useState(false)
    //const [shortDistanceBus, setShortDistanceBus] = useState(false)
    //const [longDistanceBus, setLongDistanceBus] = useState(false)
    const [boat, setBoat] = useState(false)
    const [plane, setPlane] = useState(false)
    
    useEffect(()=>{
        setModesOfTransport({train:train,bus:bus,car:car,carSharing:carSharing,electric:electric,motorbike:motorbike,boat:boat,plane:plane})
    },[train,bus,car,carSharing,electric,motorbike,boat,plane])

    if(currentStep!=='TransportationStep1'){
        return null
    }
    return(
        <Container maxWidth="sm">
            <Typography variant="h5" style={{color:'white', padding:30}}>
                What mode(s) of transport did you take?
            </Typography>
            <PrimaryButton selected={train} onClick={()=>setTrain(train=> !train)} text="Train"/>
            <PrimaryButton selected={bus} onClick={()=>setBus(bus=> !bus)} text="Bus"/>
            {/* <PrimaryButton selected={fossilFueledCar} onClick={()=>setFossilFueledCar(fossilFueledCar=> !fossilFueledCar)} text="Fossil Fueled Car"/> */}
            <PrimaryButton selected={electric} onClick={()=>setElectric(electric=> !electric)} text="Electric Vehicle"/>
            <PrimaryButton selected={car} onClick={()=>setCar(car=> !car)} text="Car"/>
            <PrimaryButton selected={carSharing} onClick={()=>setCarSharing(carSharing=> !carSharing)} text="Car Sharing"/>
            <PrimaryButton selected={motorbike} onClick={()=>setMotorbike(motorbike=> !motorbike)} text="Motorbike"/>
            <PrimaryButton selected={boat} onClick={()=>setBoat(boat=> !boat)} text="Boat"/>
            <PrimaryButton selected={plane} onClick={()=>setPlane(plane=> !plane)} text="Plane"/>
            <div style={{padding:30}}>
                {categories.food?<PrimaryButton onClick={()=>setCurrentStep('FoodStep2')} text="Go Back"/>:<PrimaryButton onClick={()=>setCurrentStep(1)} text="Go Back"/>}
                <PrimaryButton onClick={()=>setCurrentStep('TransportationStep2')} text="Next"/>
            </div>
        </Container>
    )
}

export default TransportationStep1