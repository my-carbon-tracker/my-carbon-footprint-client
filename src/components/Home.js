import Grid from '@material-ui/core/Grid';
function Home () {
    return(
        <div>
            <h2 style={{bottom:0, color:'white', textAlign:'center'}}>
                Home Page content goes here
            </h2>
            <div style={{position:'fixed', bottom:0}}>
                <climate-clock />
            </div>
        </div>
    )
}

export default Home;