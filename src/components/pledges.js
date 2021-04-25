import React from "react";
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, InputLabel, Select, MenuItem, ThemeProvider } from '@material-ui/core';
import { AiFillCar, AiOutlineSkin} from "react-icons/ai";
import { GiTreeGrowth, GiSolarPower, GiElectric, GiMilkCarton, GiCow } from "react-icons/gi";
import { FaShower, FaCarrot, FaAward } from "react-icons/fa";
import { RiLightbulbLine } from "react-icons/ri";
import { ImSwitch } from "react-icons/im";
import { useOffsetContext } from "../contexts/pledgeContext";
import { useEmissionContext } from "../contexts/emissionContext";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import PrimaryButton from "./reusable/PrimaryButton";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { useConfettiContext } from "../contexts/confettiContext";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
})

const tableTheme = createMuiTheme({
    overrides:{
      MuiMenuItem: { // For ListItem, change this to MuiListItem
        root: {
          "&$selected": {       // this is to refer to the prop provided by M-UI
            backgroundColor: '#83bcc4', // updated backgroundColor
          },
          "&:hover":{
            backgroundColor: '#83bcc43',
          },
          color:"#2E4089"
        },
      },
      MuiPaper: {
        root: {
          backgroundColor: fade('#FFFF', 0.75)
        }
      },
      MuiTable:{
        root:{
          backgroundColor:fade('#FFFF', 0.75),
          borderRadius: 5
        }
      },
      MuiTableHead:{
        root:{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }
      },
      MuiTableCell: {
        stickyHeader:{
            '&:last-child': {
                borderTopRightRadius: 5,
            },
            '&:first-child': {
                borderTopLeftRadius: 5,
            },
            backgroundColor:'#FFFF',
        },
      },
      MuiTableRow:{
        borderRadius: 'inherit',
      }
    }
})

