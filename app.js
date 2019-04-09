const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("hello world");
});

app.listen(8082, (req, res)=>{
    console.log('Example app listening on port 8082 \n http://localhost:8082');
});

