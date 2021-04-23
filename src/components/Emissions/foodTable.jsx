import {React, useEffect, useState} from 'react'
import { DataGrid } from '@material-ui/data-grid'
import EmissionGraph from './graphs'
import food from '../footprint-quiz/food/food'


export default function FoodEmission(props) {
    const [rows, setRows] = useState([])
    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'meal', headerName: 'Meal #', width: 75},
        {field: 'name', headerName: 'Food Type', width: 120},
<<<<<<< HEAD
        {field: 'serving', headerName: 'Servings', width: 100},
=======
        {field: 'serving', headerName: 'Servings', width: 120},
>>>>>>> 45ee72f3ffba9fbdebb21d114d53e8b486386807
        {field: 'emission', headerName: 'Emissions', width: 120}
    ]
    console.log(props.token)
    
    useEffect(() => {
        let id = 0
        const container = []
        const getEntries = async() => {
            const response = await fetch('http://localhost:3000/food/entries',{
                headers: {
                    "Authorization": `Bearer ${props.token}`
                },
            })
            const data = await response.json()
            data.response.forEach((obj) => {
                makeRows(obj.food_serving, obj.id)
            })
            setRows(container)
        }

        const makeRows = (entries, entryidx) => {
            entries.forEach(obj => {
                id++
                const entry = {}
                entry.id = id
                entry.meal = entryidx
                entry.name = obj.name
                entry.serving = obj.servings
                entry.emission = obj.servings * food[obj.name].emissionsPerServing
                container.push(entry)
            })
        }

        getEntries()
    }, [props.token])

    return (
<<<<<<< HEAD
        <div style={{display: 'flex'}}>
            <div style={{height:400, width: '50%', backgroundColor:'white'}}>
                <DataGrid rows={rows} columns={columns} checkboxSelection />
            </div>
            <div style={{width: '50%', height:'200px'}}>
            <EmissionGraph data ={rows}/>
            </div>
=======
        <div style={{height:400, width: '100%', backgroundColor:'white'}}>
            <DataGrid rows={rows} columns={columns} checkboxSelection />
            <EmissionGraph data ={rows}/>
>>>>>>> 45ee72f3ffba9fbdebb21d114d53e8b486386807
        </div>
    )
}