import React from "react";
import XMLParser from 'react-xml-parser';
import {Box, TextField, Select, MenuItem} from '@material-ui/core/';
import PrimaryButton from '../reusable/PrimaryButton';
import CarbonEstimationResults from './carbonEstimationResults';

function GetUserInfo(props){
    //save to db and render in home page 
    const [currentPage, setCurrentPage] = React.useState('GetUserInfo')
    const [totalEmissions, setTotalEmissions] = React.useState()
    const [place, setPlace] = React.useState(); //save to render in home page too
    const [income, setIncome] = React.useState("1");
    const [size, setSize] = React.useState("1");
    const [chartData, setChartData] = React.useState({});    
    console.log(totalEmissions)
    const {token} = props

    const changePlace = (e) => {
        setPlace(e.target.value)
    };
    const changeIncome = (e) => {
        setIncome(e.target.value)
    };
    const changeSize = (e) => {
        setSize(e.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault(); 
        let url = `https://apis.berkeley.edu/coolclimate/footprint-defaults?input_location_mode=1&input_location=${place}&input_income=${income}&input_size=${size}`

        fetch(url, {
            method: "GET",
            headers: {
                app_id: "f69e66f2",
                app_key: "8945dbb265921be3f110a47ff6cf44cf"
            }
        })
        .then(res => res.text())
        .then(results => {
            var xml = new XMLParser().parseFromString(results); 
            console.log(xml)
            //get data objs
            let foodEmission = xml.children[264]['value'];
            let housingEmission = xml.children[263]['value'];
            let transportationEmission = xml.children[262]['value'];
            let goodsEmission = xml.children[265]['value'];
            let serviceEmission = xml.children[266]['value'];

            setTotalEmissions(xml.children[267]['value']);
   
            setChartData({
                labels: ["Food","Housing","Transportation", "Goods/Products", "Services"],
                datasets: [{
                    data: [foodEmission, housingEmission, transportationEmission, goodsEmission, serviceEmission],
                    backgroundColor: ['red','blue','green','yellow','pink']
                }]
            })
        })
        .then(()=>setCurrentPage("CarbonEstimationResults"))
        .catch((error)=> console.log(error));   
    };

    if(currentPage=='CarbonEstimationResults'){
        return (
            <div style={{textAlign: "center", background: 'linear-gradient(#DFB593, #DF7B7D 50%)', height:'175vh'}}>
                <CarbonEstimationResults token={token} place={place} totalEmissions={totalEmissions} chartData={chartData}/>
            </div>
        )
    }
    return (
        <div style={{textAlign: "center", background: 'linear-gradient(#DFB593, #DF7B7D 50%)', height:'175vh'}}>
            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', paddingTop:30, paddingBottom:10}}>
                Let's get started with a quick carbon footprint estimate
            </Box>            
            <form onSubmit={handleSubmit}>
                <Box fontWeight="fontWeightBold" fontSize={18} letterSpacing={1} style={{color:'#2E4089', padding:20}}>
                    Enter your zipcode below
                </Box>               
                <TextField style={{margin:20}} id='zipcode' label='Zipcode: ' type="string" InputLabelProps={{shrink: true,}} variant="outlined" onChange={changePlace}/>
                <Box fontWeight="fontWeightBold" fontSize={18} letterSpacing={1} style={{color:'#2E4089', padding:20}}>
                    What is your annual household income?
                </Box> 
                <Select onChange={changeIncome}>
                    <MenuItem value='1'>Average</MenuItem>
                    <MenuItem value='2'>Less than $10,000</MenuItem>
                    <MenuItem value='3'>$10,000 to $19,999</MenuItem>
                    <MenuItem value='4'>$20,000 to $29,999</MenuItem>
                    <MenuItem value='5'>$30,000 to $39,999</MenuItem>
                    <MenuItem value='6'>$40,000 to $49,999</MenuItem>
                    <MenuItem value='7'>$50,000 to $59,999</MenuItem>
                    <MenuItem value='8'>$60,000 to $79,999</MenuItem>
                    <MenuItem value='9'>$80,000 to $99,999</MenuItem>
                    <MenuItem value='10'>$100,000 to $119,999</MenuItem>
                    <MenuItem value='11'>$120,000 or more</MenuItem>
                </Select>
                <Box fontWeight="fontWeightBold" fontSize={18} letterSpacing={1} style={{color:'#2E4089', paddingTop:30, paddingBottom:10}}>
                    How many people live in your household?
                </Box>
                <Select onChange={changeSize}>
                    <MenuItem value='0'>Average (2.5 persons)</MenuItem>
                    <MenuItem value='1'>1 person</MenuItem>
                    <MenuItem value='2'>2 person</MenuItem>
                    <MenuItem value='3'>3 person</MenuItem>
                    <MenuItem value='4'>4 person</MenuItem>
                    <MenuItem value='5'>5 or more people</MenuItem>
                </Select>
                <div style={{margin:20}}>
                    <PrimaryButton type="submit" text="See Results" value="Submit" id="submitbtn"/>
                </div>                
            </form>
            
        </div>
    )
}

export default GetUserInfo;