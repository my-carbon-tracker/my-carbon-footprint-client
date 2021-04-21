import { Container, Box } from "@material-ui/core/";

function TotalEmissions(props){
    const {totalEmissions, currentStep} = props
    if(currentStep!=='TotalEmissions'){
        return null
    }
    return(
        <Container maxWidth="sm">
            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', padding:30}}>
                Your Total Emissions: 
                <div>
                {totalEmissions} kilos of CO2 
                </div>
            </Box>
        </Container>
    )
}

export default TotalEmissions;