const express = require("express");
const cors = require("cors")

// const multer = require('multer')
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const usermodel= require("./model/user");
const trainmodel = require("./model/training");



const app = new express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
//api creation
app.get('/', (request, response) => {
    response.send("hi database")
})

//login retrieving
app.get('/logins',async(request,response)=>{
    var data = await usermodel.find();
    response.send(data)
})

app.get('/trainingview',async(request,response)=>{
    var data = await trainmodel.find();
    response.send(data)
    })
//for delete
app.put('/remove/:id',async(request,response)=>{
        let id = request.params.id
        await trainmodel.findByIdAndUpdate(id,{$set:{status:"INACTIVE"}})
        response.send("Record deleted")
        })    
        
app.put('/trainingedit/:id', async(request,response)=>{
let id = request.params.id
await trainmodel.findByIdAndUpdate(id,request.body)
response.send("Record Deleted")
})
//For Submit button
app.post('/new',(request,response)=>{
    console.log(request.body)
    new trainmodel(request.body).save();
    response.send("Record Sucessfully Saved")
    })

app.listen(4005, (request, response) => {
    console.log("port is running in 4005")
})

app.get('/trainingview',async(request,response)=>{
    var data = await trainmodel.find();
    response.send(data)
    })