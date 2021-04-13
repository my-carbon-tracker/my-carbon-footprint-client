import {Link} from 'react-router-dom';
function Home () {
    return(
        <div>
            <h2 style={{bottom:0, color:'white', textAlign:'center'}}>
                <Link to="/quiz">
                    <button >Find Out Your Carbon Footprint</button>
                </Link>
            </h2>
            <div style={{position:'fixed', bottom:0}}>
                <climate-clock />
            </div>
        </div>
    )
}

export default Home;