const columns = [
    { id: 'name', label: 'Pledges', minWidth: 170 },
    { id: 'code', label: 'Select', minWidth: 100 },
    { id: 'population', label: 'Tons Saved Per Year', minWidth: 120, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'size', label: 'Status', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'density', label: 'Incentives', minWidth: 170, align: 'right', format: (value) => value.toFixed(2)},
  ];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

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
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      //setRowsPerPage(+event.target.value);
        setRowsPerPage(event.target.value);
      setPage(0);
    };
  
    const {token} = props;
    console.log(totalOffset);

    //confetti
    const { party, setParty } = useConfettiContext();

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
        setParty(true);
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
        .then((resJSON)=>{
            console.log(emissionWithPledge)
            console.log(resJSON)
        })
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

    const pledge = () => {
        setTotalOffset((parseFloat(carpool) + parseFloat(organicProduce) + parseFloat(organicDairy) + parseFloat(organicMeat) + parseFloat(plantedTrees) +
        parseFloat(linedry) + parseFloat(lights) + parseFloat(electricity) + parseFloat(panels) + parseFloat(showerheads) + parseFloat(led)).toFixed(2));
    }

    return (
        <div>
            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', paddingTop:20}}>
                Total CO2 Emissions saved: {totalOffset}
            </Box>
            <ThemeProvider theme={tableTheme}>
            {/* <Paper className={classes.root}> */}
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
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
                    {page===0 && 
                    <>
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
                                    <MenuItem value='1.5'>5</MenuItem>
                                    <MenuItem value='1.8'>6</MenuItem>
                                    <MenuItem value='2.1'>7</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell align="right">
                                {carpool}   
                            </TableCell>
                            <TableCell align="right">
                                <PrimaryButton text="Pledge" size="small" onClick={pledge}/>
                            </TableCell>
                            <TableCell align="right" component="a" href="https://fundingwizard.arb.ca.gov/web/#search//%255BZipcode%253D%253D94720%255D%255BCategory%253D%253DTransportation%255D%255BEligible+Applicants%253D%253DIndividual%255D/false/none/false/1/12">
                                Rebates and incentives
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Eat organic produce
                            </TableCell>
                            <TableCell>
                                <InputLabel id="organicProducePercentage">%</InputLabel>
                                <Select labelId="organicProducePercentage" onChange={changeProduce}>
                                    <MenuItem value="0.025">25%</MenuItem>
                                    <MenuItem value="0.05">50%</MenuItem>
                                    <MenuItem value="0.075">75%</MenuItem>
                                    <MenuItem value="0.1">100%</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell align="right">
                                {organicProduce}
                            </TableCell>
                            <TableCell align="right">
                                <PrimaryButton text="Pledge" size="small" onClick={pledge}/>
                            </TableCell>
                            <TableCell />
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Eat organic meat
                            </TableCell>
                            <TableCell>
                                <InputLabel id="organicMeatPercentage">%</InputLabel>
                                <Select labelId="organicMeatPercentage" onChange={changeMeat}>
                                    <MenuItem value="0.025">25%</MenuItem>
                                    <MenuItem value="0.05">50%</MenuItem>
                                    <MenuItem value="0.075">75%</MenuItem>
                                    <MenuItem value="0.1">100%</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell align="right">
                                {organicMeat}
                            </TableCell>
                            <TableCell align="right">
                                <PrimaryButton text="Pledge" size="small" onClick={pledge}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Eat organic dairy
                            </TableCell>
                            <TableCell>
                                <InputLabel id="organicDairyPercentage">%</InputLabel>
                                <Select labelId="organicDairyPercentage" onChange={changeDairy}>
                                    <MenuItem value="0.025">25%</MenuItem>
                                    <MenuItem value="0.05">50%</MenuItem>
                                    <MenuItem value="0.075">75%</MenuItem>
                                    <MenuItem value="0.1">100%</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell align="right">
                                {organicDairy}
                            </TableCell>
                            <TableCell align="right">
                                <PrimaryButton text="Pledge" size="small" onClick={pledge}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Install PV panels
                            </TableCell>  
                            <TableCell>
                                <Select onChange={ (e) => { setPanels(e.target.value) }}>
                                    <MenuItem value="0">No</MenuItem>
                                    <MenuItem value="2.0">Yes</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell align="right">
                                {panels}
                            </TableCell>
                            <TableCell align="right">
                                <PrimaryButton text="Pledge" size="small" onClick={pledge}/>
                            </TableCell>
                            <TableCell component="a" href="https://www.solar-estimate.org/" align="right">
                                Get a detailed estimate
                            </TableCell>
                        </TableRow>
                        </>
                        }
                        {page===1 && 
                        <>
                        <TableRow>
                            <TableCell>
                                Install low flow showerheads
                            </TableCell>
                            <TableCell>
                                <Select onChange={(e) => {setShowerheads(e.target.value)}}>
                                    <MenuItem value="0">No</MenuItem>
                                    <MenuItem value="0.4">Yes</MenuItem>
                                </Select>
                            </TableCell> 
                            <TableCell align="right">
                                {showerheads}
                            </TableCell>
                            <TableCell align="right">
                                <PrimaryButton text="Pledge" size="small" onClick={pledge}/>
                            </TableCell> 
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Line dry clothing
                            </TableCell> 
                            <TableCell>
                            <InputLabel id="lineDryClothing">% of Clothing</InputLabel>
                                <Select labelId="lineDryClothing" onChange={changeLineDry}>
                                    <MenuItem value="0.1">20%</MenuItem>
                                    <MenuItem value="0.2">40%</MenuItem>
                                    <MenuItem value="0.3">60%</MenuItem>
                                    <MenuItem value="0.4">80%</MenuItem>
                                    <MenuItem value="0.5">100%</MenuItem>
                                </Select>
                            </TableCell>  
                            <TableCell align="right">
                                {linedry}
                            </TableCell> 
                            <TableCell align="right">
                                <PrimaryButton text="Pledge" size="small" onClick={pledge}/>
                            </TableCell>                         
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Plant trees
                            </TableCell>
                            <TableCell>
                                <InputLabel id="plantTrees"># of Trees</InputLabel>
                                <Select labelId="plantTrees" onChange={changeTrees}>
                                    <MenuItem value="0.1">5 trees</MenuItem>
                                    <MenuItem value="0.4">20 trees</MenuItem>
                                    <MenuItem value="1">50 trees</MenuItem>
                                    <MenuItem value="2">100 trees</MenuItem>
                                </Select>
                            </TableCell>  
                            <TableCell align="right">
                                {plantedTrees}  
                            </TableCell>
                            <TableCell align="right">
                                <PrimaryButton text="Pledge" size="small" onClick={pledge}/>
                            </TableCell>
                            <TableCell component="a" href="https://teamtrees.org/" align="right">
                                Plant Trees
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Purchase green electricity
                            </TableCell> 
                            <TableCell>
                                <Select onChange={(e) => { setElectricity(e.target.value)}}>
                                    <MenuItem value="0">No</MenuItem>
                                    <MenuItem value="2.0">Yes</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell align="right">
                                {electricity}
                            </TableCell>
                            <TableCell align="right">
                                <PrimaryButton text="Pledge" size="small" onClick={pledge}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Switch to CFLs or LEDs
                            </TableCell>
                            <TableCell>
                                <Select onChange={(e) => { setLED(e.target.value)}}>
                                    <MenuItem value="0.4">5 bulbs</MenuItem>
                                    <MenuItem value="0.8">10 bulbs</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell align="right">
                                {led}
                            </TableCell>
                            <TableCell align="right">
                                <PrimaryButton text="Pledge" size="small" onClick={pledge}/>
                            </TableCell>
                        </TableRow>
                        </>
                        }
                        {page===2 && 
                        <>
                        <TableRow>
                            <TableCell>
                                Turn off lights
                            </TableCell>
                            <TableCell>
                                <InputLabel id="lightsOff">Hours Off</InputLabel>
                                <Select labelId="lightsOff" onChange={changeLights}>
                                    <MenuItem value="0.2">5</MenuItem>
                                    <MenuItem value="0.4">11</MenuItem>
                                    <MenuItem value="0.6">17</MenuItem>
                                    <MenuItem value="0.8">24</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell align="right">
                                {lights}
                            </TableCell>
                            <TableCell align="right">
                                <PrimaryButton text="Pledge" size="small" onClick={pledge}/>
                            </TableCell>
                        </TableRow>
                        </>
                    }
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10]}
                    component="div"
                    count={11}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            {/* </Paper> */}
        </ThemeProvider>
        {/* Commenting out bc button seems to do nothing, get 404 err
        <div>
            <input align="center" type="button" value="See Effect of Selected Pledges" onClick={updateEmission}/>
        </div> 
        */}
        <div style={{marginTop:10}}>
            <PrimaryButton text="Completed Pledges" onClick={updateEmission}/>
            {/* <input align="center" type="button" value="Completed Pledges" onClick={updateEmission}/> */}
        </div>
        </div>
    )
}

export default Pledges;