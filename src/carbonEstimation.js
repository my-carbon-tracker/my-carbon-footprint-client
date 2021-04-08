import React from "react";
import getURL from "./getURL";

//Feature 1: user is presented with a form with 3 values that they must input: location, income and houshold size

function GetUserInfo(){
    const [location, setLocation] = React.useState();
    const [place, setPlace] = React.useState();
    const [income, setIncome] = React.useState();
    const [householdSize, setHouseholdSize] = React.useState();

    const handleChange = (e) => {
    };

    const handleClick = (e)=>{ 
    }
    
    const handleSubmit = (event) => {
        let url = getURL(location, place, income, householdSize);

        event.preventDefault();
        fetch(url, {
            headers: {
                app_id: "f69e66f2",
                app_key: "8945dbb265921be3f110a47ff6cf44cf"
            }
        }).then(res => res.json())
        .then((data) => {
        })
        .catch((error)=> console.log(error));    
    };

    return (
        <div>
            <p>get a general assestment of your carbon input with just three questions</p>
            
            <form onSubmit={handleSubmit}>
                <p>Location type:</p>
                <select value={location}> types of location we can search by? </select>
                <input id="location" type="text" value={place} onChange={handleChange} />
                <p>Income</p>
                <select value={income}> Add income range</select>
                <p>Number of people that live in your home?</p>
                <select value={householdSize}> options for size</select>
                <input onClick={handleClick} id="submitbtn" type="submit" value="Submit"/>
            </form>

            <div>
                <p>Here is your estimated carbon footprint</p>
                <p>Here is how you compare to other in your location</p>
            </div>
        </div>
    )
}

export default GetUserInfo;