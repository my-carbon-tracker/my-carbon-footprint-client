import {useState, useEffect} from 'react';
import {Container, Typography, Grid} from '@material-ui/core/';
import PrimaryButton from '../../reusable/PrimaryButton'

function FoodStep2(props){
    const {currentStep, setArrFoodServings} = props
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

    useEffect(() => {
        setArrFoodServings([
            {name:'lamb', servings:lambServings},
            {name:'beef',servings:beefServings},
            {name:'redMeat',servings:redMeatServings},
            {name:'cheese',servings:cheeseServings},
            {name:'pork',servings:porkServings},
            {name:'turkey',servings:turkeyServings},
            {name:'chicken',servings:chickenServings},
            {name:'whiteMeat',servings:whiteMeatServings},
            {name:'tuna',servings:tunaServings},
            {name:'fish',servings:fishServings},
            {name:'eggs',servings:eggsServings},
            {name:'potatoes',servings:potatoesServings},
            {name:'rice',servings:riceServings},
            {name:'nuts',servings:nutsServings},
            {name:'beans',servings:beansServings},
            {name:'tofu',servings:tofuServings},
            {name:'vegetables',servings:vegetablesServings},
            {name:'milk',servings:milkServings},
            {name:'fruit',servings:fruitServings},
            {name:'lentils',servings:lentilsServings},
            {name:'coffee',servings:coffeeServings},
            {name:'chocolate',servings:chocolateServings}
        ])
    },[ lambServings,
        beefServings,
        redMeatServings,
        cheeseServings,
        porkServings,
        turkeyServings,
        chickenServings,
        whiteMeatServings,
        tunaServings,
        fishServings,
        eggsServings,
        potatoesServings,
        riceServings,
        nutsServings,
        beansServings,
        tofuServings,
        vegetablesServings,
        milkServings,
        fruitServings,
        lentilsServings,
        coffeeServings,
        chocolateServings]);

    if(currentStep!=='FoodStep2'){
        return null
    }

    return(
        <Container maxWidth="sm">
                    <Typography variant="h5" style={{color:'white'}}>
                        How many servings did you have?
                    </Typography>
                    {/* display="flex" flexDirection="column" p={1} m={1} */}
                    <Grid container>
                        <Grid item xs>
                        <label htmlFor="lambServings"> Lamb </label>
                        <input id="lambServings" type="number" value={lambServings} onChange={(e)=>setLambServings(e.target.value)}/>
                        <div/><label htmlFor="beefServings"> Beef </label>
                        <input id="beefServings" type="number" value={beefServings} onChange={(e)=>setBeefServings(e.target.value)}/>
                        <div/><label htmlFor="redMeatServings"> Red Meat </label>
                        <input id="redMeatServings" type="number" value={redMeatServings} onChange={(e)=>setRedMeatServings(e.target.value)}/>
                        <div/><label htmlFor="cheeseServings"> Cheese </label>
                        <input id="cheeseServings" type="number" value={cheeseServings} onChange={(e)=>setCheeseServings(e.target.value)}/>
                        <div/><label htmlFor="porkServings"> Pork </label>
                        <input id="porkServings" type="number" value={porkServings} onChange={(e)=>setPorkServings(e.target.value)}/>  
                        <div/><label htmlFor="turkeyServings"> Turkey </label>
                        <input id="turkeyServings" type="number" value={turkeyServings} onChange={(e)=>setTurkeyServings(e.target.value)}/>
                        <div/><label htmlFor="chickenServings"> Chicken </label>
                        <input id="chickenServings" type="number" value={chickenServings} onChange={(e)=>setChickenServings(e.target.value)}/>
                        <div/><label htmlFor="whiteMeatServings"> White Meat </label>
                        <input id="whiteMeatServings" type="number" value={whiteMeatServings} onChange={(e)=>setWhiteMeatServings(e.target.value)}/>
                        <div/><label htmlFor="tunaServings"> Tuna </label>
                        <input id="tunaServings" type="number" value={tunaServings} onChange={(e)=>setTunaServings(e.target.value)}/>
                        <div/><label htmlFor="fishServings"> Fish </label>
                        <input id="fishServings" type="number" value={fishServings} onChange={(e)=>setFishServings(e.target.value)}/>
                        <div/><label htmlFor="eggsServings"> Eggs </label>
                        <input id="eggsServings" type="number" value={eggsServings} onChange={(e)=>setEggsServings(e.target.value)}/>
                        </Grid>
                        <Grid item xs>
                        <label htmlFor="potatoesServings"> Potatoes </label>
                        <input id="potatoesServings" type="number" value={potatoesServings} onChange={(e)=>setPotatoesServings(e.target.value)}/>
                        <div/><label htmlFor="riceServings"> Rice </label>
                        <input id="riceServings" type="number" value={riceServings} onChange={(e)=>setRiceServings(e.target.value)}/>
                        <div/><label htmlFor="nutsServings"> Nuts </label>
                        <input id="nutsServings" type="number" value={nutsServings} onChange={(e)=>setNutsServings(e.target.value)}/>
                        <div/><label htmlFor="beansServings"> Beans </label>
                        <input id="beansServings" type="number" value={beansServings} onChange={(e)=>setBeansServings(e.target.value)}/>
                        <div/><label htmlFor="tofuServings"> Tofu </label>
                        <input id="tofuServings" type="number" value={tofuServings} onChange={(e)=>setTofuServings(e.target.value)}/>
                        <div/><label htmlFor="vegetablesServings"> Vegetables </label>
                        <input id="vegetablesServings" type="number" value={vegetablesServings} onChange={(e)=>setVegetablesServings(e.target.value)}/>
                        <div/><label htmlFor="milkServings"> Milk </label>
                        <input id="milkServings" type="number" value={milkServings} onChange={(e)=>setMilkServings(e.target.value)}/>
                        <div/><label htmlFor="fruitsServings"> Fruits </label>
                        <input id="fruitsServings" type="number" value={fruitServings} onChange={(e)=>setFruitServings(e.target.value)}/>
                        <div/><label htmlFor="lentilsServings"> Lentils </label>
                        <input id="lentilsServings" type="number" value={lentilsServings} onChange={(e)=>setLentilsServings(e.target.value)}/>
                        <div/><label htmlFor="coffeeServings"> Coffee </label>
                        <input id="coffeeServings" type="number" value={coffeeServings} onChange={(e)=>setCoffeeServings(e.target.value)}/>
                        <div/><label htmlFor="chocolateServings"> Chocolate </label>
                        <input id="chocolateServings" type="number" value={chocolateServings} onChange={(e)=>setChocolateServings(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <PrimaryButton type="submit" text="Submit"/>
            </Container>
    )
}

export default FoodStep2