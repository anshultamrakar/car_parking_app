import React from 'react'
import { Button , Modal,Typography, Box, Grid} from '@material-ui/core';
import { useParams , useNavigate } from 'react-router-dom';
import {useContext } from "react"
import DataContext from '../Context/DataContext';



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



const ModalPage = () => {
  const {open, price, parkingSlots, time, value, setValue} = useContext(DataContext)
  let {slotID} = useParams()
  console.log(slotID)
  let navigate = useNavigate()



const handleBack = () => {
        navigate('/layout')
}


const handlePayment = async (slotID: string | undefined) => {
    const latestArr = [...parkingSlots]
   const newArray = latestArr.filter((x : any) => x.id == slotID ? delete x["time"] && delete x["registration"] : null )
   const response = await fetch('https://httpstat.us/200', {
    method : "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body : JSON.stringify(newArray)
  })
   
  let data = await response.json()
   if (response.status === 200){
     if(newArray.length > 0){
      let newData = newArray[0].isAlloted = false;
      console.log("new data",newData)
     }
     console.log(data)
    
   }
   setValue(value -1)
   navigate('/layout')
}

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4"> Calculate Price</Typography>
          <Typography id = "deregister-time-spent" variant="h6">Total time spent :  {time} hrs</Typography>
          <Typography id = "deregister-charge" variant="h6">Total Price : $ {price}</Typography>
         <hr/>
         <Grid>
             <Button id = "deregister-back-button" variant="contained" color="secondary" onClick = {handleBack}>Back </Button>
             <Button id = "deregister-payment-button" style = {{marginLeft : "10px"}} variant="contained" color="secondary" onClick = {() => handlePayment(slotID)}>Payment taken</Button>
         </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalPage


