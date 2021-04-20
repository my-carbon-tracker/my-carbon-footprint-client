import {React, useEffect, useState} from 'react'
import { DataGrid } from '@material-ui/data-grid'
import food from '../footprint-quiz/food/food'



export default function FoodEmission(props) {
    const [rows, setRows] = useState([])
    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'meal', headerName: 'Meal #', width: 120},
        {field: 'name', headerName: 'Food Type', width: 120},
        {field: 'serving', headerName: 'Servings', width: 120}
    ]
    
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
            // // console.log(data)
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
                container.push(entry)
            })
        }

        getEntries()
    }, [props.token])

    return (
        <div style={{height:400, width: '100%', backgroundColor:'white'}}>
            <DataGrid rows={rows} columns={columns} checkboxSelection />
        </div>
    )
}