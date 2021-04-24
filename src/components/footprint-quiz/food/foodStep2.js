import {useState, useEffect} from 'react';
import {Container, Grid, TextField, Box} from '@material-ui/core/';
import PrimaryButton from '../../reusable/PrimaryButton'
import { makeStyles, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme =>
    createStyles({
      root: {
        margin:20
      }
    })
  );

function FoodStep2(props){
    //const classes = useStyles();

    const {currentStep, setCurrentStep, setArrFoodServings, categories, foodItems} = props
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
        chocolateServings
    ]);

    if(currentStep!=='FoodStep2'){
        return null
    }

    const renderServingInputs = () => {
        console.log(foodItems)
        const inputs = foodItems.map((item)=>{
            console.log(item.setServings)
            if(item.show){
                return (
                    <div key={item.name} style={{margin:20}}>
                        <TextField
                            id={item.name}
                            label={item.name}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            
                            //this would work if values and onChange can be customized somehow
                            //value={item.servings} 
                            //onChange={(e)=>{item.setServings(e.target.value)}}
                        />
                    </div>
                )
            }
        })
        return inputs
    }
    return(
        <Container maxWidth="sm">
                <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', padding:30}}>
                    How many servings did you have?
                </Box>
                    {/* display="flex" flexDirection="column" p={1} m={1} */}
                    <Grid container spacing={5}>
                        <Grid item xs>
                        {foodItems.lamb && <TextField style={{margin:20}} id='lamb' label='Lamb' type="number" InputLabelProps={{shrink: true}} variant="outlined" value={lambServings} onChange={(e)=>setLambServings(e.target.value)}/>}
                        {foodItems.beef && <TextField style={{margin:20}} id='beef' label='Beef' type="number" InputLabelProps={{shrink: true,}} variant="outlined" value={beefServings} onChange={(e)=>setBeefServings(e.target.value)}/>}
                        {foodItems.redMeat && <TextField style={{margin:20}} id='redMeat' label='Red Meat' type="number" InputLabelProps={{shrink: true,}} variant="outlined" value={redMeatServings} onChange={(e)=>setRedMeatServings(e.target.value)}/>}
                        {foodItems.cheese && <TextField style={{margin:20}} id='cheese' label='Cheese' type="number" InputLabelProps={{shrink: true,}} variant="outlined" value={cheeseServings} onChange={(e)=>setCheeseServings(e.target.value)}/>}
                        {foodItems.pork && <TextField style={{margin:20}} id='pork' label='Pork' type="number" InputLabelProps={{shrink: true,}} variant="outlined" value={porkServings} onChange={(e)=>setPorkServings(e.target.value)}/>}
                        {foodItems.turkey && <TextField style={{margin:20}} id='turkey' label='Turkey' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={turkeyServings} onChange={(e)=>setTurkeyServings(e.target.value)}/>}
                        {foodItems.chicken && <TextField style={{margin:20}} id='chicken' label='Chicken' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={chickenServings} onChange={(e)=>setChickenServings(e.target.value)}/>}
                        {foodItems.whiteMeat && <TextField style={{margin:20}} id='whiteMeat' label='White Meat' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={whiteMeatServings} onChange={(e)=>setWhiteMeatServings(e.target.value)}/>}
                        {foodItems.tuna && <TextField style={{margin:20}} id='tuna' label='Tuna' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={tunaServings} onChange={(e)=>setTunaServings(e.target.value)}/>}
                        {foodItems.fish && <TextField style={{margin:20}} id='fish' label='Fish' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={fishServings} onChange={(e)=>setFishServings(e.target.value)}/>}
                        {foodItems.eggs && <TextField style={{margin:20}} id='eggs' label='Eggs' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={eggsServings} onChange={(e)=>setEggsServings(e.target.value)}/>}
                        {foodItems.potatoes && <TextField style={{margin:20}} id='potatoes' label='Potatoes' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={potatoesServings} onChange={(e)=>setPotatoesServings(e.target.value)}/>}
                        {foodItems.rice && <TextField style={{margin:20}}  id='rice' label='Rice' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={riceServings} onChange={(e)=>setRiceServings(e.target.value)}/>}
                        {foodItems.nuts && <TextField style={{margin:20}} id='nuts' label='Nuts' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={nutsServings} onChange={(e)=>setNutsServings(e.target.value)}/>}
                        {foodItems.beans && <TextField style={{margin:20}} id='beans' label='Beans' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={beansServings} onChange={(e)=>setBeansServings(e.target.value)}/>}
                        {foodItems.tofu && <TextField style={{margin:20}} id='tofu' label='Tofu' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={tofuServings} onChange={(e)=>setTofuServings(e.target.value)}/>}
                        {foodItems.vegetables && <TextField style={{margin:20}} id='vegetables' label='Vegetables' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={vegetablesServings} onChange={(e)=>setVegetablesServings(e.target.value)}/>}
                        {foodItems.milk && <TextField style={{margin:20}} id='milk' label='Milk' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={milkServings} onChange={(e)=>setMilkServings(e.target.value)}/>}
                        {foodItems.fruit && <TextField style={{margin:20}} id='fruit' label='Fruit' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={fruitServings} onChange={(e)=>setFruitServings(e.target.value)}/>}
                        {foodItems.lentils && <TextField style={{margin:20}} id='lentils' label='Lentils' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={lentilsServings} onChange={(e)=>setLentilsServings(e.target.value)}/>}
                        {foodItems.coffee && <TextField style={{margin:20}} id='coffee' label='Coffee' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={coffeeServings} onChange={(e)=>setCoffeeServings(e.target.value)}/>}
                        {foodItems.chocolate && <TextField style={{margin:20}} id='chocolate' label='Chocolate' type="number" InputLabelProps={{shrink: true,}} variant="outlined"  value={chocolateServings} onChange={(e)=>setChocolateServings(e.target.value)}/>}
                        </Grid>
                    </Grid>
                    <div style={{padding:30}}>
                        <PrimaryButton onClick={()=>setCurrentStep('FoodStep1')} text="Previous"/>
                        {categories.transportation? 
                            <PrimaryButton text="Next" onClick={()=>setCurrentStep('TransportationStep1')}/>: 
                            <PrimaryButton type="submit" text="Submit"/>
                        }
                    </div>
            </Container>
    )
}

export default FoodStep2