import {React, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import { transport } from 'carbon-footprint';
import {Container, Typography, Box} from '@material-ui/core/';
const emission = 1 * transport.fossilFueledCar;

const useStyles = makeStyles({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
})

function FootprintQuiz() {
    /*
    calculates greenhouse gas emissions produced by one kilo of each food
    1 kilo = 2.2 lbs
    */
    const [step, setStep] = useState(1)
    const [transportation, setTransportation] = useState(false)
    const [food, setFood] = useState(false)

    const [lamb, setLamb] = useState(false)
    const [beef, setBeef] = useState(false)
    const [redMeat, setRedMeat] = useState(false)
    const [turkey, setTurkey] = useState(false)

    const [lambServings, setLambServings] = useState(0)
    const [beefServings, setBeefServings] = useState(0)
    const [redMeatServings, setRedMeatServings] = useState(0)
    const [turkeyServings, setTurkeyServings] = useState(0)

    const submitCategories = (e) => {
        e.preventDefault()
        console.log(food, transportation)
        setStep(2)
    }
    const submitFoodItems = (e) => {
        e.preventDefault()
        setStep(3)
    }

    const submitServings = (e) => {
        e.preventDefault()
        console.log(lambServings,beefServings,redMeatServings)
        //get servings in kilos
        //send kilo values to backend 
    }

    return (
        <div>
            {step===1 &&
            <Container maxWidth="sm">
                <form onSubmit={submitCategories} style={{textAlign:'center'}}> 
                    <Typography variant="h5" style={{color:'white'}}>
                        What categories do you want to include into the calculation of your carbon footprint?
                    </Typography>
                    <input id="food" type="button" value="food" onClick={()=>setFood(food=> !food)}/>
                    <input id="transportation" type="button" value="transportation" onClick={()=>setTransportation(transportation => !transportation)}/>
                    <input type="submit" value="Next"/>
                </form>
            </Container>
            }
            {step===2 && 
            <Container maxWidth="sm">
                <form onSubmit={submitFoodItems} style={{textAlign:'center'}}> 
                    <Typography variant="h5" style={{color:'white'}}>
                        What did you eat?
                    </Typography>
                    <input id="lamb" type="button" value="Lamb" onClick={()=>setLamb(lamb=> !lamb)}/>
                    <input id="beef" type="button" value="Beef" onClick={()=>setBeef(beef=> !beef)}/>
                    <input id="redMeat" type="button" value="Red Meat" onClick={()=>setRedMeat(redMeat=> !redMeat)}/>
                    <input id="turkey" type="button" value="Turkey" onClick={()=>setTurkey(turkey=> !turkey)}/>
                    <input type="submit" value="Next"/>
                </form>
            </Container>}
            {step===3 &&
            <Container maxWidth="sm">
                <form onSubmit={submitServings} style={{textAlign:'center'}}> 
                    <Typography variant="h5" style={{color:'white'}}>
                        How many servings did you have?
                    </Typography>
                    <Box display="flex" flexDirection="column" p={1} m={1}>
                        <label for="lambServings"> Lamb </label>
                        <input id="lambServings" type="number" value={lambServings} onChange={(e)=>setLambServings(e.target.value)}/>
                        <label for="beefServings"> Beef </label>
                        <input id="beefServings" type="number" value={beefServings} onChange={(e)=>setBeefServings(e.target.value)}/>
                        <label for="redMeatServings"> Red Meat </label>
                        <input id="redMeatServings" type="number" value={redMeatServings} onChange={(e)=>setRedMeatServings(e.target.value)}/>
                        <label for="turkeyServings"> Turkey </label>
                        <input id="turkeyServings" type="number" value={turkeyServings} onChange={(e)=>setTurkeyServings(e.target.value)}/>
                        <input type="submit" value="Next"/>
                    </Box>
                </form>
            </Container>
            }
        </div>
    )
}

export default FootprintQuiz; 