import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Trainingedit = (props) => {
   
        var[training,settraining]=useState(props.data)
    
    const navigate =useNavigate();
    
    
    const traininghandler =(event)=>{
        const {name,value}=event.target
        settraining((training)=>({...training,[name]:value}))
        console.log(training)
    }  
     const saveData =()=>{
        
        if
        (props.method==="put")
        {
            axios.put("http://localhost:4005/trainingedit/"+training._id,training)
            .then((response)=>{
                alert("updated")
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
     }
     
  return (
    <div>
    <div className='div'>
      <h1>Employee Training Status</h1>
      <TextField  label="ID" variant="filled" name="id" value={training.idd} onChange={traininghandler}/><br/><br/>
      <TextField  label="name" variant="filled" name="ename" value={training.name}  onChange={traininghandler}/><br/><br/>
      <TextField  label="Age" variant="filled" name="age" value={training.age}  onChange={training} /><br/><br/>
      {/* <TextField  type="checkbox" label="completed" variant="filled" name="completed" value={inputs.completed}  onChange={inputhandler} /><br/><br/> */}
      <TextField  label="remarks" variant="filled" name="remarks" value={training.remarks}  onChange={traininghandler} /><br/><br/>
      {/* Status: &nbsp;&nbsp;
      <select name="Status" value={inputs.Status}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select> */}
      <br/><br/>
      <Button variant="contained" onClick={saveData}>SUBMIT</Button>
    </div>
</div>

  )
}

export default Trainingedit