import React from 'react';
import {BarChart, Bar, XAxis, YAxis, Label} from 'recharts'

function Component(props) {
    const data = props.data
    console.log(data)
    return (
        <div>
            <div>
                <p>Click each rectangle </p>
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="hours"/>
                    <YAxis/>
                    <Bar dataKey="value" fill="#8884d8"/>
                    <Label name="hihi" position="center"/>
                </BarChart>
            </div>
        </div>
    )
}

export default Component;