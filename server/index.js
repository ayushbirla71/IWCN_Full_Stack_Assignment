const express = require('express')
const app = express()
const cors=require("cors");
const route = require('./src/router/routers')

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(express.json())
app.use(cors(corsOptions))

app.use('/',route )

app.use((req, res) => {
    res.status(404).send({ status: false, message: "Url not found" })
})


app.listen(process.env.PORT ||3001,function ()
{console.log("Express app is running on port "+(process.env.PORT ||3001))})