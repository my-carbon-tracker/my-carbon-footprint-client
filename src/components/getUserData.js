import React from "react";
import { useAverageEmissionContext } from '../contexts/averageEmissionContext';
import { useLocationContext } from '../contexts/locationContext';
import { useEmissionContext } from "../contexts/emissionContext";
import { useUserNameContext } from "../contexts/usernameContext";
import getServerURL from '../serverConfig';
/* eslint-disable react/prop-types */

export default function UserData(props){
    const {token} = props;
    const {name, setName} = useUserNameContext();
    const {totalEmission, setTotalEmission} = useEmissionContext();
    const {location, setLocation} = useLocationContext();
    const {compareToOthers, setCompareToOthers} = useAverageEmissionContext();

    fetch(`${getServerURL()}/auth/user/data`,{
            method:'GET',
            headers:{
                "Accept": "application/json",
                "Authorization":`Bearer ${token}`
            }
         })
        .then((res) => res.json())
        .then((result)=> {
            // console.log(result.name)
            setName(result.name)
            setTotalEmission(result.emission)
            setLocation(result.location)
            setCompareToOthers(result.estimate)
            console.log(result.estimate)
        })
        .catch((err) => console.log("error"))
        
    return (
        <p> </p>
    )
}