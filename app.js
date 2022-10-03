const express = require('express');
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: false}));
app.use(express.json());


app.get('/users/:id',(req,res)=>{
    res.send({
        id: req.params.id,
        path: "/users/"+ req.params.id,
    });
});

app.post('/no',(req,res)=>{
    const {name,age} = req.body;
    res.send([name, age]);
    
});

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});