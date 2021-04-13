import {React, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import { transport, food } from 'carbon-footprint';
import {Container, Typography, Box} from '@material-ui/core/';
import { create, all } from 'mathjs';

//const emission = 1 * transport.fossilFueledCar;

const useStyles = makeStyles({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
})

function FootprintQuiz() {
    /*
    calculates greenhouse gas emissions produced by one kilo of each food
    1 kilo = 2.2 lbs
    */
    const [step, setStep] = useState(1)
    const [transportationCategory, setTransportation] = useState(false)
    const [foodCategory, setFood] = useState(false)

    const [lamb, setLamb] = useState(false)
    const [beef, setBeef] = useState(false)
    const [redMeat, setRedMeat] = useState(false)
    const [turkey, setTurkey] = useState(false)

    const [lambServings, setLambServings] = useState(0)
    const [beefServings, setBeefServings] = useState(0)
    const [redMeatServings, setRedMeatServings] = useState(0)
    const [cheeseServings, setCheeseServings] = useState(0)
    const [porkServings, setPorkServings] = useState(0)
    const [turkeyServings, setTurkeyServings] = useState(0)
    const [chickenServings, setChickenServings] = useState(0)
    const [whiteMeatServings, setWhiteMeatServings] = useState(0)
    const [tunaServings, setTunaServings] = useState(0)
    const [fishServings, setFishServings] = useState(0)
    const [eggsServings, setEggsServings] = useState(0)
    const [potatoesServings, setPotatoesServings] = useState(0)
    const [riceServings, setRiceServings] = useState(0)
    const [nutsServings, setNutsServings] = useState(0)
    const [beansServings, setBeansServings] = useState(0)
    const [tofuServings, setTofuServings] = useState(0)
    const [vegetablesServings, setVegetablesServings] = useState(0)
    const [milkServings, setMilkServings] = useState(0)
    const [fruitServings, setFruitServings] = useState(0)
    const [lentilsServings, setLentilsServings] = useState(0)
    const [coffeeServings, setCoffeeServings] = useState(0)
    const [chocolateServings, setChocolateServings] = useState(0)

    const config = { 
        epsilon: 1e-12,
        matrix: 'Matrix',
        number: 'number',
        precision: 64,
        predictable: false,
        randomSeed: null
    }
    const math = create(all, config)

    const submitCategories = (e) => {
        e.preventDefault()
        setStep(2)
    }
    const submitFoodItems = (e) => {
        e.preventDefault()
        setStep(3)
    }

    const submitServings = (e) => {
        e.preventDefault()
        const arrFoodItemsServings = [{name:'lamb', servings:lambServings},{name:'beef',servings:beefServings},{name:'redMeat',servings:redMeatServings}]//,cheeseServings,porkServings,turkeyServings,chickenServings,whiteMeatServings,tunaServings,fishServings,eggsServings,potatoesServings,riceServings,nutsServings,beansServings,tofuServings,vegetablesServings,milkServings,fruitServings,lentilsServings,coffeeServings,chocolateServings]
        const totalEmissions = arrFoodItemsServings.reduce((accum, curr)=>{
            const {name, servings} = curr
            const itemEmissions = food[name].emissionsPerServing * servings
            return accum + itemEmissions
        },0)

        console.log(totalEmissions)
    }

    return (
        <div style={{background: 'linear-gradient(#157A42,#25DB77)', height:'100vh'}}>
            {step===1 &&
            <Container maxWidth="sm">
                <form onSubmit={submitCategories} style={{textAlign:'center'}}> 
                    <Typography variant="h5" style={{color:'white'}}>
                        What categories do you want to include into the calculation of your carbon footprint?
                    </Typography>
                    <input id="food" type="button" value="food" onClick={()=>setFood(foodCategory=> !foodCategory)}/>
                    <input id="transportation" type="button" value="transportation" onClick={()=>setTransportation(transportationCategory => !transportationCategory)}/>
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
                        <label for="cheeseServings"> Cheese </label>
                        <input id="cheeseServings" type="number" value={cheeseServings} onChange={(e)=>setCheeseServings(e.target.value)}/>
                        <label for="porkServings"> Pork </label>
                        <input id="porkServings" type="number" value={porkServings} onChange={(e)=>setPorkServings(e.target.value)}/>  
                        <label for="turkeyServings"> Turkey </label>
                        <input id="turkeyServings" type="number" value={turkeyServings} onChange={(e)=>setTurkeyServings(e.target.value)}/>
                        <label for="chickenServings"> Chicken </label>
                        <input id="chickenServings" type="number" value={chickenServings} onChange={(e)=>setChickenServings(e.target.value)}/>
                        <label for="whiteMeatServings"> White Meat </label>
                        <input id="whiteMeatServings" type="number" value={whiteMeatServings} onChange={(e)=>setWhiteMeatServings(e.target.value)}/>
                        <label for="tunaServings"> Tuna </label>
                        <input id="tunaServings" type="number" value={tunaServings} onChange={(e)=>setTunaServings(e.target.value)}/>
                        <label for="fishServings"> Fish </label>
                        <input id="fishServings" type="number" value={fishServings} onChange={(e)=>setFishServings(e.target.value)}/>
                        <label for="eggsServings"> Eggs </label>
                        <input id="eggsServings" type="number" value={eggsServings} onChange={(e)=>setEggsServings(e.target.value)}/>
                        <label for="potatoesServings"> Potatoes </label>
                        <input id="potatoesServings" type="number" value={potatoesServings} onChange={(e)=>setPotatoesServings(e.target.value)}/>
                        <label for="riceServings"> Rice </label>
                        <input id="riceServings" type="number" value={riceServings} onChange={(e)=>setRiceServings(e.target.value)}/>
                        <label for="nutsServings"> Nuts </label>
                        <input id="nutsServings" type="number" value={nutsServings} onChange={(e)=>setNutsServings(e.target.value)}/>
                        <label for="beansServings"> Beans </label>
                        <input id="beansServings" type="number" value={beansServings} onChange={(e)=>setBeansServings(e.target.value)}/>
                        <label for="tofuServings"> Tofu </label>
                        <input id="tofuServings" type="number" value={tofuServings} onChange={(e)=>setTofuServings(e.target.value)}/>
                        <label for="vegetablesServings"> Vegetables </label>
                        <input id="vegetablesServings" type="number" value={vegetablesServings} onChange={(e)=>setVegetablesServings(e.target.value)}/>
                        <label for="milkServings"> Milk </label>
                        <input id="milkServings" type="number" value={milkServings} onChange={(e)=>setMilkServings(e.target.value)}/>
                        <label for="fruitsServings"> Fruits </label>
                        <input id="fruitsServings" type="number" value={fruitServings} onChange={(e)=>setFruitServings(e.target.value)}/>
                        <label for="lentilsServings"> Lentils </label>
                        <input id="lentilsServings" type="number" value={lentilsServings} onChange={(e)=>setLentilsServings(e.target.value)}/>
                        <label for="coffeeServings"> Coffee </label>
                        <input id="coffeeServings" type="number" value={coffeeServings} onChange={(e)=>setCoffeeServings(e.target.value)}/>
                        <label for="chocolateServings"> Chocolate </label>
                        <input id="chocolateServings" type="number" value={chocolateServings} onChange={(e)=>setChocolateServings(e.target.value)}/>
                        <input type="submit" value="Next"/>
                    </Box>
                </form>
            </Container>
            }
        </div>
    )
}

export default FootprintQuiz; 