import React from "react";
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, InputLabel, Select, MenuItem } from '@material-ui/core';
import { AiFillCar, AiOutlineSkin} from "react-icons/ai";
import { GiTreeGrowth, GiSolarPower, GiElectric, GiMilkCarton, GiCow } from "react-icons/gi";
import { FaShower, FaCarrot, FaAward } from "react-icons/fa";
import { RiLightbulbLine } from "react-icons/ri";
import { ImSwitch } from "react-icons/im";
import { useOffsetContext } from "../contexts/pledgeContext";
import { useEmissionContext } from "../contexts/emissionContext";
import { makeStyles } from "@material-ui/styles";
import PrimaryButton from "./reusable/PrimaryButton";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
})

const columns = [
    { id: 'name', label: 'Pledges', minWidth: 170 },
    { id: 'code', label: 'Select', minWidth: 100 },
    { id: 'population', label: 'Tons Saved Per Year', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'size', label: 'Incentives', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'density', label: 'Status', minWidth: 170, align: 'right', format: (value) => value.toFixed(2)},
  ];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('Carpool to Work', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];

const Pledges = (props) => {
    const classes = makeStyles();
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
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
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
            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', paddingTop:20}}>
                Total CO2 Emissions saved: {totalOffset}
            </Box>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead style={{backgroundColor:'white'}}>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Carpool to work
                            </TableCell>
                            <TableCell>
                                <InputLabel id="daysCarpooled">Days</InputLabel>
                                <Select labelId="daysCarpooled" onChange={changeCarpoolDays}>
                                    <MenuItem value='0.3'>1</MenuItem>
                                    <MenuItem value='0.6'>2</MenuItem>
                                    <MenuItem value='0.9'>3</MenuItem>
                                    <MenuItem value='1.2'>4</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell>
                                {carpool}   
                            </TableCell>
                            <TableCell component="a" href="https://fundingwizard.arb.ca.gov/web/#search//%255BZipcode%253D%253D94720%255D%255BCategory%253D%253DTransportation%255D%255BEligible+Applicants%253D%253DIndividual%255D/false/none/false/1/12">
                                Rebates and incentives
                            </TableCell>
                            <TableCell>
                                <PrimaryButton text="Pledge" onClick={(e) => {
                                    setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
                                    parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
                                }}/>
                            </TableCell>
                        </TableRow>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                </TableCell>
                                );
                            })}
                            </TableRow>
                        );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>

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