import {useState} from 'react';
import {Container, Typography} from '@material-ui/core/';
import PrimaryButton from '../reusable/PrimaryButton'

function FoodStep1(props){
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

    if(currentStep!=='FoodStep1'){
        return null
    }
    return (
        <Container maxWidth="sm">
            <Typography variant="h5" style={{color:'white', padding:50}}>
                What did you eat?
            </Typography>
            <PrimaryButton selected={lamb} onClick={()=>setLamb(lamb=> !lamb)} text="Lamb"/>
            <PrimaryButton selected={beef} onClick={()=>setBeef(beef=> !beef)} text="Beef"/>
            <PrimaryButton selected={redMeat} onClick={()=>setRedMeat(redMeat=> !redMeat)} text="Red Meat"/>
            <PrimaryButton selected={cheese} onClick={()=>setCheese(cheese=> !cheese)} text="Cheese"/>
            <PrimaryButton selected={pork} onClick={()=>setPork(pork=> !pork)} text="Pork"/>
            <PrimaryButton selected={turkey} onClick={()=>setTurkey(turkey=> !turkey)} text="Turkey"/>
            <PrimaryButton selected={chicken} onClick={()=>setChicken(chicken=> !chicken)} text="Chicken"/>
            <PrimaryButton selected={whiteMeat} onClick={()=>setWhiteMeat(whiteMeat=> !whiteMeat)} text="White Meat"/>
            <PrimaryButton selected={tuna} onClick={()=>setTuna(tuna=> !tuna)} text="Tuna"/>
            <PrimaryButton selected={fish} onClick={()=>setFish(fish=> !fish)} text="Fish"/>
            <PrimaryButton selected={eggs} onClick={()=>setEggs(eggs=> !eggs)} text="Eggs"/>
            <PrimaryButton selected={potatoes} onClick={()=>setPotatoes(potatoes=> !potatoes)} text="Potatoes"/>
            <PrimaryButton selected={rice} onClick={()=>setRice(rice=> !rice)} text="Rice"/>
            <PrimaryButton selected={nuts} onClick={()=>setBeans(beans=> !beans)} text="Beans"/>
            <PrimaryButton selected={tofu} onClick={()=>setTofu(tofu=> !tofu)} text="Tofu"/>
            <PrimaryButton selected={vegetables} onClick={()=>setVegetables(vegetables=> !vegetables)} text="Vegetables"/>
            <PrimaryButton selected={milk} onClick={()=>setMilk(milk=> !milk)} text="Milk"/>
            <PrimaryButton selected={fruit} onClick={()=>setFruit(fruit=> !fruit)} text="Fruit"/>
            <PrimaryButton selected={lentils} onClick={()=>setLentils(lentils=> !lentils)} text="Lentils"/>
            <PrimaryButton selected={coffee} onClick={()=>setCoffee(coffee=> !coffee)} text="Coffee"/>
            <PrimaryButton selected={chocolate} onClick={()=>setChocolate(chocolate=> !chocolate)} text="Chocolate"/>
            <div>
                <PrimaryButton onClick={()=>setCurrentStep('FoodStep2')} text="Next"/>
            </div>
        </Container>
    )
}
export default FoodStep1