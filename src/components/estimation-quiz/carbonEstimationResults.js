import {Box} from '@material-ui/core/';
import PrimaryButton from '../reusable/PrimaryButton';
import {Pie} from 'react-chartjs-2'; 

export default function CarbonEstimationResults (props) {
    let {token,place,totalEmissions,chartData} = props
    // //send data to database:
    const handleSave = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/logEmission/estimated`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body: JSON.stringify({
                location: place,
                estimated_emission: totalEmissions
            })
        })
        .then((res)=>res.json())
        .then((responseJSON)=>console.log(responseJSON))
        console.log(totalEmissions)
    }
    
    return(
        <div>
            <div>
                <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', paddingTop:30, paddingBottom:10}}>
                    Your estimated carbon footprint is:
                    <div>
                        {totalEmissions} tons CO2eq/year
                    </div> 
                </Box> 
                <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', paddingTop:30, paddingBottom:10}}>
                    Here is the breakdown of your carbon emissions
                </Box>                  
                <Pie data={chartData}/>
            </div>
            <div style={{margin:20}}>
                <PrimaryButton type="save" text="Save Results" value="Save" id="savebtn" onClick={handleSave}/>
            </div> 
        </div>
    )
}