import { useState,useEffect } from "react"
import ReactMapGL, { Marker } from 'react-map-gl'
import { TextField, Button } from '@material-ui/core'

const token = 'pk.eyJ1IjoiZWJzb25hcmkiLCJhIjoiY2tlN2V3ejB0MTh3NjJycXY5dWI3NDZwcyJ9.FYsqJqvdaamnEcpWF6d-mQ';


export default function MapBox(){
    const [points, setPoints] = useState([])
    const [pntA, setPA] = useState()
    const [pntB, setPB] = useState()
    const [mark, setMark] = useState([])
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 40,
        longitude:-73,
        zoom: 3
    });

    const callGeo = async () => {
        const call1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pntA}.json?country=US&access_token=pk.eyJ1IjoiZWJzb25hcmkiLCJhIjoiY2tlN2V3ejB0MTh3NjJycXY5dWI3NDZwcyJ9.FYsqJqvdaamnEcpWF6d-mQ`)
        const call2 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pntB}.json?country=US&access_token=pk.eyJ1IjoiZWJzb25hcmkiLCJhIjoiY2tlN2V3ejB0MTh3NjJycXY5dWI3NDZwcyJ9.FYsqJqvdaamnEcpWF6d-mQ`)

        const data1 = await call1.json()
        const data2 = await call2.json()


        // data1.features = data1.features.filter((location) => location.relevance === 1)
        // data2.features = data2.features.filter((location) => location.relevance === 1)

        data1.features.forEach((location,idx) => {
            if(location.relevance === 1){
                let pnt = <Marker 
                key={mark.length}
                longitude={location.geometry.coordinates[0]}
                latitude={location.geometry.coordinates[1]} />
                setMark(mark.push(pnt))
            }
        })
        data2.features.forEach((location,idx) => {
            if(location.relevance === 1){
                let pnt = <Marker 
                key={mark.length}
                longitude={location.geometry.coordinates[0]}
                latitude={location.geometry.coordinates[1]} />
                setMark(mark.push(pnt))
            }
        })
    }

    const calcDistance = (geo) => {
        setPoints(points.push(geo.coordinates))
        if(points.length === 2){
            console.log(points)
            setPoints([])
            // console.log(toFrom)
        }
      }

        return (
            <div>
                <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={token}
                mapStyle='mapbox://styles/mapbox/light-v8'
                onViewportChange={setViewport}
                />
                <form>
                    <TextField variant='outlined' label='Point A' onChange={(e) => setPA(e.target.value)}></TextField>
                    <TextField variant='outlined' label='Point B' onChange={(e) => setPB(e.target.value)}></TextField>
                    <Button variant='contained' color='secondary' onClick={()=>callGeo()}>Submit</Button>
                </form>
            </div>
            );
}