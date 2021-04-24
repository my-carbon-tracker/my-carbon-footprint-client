import React from "react";
import { Box, Grid, Paper } from '@material-ui/core';
import { AiFillCar, AiOutlineSkin} from "react-icons/ai";
import { GiTreeGrowth, GiSolarPower, GiElectric, GiMilkCarton, GiCow } from "react-icons/gi";
import { FaShower, FaCarrot, FaAward } from "react-icons/fa";
import { RiLightbulbLine } from "react-icons/ri";
import { ImSwitch } from "react-icons/im";
import { useOffsetContext } from "../contexts/pledgeContext";
import { useEmissionContext } from "../contexts/emissionContext";

const Pledges = (props) => {
    const [carpool, setCarpool] = React.useState("0");
    const [linedry, setLineDry] = React.useState("0");
    const [plantedTrees, setPlantedTrees] = React.useState("0");
    const [lights, setLights] = React.useState("0");
    const [organicProduce, setOrganicProduce] = React.useState("0");
    const [organicMeat, setOrganicMeat] = React.useState("0");
    const [organicDairy, setOrganicDairy] = React.useState("0");
    const [panels, setPanels] = React.useState("0");
    const [electricity, setElectricity] = React.useState("0");
    const [showerheads, setShowerheads] = React.useState("0")
    const [led, setLED] = React.useState("0");
    const {totalOffset, setTotalOffset} = useOffsetContext();
    const { totalEmission, setTotalEmission } = useEmissionContext();
    const [emissionWithPledge, setEmissionWithPledge] = React.useState();
    const {token} = props;
    console.log(totalOffset)

const changeCarpoolDays = (e) => {
    setCarpool(e.target.value)
};
const changeLineDry = (e) => {
    setLineDry(e.target.value)
};
const changeTrees = (e) => {
    setPlantedTrees(e.target.value)
};
const changeLights = (e) => {
    setLights(e.target.value)
};
const changeProduce = (e) => {
    setOrganicProduce(e.target.value)
};
const changeMeat = (e) => {
    setOrganicMeat(e.target.value)
};
const changeDairy = (e) => {
    setOrganicDairy(e.target.value)
};

const updateEmission = (e) => {
    e.preventDefault();
    setEmissionWithPledge(totalEmission - totalOffset * 1000)

    fetch(`http://localhost:3000/logEmission/completed-pledge`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify({
            emission_with_pledges: emissionWithPledge
        })
    })
    .then((res)=>res.json())
    // console.log(emissionWithPledge)
    .catch((err)=> console.log(err))
}

