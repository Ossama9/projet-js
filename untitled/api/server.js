const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/data', (req, res) => {
    const data = [
        {
            "hour": 10,
            "value": 8
        },
        {
            "hour": 11,
            "value": 10
        },
        {
            "hour": 12,
            "value": 13
        },
        {
            "hour": 13,
            "value": 16
        },
        {
            "hour": 14,
            "value": 15
        },
        {
            "hour": 15,
            "value": 8
        },
        {
            "hour": 16,
            "value": 7
        },
        {
            "hour": 17,
            "value": 15
        },
        {
            "hour": 18,
            "value": 20
        },
        {
            "hour": 19,
            "value": 11
        },
        {
            "hour": 20,
            "value": 8
        }
    ]

    res.json(data)
});

app.listen(3000, () => {
    console.log('Express server is listening on port 3000');
});