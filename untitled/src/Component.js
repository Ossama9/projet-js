import React, {useState} from 'react';
import {BarChart, Bar, XAxis, Tooltip, Cell} from 'recharts'
import './Component.css';

function Component(props) {
    const data = props.data
    const [focusBar, setFocusBar] = useState(null);

    return (
        <div>
            <div>
                <div className="my-title-component">
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.0342 1.2715L1.72633 18.4023L10.4968 16.733L10.0741 26.2664C10.0734 26.2851 10.0779 26.3033 10.0874 26.3197C10.0969 26.336 10.1111 26.3502 10.1289 26.3612C10.1468 26.3723 10.1679 26.3798 10.1908 26.3834C10.2137 26.387 10.2379 26.3864 10.2615 26.3819C10.2867 26.3771 10.3106 26.3678 10.3314 26.3549C10.3523 26.3419 10.3694 26.3256 10.3815 26.3072L22.486 10.8131L13.9198 10.8428L14.3526 1.3064C14.352 1.28767 14.3464 1.26964 14.336 1.25349C14.3256 1.23735 14.3107 1.22348 14.2922 1.21279C14.2738 1.2021 14.2523 1.19484 14.2291 1.1915C14.206 1.18816 14.1817 1.18881 14.1578 1.19341C14.1318 1.19845 14.107 1.20815 14.0855 1.22172C14.064 1.23529 14.0465 1.25235 14.0342 1.2715Z"
                            stroke="#535353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>Affluence pour la journée</p>
                </div>
                <BarChart width={600} height={300} data={data} id="my-barchart-component" onMouseMove={(state) => {
                    if (state.isTooltipActive) {
                        setFocusBar(state.activeTooltipIndex);
                    } else {
                        setFocusBar(null);
                    }
                }}>
                    <XAxis dataKey="hour" tickLine={false} tickFormatter={(value, index) => {
                        if (index === 0 || index === data.length - 1 || index === (data.length - 1) / 2)
                            return `${value}h`
                        else
                            return ''
                    }}/>
                    <Tooltip cursor={false}/>
                    <Bar dataKey="value" fill="#8884d8" shape={(props) => {
                        return (
                            <>
                                <path
                                    d={`M ${props.x},${props.y}
                L ${props.x + props.width},${props.y}
                L ${props.x + props.width},${props.y + props.height}
                L ${props.x},${props.y + props.height}
                Z`}

                                    fill={props.fill}
                                />
                                <path
                                    d={`M ${props.x + props.width},${props.y}
                L ${props.x + 1},${props.y}
                L ${props.x},${props.y}
                L ${props.x}, ${props.y}
                Z`}
                                    stroke="black"
                                    strokeWidth={2}
                                    fill="black"
                                />


                            </>
                        );
                    }}>
                        {data.length > 0 && data.map((entry, index) => (
                            <Cell
                                fill={focusBar === index ? "#F1A294" : "#DEE1FD"}
                            />
                        ))}
                    </Bar>

                    <svg width="71" height="191" viewBox="0 0 71 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_2_14" fill="white">
                            <path d="M0 0H71V191H0V0Z"/>
                        </mask>
                        <path d="M0 0H71V191H0V0Z" fill="#FF0000"/>
                        <path d="M0 3H71V-3H0V3Z" fill="black" mask="url(#path-1-inside-1_2_14)"/>
                    </svg>
                    <br/>
                    <svg width="71" height="191" viewBox="0 0 71 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_2_14" fill="white">
                            <path d="M0 0H71V191H0V0Z"/>
                        </mask>
                        <path d="M0 0H71V191H0V0Z" fill="#FF0000"/>
                        <path d="M71 188H0V194H71V188Z" fill="black" mask="url(#path-1-inside-1_2_14)"/>
                    </svg>

                </BarChart>
            </div>
        </div>

    )
}

export default Component;