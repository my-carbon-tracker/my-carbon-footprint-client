import {useState} from 'react';
import {Container, Typography} from '@material-ui/core/';

function Step2(props){
    const {currentStep, setCurrentStep} = props;
    const [lamb, setLamb] = useState(false)
    const [beef, setBeef] = useState(false)
    const [redMeat, setRedMeat] = useState(false)
    const [cheese,setCheese] = useState(false)
    const [pork,setPork] = useState(false)
    const [turkey, setTurkey] = useState(false)
    const [chicken,setChicken] = useState(false)
    const [whiteMeat,setWhiteMeat] = useState(false)
    const [tuna,setTuna] = useState(false)
    const [fish,setFish] = useState(false)
    const [eggs,setEggs] = useState(false)
    const [potatoes,setPotatoes] = useState(false)
    const [rice,setRice] = useState(false)
    const [nuts,setNuts] = useState(false)
    const [beans,setBeans] = useState(false)
    const [tofu,setTofu] = useState(false)
    const [vegetables,setVegetables] = useState(false)
    const [milk,setMilk] = useState(false)
    const [fruit,setFruit] = useState(false)
    const [lentils,setLentils] = useState(false)
    const [coffee,setCoffee] = useState(false)
    const [chocolate,setChocolate] = useState(false)

    if(currentStep!==2){
        return null
    }
    return (
        <Container maxWidth="sm">
            <Typography variant="h5" style={{color:'white'}}>
                What did you eat?
            </Typography>
            <input id="lamb" type="button" value="Lamb" onClick={()=>setLamb(lamb=> !lamb)}/>
            <input id="beef" type="button" value="Beef" onClick={()=>setBeef(beef=> !beef)}/>
            <input id="redMeat" type="button" value="Red Meat" onClick={()=>setRedMeat(redMeat=> !redMeat)}/>
            <input id="cheese" type="button" value="Cheese" onClick={()=>setCheese(cheese=> !cheese)}/>
            <input id="pork" type="button" value="Pork" onClick={()=>setPork(pork=> !pork)}/>
            <input id="turkey" type="button" value="Turkey" onClick={()=>setTurkey(turkey=> !turkey)}/>
            <input id="chicken" type="button" value="Chicken" onClick={()=>setChicken(chicken=> !chicken)}/>
            <input id="whiteMeat" type="button" value="WhiteMeat" onClick={()=>setWhiteMeat(whiteMeat=> !whiteMeat)}/>
            <input id="tuna" type="button" value="Tuna" onClick={()=>setTuna(tuna=> !tuna)}/>
            <input id="fish" type="button" value="Fish" onClick={()=>setFish(fish=> !fish)}/>
            <input id="eggs" type="button" value="Eggs" onClick={()=>setEggs(eggs=> !eggs)}/>
            <input id="potatoes" type="button" value="Potatoes" onClick={()=>setPotatoes(potatoes=> !potatoes)}/>
            <input id="rice" type="button" value="Rice" onClick={()=>setRice(rice=> !rice)}/>
            <input id="nuts" type="button" value="Nuts" onClick={()=>setNuts(nuts=> !nuts)}/>
            <input id="beans" type="button" value="Beans" onClick={()=>setBeans(beans=> !beans)}/>
            <input id="tofu" type="button" value="Tofu" onClick={()=>setTofu(tofu=> !tofu)}/>
            <input id="vegetables" type="button" value="Vegetables" onClick={()=>setVegetables(vegetables=> !vegetables)}/>
            <input id="milk" type="button" value="Milk" onClick={()=>setMilk(milk=> !milk)}/>
            <input id="fruit" type="button" value="Fruit" onClick={()=>setFruit(fruit=> !fruit)}/>
            <input id="lentils" type="button" value="Lentils" onClick={()=>setLentils(lentils=> !lentils)}/>
            <input id="coffee" type="button" value="Coffee" onClick={()=>setCoffee(coffee=> !coffee)}/>
            <input id="chocolate" type="button" value="Chocolate" onClick={()=>setChocolate(chocolate=> !chocolate)}/>
            <input type="submit" value="Next"/>
        </Container>
    )
}
export default Step2