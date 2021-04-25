import {React, useEffect, useState} from 'react'
import { DataGrid } from '@material-ui/data-grid'
import EmissionGraph from './graphs'
import food from '../footprint-quiz/food/food'
import getServerURL from '../../serverConfig';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {ThemeProvider} from "@material-ui/core/";

const tableTheme = createMuiTheme({
    overrides:{
      MuiMenuItem: { // For ListItem, change this to MuiListItem
        root: {
          "&$selected": {       // this is to refer to the prop provided by M-UI
            backgroundColor: '#83bcc4', // updated backgroundColor
          },
          "&:hover":{
            backgroundColor: '#83bcc43',
          },
          color:"#2E4089"
        },
      },
      MuiDataGrid:{
        root:{
          backgroundColor:fade('#FFFF', 0.50),
          borderRadius: 5,
          //borderTopRightRadius: 20
        }
      }
    }
  })

export default function FoodEmission(props) {
    const [rows, setRows] = useState([])
    const columns = [
        {field: 'meal', headerName: 'Meal #', width: 115},
        {field: 'name', headerName: 'Food Type', width: 120},
        {field: 'serving', headerName: 'Servings', width: 110},
        {field: 'emission', headerName: 'Emissions', width: 120},
        {field: 'id', headerName: 'ID', width: 70},
    ]
    console.log(props.token)
    
    useEffect(() => {
        let id = 0
        const container = []
        const getEntries = async() => {
            const response = await fetch(`${getServerURL()}/food/entries`,{
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
                entry.meal = entryidx
                entry.name = obj.name
                entry.serving = obj.servings
                entry.emission = obj.servings * food[obj.name].emissionsPerServing
                entry.id = id
                container.push(entry)
            })
        }

        getEntries()
    }, [props.token])

    return (
        <div style={{display: 'flex'}}>
            <div style={{height:400, width: '50%'}}>
            <ThemeProvider theme={tableTheme}>
                <DataGrid rows={rows} columns={columns} checkboxSelection />
            </ThemeProvider>
            </div>
            <div style={{width: '50%', height:'200px'}}>
                <EmissionGraph data ={rows}/>
            </div>
        </div>
    )
}