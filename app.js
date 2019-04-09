const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res)=>{
    fs.readFile('index.html', (err, data)=>{
        if(err){
            console.log(err);
        } else {
            res.end(data);
        }
    });
});

app.listen(8082, (req, res)=>{
    console.log('Example app listening on port 8082 \n http://localhost:8082');
});

