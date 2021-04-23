import React, { useState,useEffect, useRef } from "react"
import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import { TextField, Button } from '@material-ui/core'
const token = 'pk.eyJ1IjoiZWJzb25hcmkiLCJhIjoiY2tlN2V3ejB0MTh3NjJycXY5dWI3NDZwcyJ9.FYsqJqvdaamnEcpWF6d-mQ';


export default function Map() {
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });
    return (
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle='mapbox://styles/mapbox/light-v8'
        onViewportChange={setViewport}
        />
    )
}