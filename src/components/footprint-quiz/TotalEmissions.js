import React from 'react';
import { Container, Box } from "@material-ui/core/";
import FoodEmission from '../Emissions/foodTable'
/* eslint-disable react/prop-types */

function TotalEmissions(props){
    const {totalEmissions, currentStep} = props
    if(currentStep!=='TotalEmissions'){
        return null
    }
    return(
        <Container>
            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', padding:30}} maxWidth="sm">
                Your Total Emissions: 
                <div>
                {totalEmissions} kilos of CO2 
                </div>
            </Box>
            
            <Box  m={'auto'} pb={5}>
                <FoodEmission token={props.token}/>  
            </Box>
        </Container>
    )
}

export default TotalEmissions;