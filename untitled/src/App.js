import React, {useEffect, useState} from 'react';
import './App.css';
import Component from "./Component";
import axios from "axios";

function App() {

    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="App">
            <Component data={data}/>
        </div>
    );
}

export default App;
