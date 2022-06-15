import React from 'react'
import {  TextField } from '@material-ui/core';
import { Grid, Button} from '@material-ui/core';
import {useContext } from "react"
import DataContext from '../Context/DataContext';


const SpaceInput = () => {
  const {userInput , setUserInput , handleSubmit} = useContext(DataContext)
  return (
    <form onSubmit = {handleSubmit}>
        <Grid container style = {{marginTop : "150px", gap : "40px"}} direction= "column" justifyContent="center" alignItems="center" >
        <Grid >
         <TextField style = {{width : "200px"}} inputProps={{ min : 1, max : 20  }} type = "number" autoComplete='off' name = "userInput" id="parking-create-text-input" label = "No.of space available"  value = {userInput} 
         onChange = {(e) => setUserInput(e.target.value)} autoFocus  required/>
        </Grid>
        <Grid >
   <Button id = "parking-create-submit-button" variant="contained" color="secondary" type = 'submit'> Submit</Button>
        </Grid>
        </Grid>
   
    </form>
  )
}

export default SpaceInput;
