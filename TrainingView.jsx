import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Trainingedit from './Trainingedit';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
const TrainingView = () => {
    var[training,settraining] = useState([]);
    var[selected,setSelected] = useState();
    var[update,setUpdate] = useState(false);


    useEffect(()=>{
        console.log("hello")
        axios.get("http://localhost:4005/trainingview/")
        .then(response =>{
            console.log(response.data)
            settraining(response.data)
        })
        .catch(err=>console.log(err))
    },[])

const deletevalues =(id)=>{
    console.log("deleted",id)
    axios.put("http://localhost:4005/remove/"+id)
    .then((response)=>{
        alert("DELETED")
    window.location.reload(false);
    })
}

const updatevalues =(value)=>{
console.log("updated",value);
setSelected(value);
setUpdate(true);
}
var result=
<div className='bb'>
<Typography >Training Details</Typography><br/><br/>
<TableContainer component={Paper}>
<Table >
  <TableHead>
    <TableRow>
      <TableCell >ID</TableCell>
      <TableCell >Name</TableCell>
      <TableCell >Age</TableCell>
      <TableCell >Completed</TableCell>
      <TableCell >remarks</TableCell>
      <TableCell>Edit</TableCell>
      <TableCell>Delete</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
      {training.map((value,index)=>{
          return(
              <TableRow key={index}>
                  <TableCell>{value.idd}</TableCell>
                  <TableCell>{value.ename}</TableCell>
                  <TableCell>{value.age}</TableCell>
                  <TableCell>{value.completed}</TableCell>
                  <TableCell>{value.remarks}</TableCell>
                  <TableCell><ModeEditOutlineIcon color='success' onClick={()=>updatevalues(value)}/></TableCell>
                  <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell>
              </TableRow>
          )
      })}
  </TableBody>
</Table>
</TableContainer>
</div>
if(update)
      {
        result=<Trainingedit data={selected} method='put'/>
      }
  return (result)
}

export default TrainingView