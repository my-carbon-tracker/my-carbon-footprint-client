import React from "react";

//Feature 1: user is presented with a form with 3 values that they must input: location, income and houshold size

function GetUserInfo(){
    const [location, setLocation] = React.useState();
    const [place, setPlace] = React.useState();
    const [income, setIncome] = React.useState();
    const [size, setSize] = React.useState();

    const handleChange = (e) => {
        setPlace(e.target.value)
    };
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        let url = `https://apis.berkeley.edu/coolclimate/footprint-defaults?input_location_mode=${location}&input_location=${place}&input_income=${income}&input_size=${size}`
        fetch(url, {
            method: "GET",
            headers: {
                app_id: "f69e66f2",
                app_key: "8945dbb265921be3f110a47ff6cf44cf"
            }
        }).then(res => res.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error)=> console.log(error));   
    };

    return (
        <div>
            <p>Let's get started with a quick carbon footprint estimate</p>
            
            <form onSubmit={handleSubmit}>
                <p>Location type:</p>
                <select value={location}>
                    <option value="1">ZIP code</option> 
                    <option value="2">City</option>
                    <option value="3">County</option>
                    <option value="4">State</option>
                </select>
                
                <input id="location" type="text" value={place} onChange={handleChange} />

                <p>What is your annual household income?</p>
                <select value={income}> 
                <option value="1">Average</option> 
                <option value="2">Less than $10,000</option>
                <option value="3">$10,000 to $19,999</option>
                <option value="4">$20,000 to $29,999</option>
                <option value="5">$30,000 to $39,999</option>
                <option value="6">$40,000 to $49,999</option>
                <option value="7">$50,000 to $59,999</option>
                <option value="8">$60,000 to $79,999</option>
                <option value="9">$80,000 to $99,999</option>
                <option value="10">$100,000 to $119,999</option>
                <option value="11">$120,000 or more</option>
                </select>

                <p>How many people live in your household?</p>
                <select value={size}> 
                <option value="0">Average (2.5 persons)</option>
                <option value="1">1 person</option>
                <option value="2">2 person</option>
                <option value="3">3 person</option>
                <option value="4">4 person</option>
                <option value="5">5 of more people</option>
                </select>

                <p></p>
                <input onSubmit={handleSubmit} id="submitbtn" type="submit" value="Submit"/>
            </form>

            <div>
                <p>Here is your estimated carbon footprint</p>
                <p>Here is how you compare to other in your location</p>
            </div>
        </div>
    )
}

export default GetUserInfo;