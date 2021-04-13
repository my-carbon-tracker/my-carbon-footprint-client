import {useState} from 'react';
import {Container, Typography} from '@material-ui/core/';

function Step1(props){
    const {currentStep, setCurrentStep} = props;
    const [transportationCategory, setTransportation] = useState(false)
    const [foodCategory, setFood] = useState(false)

    if(currentStep!==1){
        return null
    }

    return(
        <div className='form group'>
            <Container maxWidth="sm">
                <Typography variant="h5" style={{color:'white'}}>
                    What categories do you want to include into the calculation of your carbon footprint?
                </Typography>
                <input id="food" type="button" value="food" onClick={()=>setFood(foodCategory=> !foodCategory)}/>
                <input id="transportation" type="button" value="transportation" onClick={()=>setTransportation(transportationCategory => !transportationCategory)}/>
            </Container>
        </div>
    )
}
export default Step1