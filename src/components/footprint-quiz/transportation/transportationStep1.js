import {Container, Typography} from '@material-ui/core/';

function TransportationStep1(props){
    const {currentStep} = props
    if(currentStep!=='TransportationStep1'){
        return null
    }
    return(
        <Container maxWidth="sm">
            <Typography variant="h5" style={{color:'white'}}>
                Transportation Section Coming Soon..
            </Typography>
        </Container>
    )
}

export default TransportationStep1