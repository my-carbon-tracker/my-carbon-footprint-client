import {React, useState} from 'react'
import { Doughnut } from 'react-chartjs-2'

export default function EmissionsGraph(props){
    const [chartData, setChartData] = useState({})
    let {data} = props
    let filteredData = {}
    const chart = {
        labels: [],
        datasets:[{
            label:'Food emissions',
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(66, 135, 245)',
                'rgb(66, 188, 245)',
                'rgb(245, 194, 66)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(245, 194, 66)',
                'rgb(227, 66, 245)',
                'rgb(245, 66, 206)',
                'rgb(66, 161, 245)',
                'rgb(209, 66, 245)'
            ],
            borderColor: 'rgb(255, 99, 132)',
            data: [],
        }]
    }
    data.forEach(entry => {
        if(filteredData[entry.name]){
            filteredData[entry.name] += entry.emission
        }
        else{
            filteredData[entry.name] = entry.emission
        }
    })

    for (const key in filteredData) {
        chart.labels.push(key)
        chart.datasets[0].data.push(filteredData[key])
    }

    return (
        <div>
            <Doughnut data={chart}></Doughnut>
        </div>
    )
}