import { useState,useEffect } from "react"
import {Box, TextField} from '@material-ui/core'
import PrimaryButton from '../../reusable/PrimaryButton'

export default function(props){
    let {currentStep, setCurrentStep, modesOfTransport, setDistances} = props
    const [trainDistance, setTrainDistance] = useState(0)
    const [busDistance, setBusDistance] = useState(0)
    const [carDistance, setCarDistance] = useState(0)
    const [carSharingDistance, setCarSharingDistance] = useState(0)
    const [electricDistance, setElectricDistance] = useState(0)
    const [motorbikeDistance, setMotorbikeDistance] = useState(0)
    const [boatDistance, setBoatDistance] = useState(0)
    const [planeDistance, setPlaneDistance] = useState(0)

    useEffect(()=>{
        setDistances([
            {type:'train', distance:trainDistance},
            {type:'bus', distance:busDistance},
            {type:'car', distance:carDistance},
            {type:'carSharing', distance:carSharingDistance},
            {type:'electricVehicle', distance:electricDistance},
            {type:'motorbike', distance:motorbikeDistance},
            {type:'boat', distance:boatDistance},
            {type:'plane', distance:planeDistance}
        ])
    },[trainDistance,busDistance,carDistance,carSharingDistance,electricDistance,motorbikeDistance,boatDistance,planeDistance])

    if(currentStep!=='TransportationStep2'){
        return null
    }

    return(
        <div>
            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', padding:30}}>
                How many meters did you travel in ...
            </Box>            
            {modesOfTransport.train && <TextField style={{margin:20}} id='trainDistance' label='Train' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={trainDistance} onChange={(e)=>setTrainDistance(e.target.value)}/>}
            {modesOfTransport.bus && <TextField style={{margin:20}} id='busDistance' label='Bus' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={busDistance} onChange={(e)=>setBusDistance(e.target.value)}/>}
            {modesOfTransport.car && <TextField style={{margin:20}} id='carDistance' label='Car' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={carDistance} onChange={(e)=>setCarDistance(e.target.value)}/>}
            {modesOfTransport.carSharing && <TextField style={{margin:20}} id='carSharingDistance' label='Car Sharing' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={carSharingDistance} onChange={(e)=>setCarSharingDistance(e.target.value)}/>}
            {modesOfTransport.electric && <TextField style={{margin:20}} id='electricDistance' label='Electric Vehicle' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={electricDistance} onChange={(e)=>setElectricDistance(e.target.value)}/>}
            {modesOfTransport.motorbike && <TextField style={{margin:20}} id='motorbike' label='Motorbike' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={motorbikeDistance} onChange={(e)=>setMotorbikeDistance(e.target.value)}/>}
            {modesOfTransport.boat && <TextField style={{margin:20}} id='boatDistance' label='Boat' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={boatDistance} onChange={(e)=>setBoatDistance(e.target.value)}/>}
            {modesOfTransport.plane && <TextField style={{margin:20}} id='planeDistance' label='Plane' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={planeDistance} onChange={(e)=>setPlaneDistance(e.target.value)}/>}
            <div style={{padding:30}}>
                <PrimaryButton onClick={()=>setCurrentStep('TransportationStep1')} text="Previous"/>
                <PrimaryButton type="submit" text="Submit"/>
            </div>
        </div>
    )
}