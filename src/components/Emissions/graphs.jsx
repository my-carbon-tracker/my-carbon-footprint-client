import {React, useState} from 'react'
import { Doughnut } from 'react-chartjs-2'

export default function EmissionsGraph(props){
    const [chartData, setChartData] = useState({})
    /* eslint-disable react/prop-types */
    let {data} = props
    let filteredData = {}
    const chart = {
        labels: [],
        datasets:[{
            label:'Food emissions',
            backgroundColor: ['#7D9ECA','#A8CBF0','#5CABFF','#467EAF','#334D84'],
            borderColor: '#7D9ECA',
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
            <Doughnut 
                data={chart} 
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                }}
            />
        </div>
    )
}