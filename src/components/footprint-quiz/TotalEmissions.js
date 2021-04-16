import { Container, Typography } from "@material-ui/core/";

function TotalEmissions(props){
    const {totalEmissions, currentStep} = props
    if(currentStep!=='TotalEmissions'){
        return null
    }
    return(
        <Container maxWidth="sm">
            <Typography variant="h5" style={{color:'white', padding:50}}>
                Your Total Emissions: {totalEmissions} kilos of CO2 
            </Typography>
        </Container>
    )
}

export default TotalEmissions;