const express = require('express');
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(3000, () => {
    console.log('Express server is listening on port 3000');
});