const handlePanels = (e) => {
    setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
    parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
    
    const pvPledge = document.getElementById("pv-pledge");
    pvPledge.style.display = "none";
    e.target.style.display = "none";
};
const handleShowerheads = (e) => {
    setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
    parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
    
    const showerPledge = document.getElementById("shower-pledge");
    showerPledge.style.display = "none";
    e.target.style.display = "none";
};
const handleElectricity = (e) => {
    setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
    parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
    
    const electPledge = document.getElementById("electricity-pledge");
    electPledge.style.display = "none";
    e.target.style.display = "none";
};
const handleLED = (e) => {
    setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
    parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
    
    const ledPledge = document.getElementById("led-pledge");
    ledPledge.style.display = "none";
    e.target.style.display = "none";
};

    return (
        <div>
            <span fontWeight="fontWeightBold" letterSpacing={2} style={{color:'#2E4089', paddingTop:20, textAlign: "center", }}>
            Total CO2 Emissions saved: {totalOffset}
            </span>
        <div style={{maxHeight: "300px", overflow:"hidden auto"}}>
            <table className="take-action" style={{backgroundColor: "#B4E6CD", width:'100%'}}>
                <thead>
                    <tr>
                        <th>
                            <span>Pledges <FaAward /></span>
                        </th>
                        <th>
                            <span>Select</span>
                        </th>
                        <th>
                            <span>Tons saved per year</span>
                        </th>
                        <th>
                        <span>Incentives</span>
                        </th>
                        <th><span>Status</span></th>
                    </tr>
                </thead>

                <tbody id="carpool-pledge">
                    <tr>
                        <td><AiFillCar /> Carpool to work</td>
                        <td><select id="carpool" onChange={changeCarpoolDays}>
                            <option>Days</option>
                            <option value="0.3">1</option>
                            <option value="0.6">2</option>
                            <option value="0.9">3</option>
                            <option value="1.2">4</option>
                            <option value="1.5">5</option>
                            <option value="1.8">6</option>
                            <option value="2.1">7</option>
                        </select></td>
                        <td> {carpool} </td>
                        <td><p><a href="https://fundingwizard.arb.ca.gov/web/#search//%255BZipcode%253D%253D94720%255D%255BCategory%253D%253DTransportation%255D%255BEligible+Applicants%253D%253DIndividual%255D/false/none/false/1/12">Rebates and incentives</a></p></td>
                        <td><input type="submit" value="I pledge" onClick={ (e) => {
                            setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
                            parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
                            
                            const carpoolPledge = document.getElementById("carpool-pledge");
                            carpoolPledge.style.display = "none";
                            e.target.style.display = "none";
                        }}/></td>
                    </tr>
                </tbody>

                <tbody id="produce-pledge">
                    <tr>
                        <td><FaCarrot /> Eat organic produce</td>
                        <td><select onChange={changeProduce}>
                            <option> % </option>
                            <option value="0.025">25%</option>
                            <option value="0.05">50%</option>
                            <option value="0.075">75%</option>
                            <option value="0.1">100%</option>
                        </select></td>
                        <td>{organicProduce}</td><td></td>
                        <td><input type="button" value="I pledge" 
                        onClick={ (e) => {
                            setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
                            parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
                            
                            const producePledge = document.getElementById("produce-pledge");
                            producePledge.style.display = "none";
                            e.target.style.display = "none";
                        }}/></td>
                    </tr>
                </tbody>
                <tbody id="meat-pledge">
                    <tr>
                        <td><GiCow /> Eat organic meat</td>
                        <td><select onChange={changeMeat}>
                            <option> % </option> 
                            <option value="0.025">25%</option>
                            <option value="0.05">50%</option>
                            <option value="0.075">75%</option>
                            <option value="0.1">100%</option>
                            </select>
                        </td>
                        <td>{organicMeat}</td><td></td>
                        <td><input type="button" value="I pledge" 
                        onClick={ (e) => {
                            setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
                            parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
                            
                            const meatPledge = document.getElementById("meat-pledge");
                            meatPledge.style.display = "none";
                            e.target.style.display = "none";
                        }}/></td>
                    </tr>
                </tbody>
                <tbody id="dairy-pledge"> 
                    <tr>
                        <td><GiMilkCarton /> Eat organic dairy</td>
                        <td><select onChange={changeDairy}>
                        <option> % </option> 
                            <option value="0.025">25%</option>
                            <option value="0.05">50%</option>
                            <option value="0.075">75%</option>
                            <option value="0.1">100%</option>
                        </select></td>
                        <td>{organicDairy}</td><td></td>
                        <td><input type="button" value="I pledge" 
                        onClick={ (e) => {
                            setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
                            parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
                            
                            const dairyPledge = document.getElementById("dairy-pledge");
                            dairyPledge.style.display = "none";
                            e.target.style.display = "none";
                        }}/></td>
                    </tr>
                </tbody>

                <tbody id="pv-pledge">
                    <tr>
                        <td><GiSolarPower /> Install PV panels</td><td><select onChange={ (e) => { setPanels(e.target.value) }}>
                            <option value="0">No</option>
                            <option value="2.0">Yes</option>
                            </select></td>
                            <td>{panels}</td>
                        <td><p><a href="https://fundingwizard.arb.ca.gov/web/#search//%255BZipcode%253D%253D94720%255D%255BCategory%253D%253DTransportation%255D%255BEligible+Applicants%253D%253DIndividual%255D/false/none/false/1/12">Incentives</a></p>
                    <p><a href="https://www.solar-estimate.org/">Get a detailed estimate.</a></p></td>
                    <td><input type="button" value="I pledge" onClick={handlePanels}/></td>
                    </tr>
                </tbody>
                <tbody id="shower-pledge">
                    <tr>
                        <td><FaShower /> Install low flow showerheads</td><td><select onChange={ (e) => {setShowerheads(e.target.value)}}>
                            <option value="0">No</option>
                            <option value="0.4">Yes</option>
                            </select></td><td>{showerheads}</td><td></td>                       
                        <td><input type="button" value="I pledge" onClick={handleShowerheads}/></td>
                    </tr>
                </tbody>
                <tbody id="dry-pledge">
                    <tr>
                        <td><AiOutlineSkin /> Line dry clothing</td>
                        <td>
                            <select onChange={changeLineDry}>
                                <option>% of clothing</option>
                                <option value="0.1">20%</option>
                                <option value="0.2">40%</option>
                                <option value="0.3">60%</option>
                                <option value="0.4">80%</option>
                                <option value="0.5">100%</option>
                            </select>
                        </td>
                        <td>{linedry}</td>
                        <td></td>
                        <td><input type="button" value="I pledge" 
                        onClick={ (e) => {
                            setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
                            parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
                            
                            const dryPledge = document.getElementById("dry-pledge");
                            dryPledge.style.display = "none";
                            e.target.style.display = "none";
                        }}/></td>
                    </tr>
                </tbody>
                <tbody id="tree-pledge">
                    <tr>
                        <td><GiTreeGrowth /> Plant trees</td>
                        <td>
                            <select onChange={changeTrees}>
                            <option>Per 5 trees</option>
                            <option value="0.1">5 trees</option>
                            <option value="0.4">20 trees</option>
                            <option value="1">50 trees</option>
                            <option value="2">100 trees</option>
                            </select>
                        </td>
                        <td>{plantedTrees}</td>
                        <td><p><a href="https://teamtrees.org/">Plant trees</a></p></td>
                        <td><input type="button" value="I pledge" 
                        onClick={ (e) => {
                            setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
                            parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
                            
                            const treePledge = document.getElementById("tree-pledge");
                            treePledge.style.display = "none";
                            e.target.style.display = "none";
                        }}/></td>
                    </tr>
                </tbody>
                <tbody id="electricity-pledge">
                    <tr>
                        <td><GiElectric /> Purchase green electricity</td><td><select onChange= { (e) => { setElectricity(e.target.value)}}>
                            <option value="0">No</option>
                            <option value="2.0">Yes</option>
                            </select></td>
                        <td>{electricity}</td><td></td>
                        <td><input type="button" value="I pledge" onClick={handleElectricity}/></td>
                    </tr>
                </tbody>
                <tbody id="led-pledge">
                    <tr>
                        <td><RiLightbulbLine /> Switch to CFLs or LEDs</td><td><select onChange= { (e) => { setLED(e.target.value)}}>
                            <option value="0.4">5 bulbs</option>
                            <option value="0.8">10 bulbs</option>
                            </select></td>
                            <td>{led}</td><td></td>
                        <td><input type="button" value="I pledge" onClick={handleLED}/></td>
                    </tr>
                </tbody>
                <tbody id="light-pledge"> 
                    <tr>
                        <td><ImSwitch />  Turn off lights</td>
                        <td><select onChange={changeLights}>
                            <option>Hours off</option>
                            <option value="0.2">5</option>
                            <option value="0.4">11</option>
                            <option value="0.6">17</option>
                            <option value="0.8">24</option>
                        </select>
                        </td>
                        <td>{lights}</td><td></td>
                        <td><input type="button" value="I pledge" 
                        onClick={ (e) => {
                            setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
                            parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
                            
                            const lightPledge = document.getElementById("light-pledge");
                            lightPledge.style.display = "none";
                            e.target.style.display = "none";
                        }}/></td>
                    </tr>
                </tbody>

            </table>
            <div>
            <input align="center" type="button" value="See Effect of Selected Pledges" onClick={updateEmission}/>
            </div>
        </div>
        </div>
    )
}

export default Pledges;