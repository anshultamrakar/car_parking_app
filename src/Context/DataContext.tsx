import React, { ReactNode } from "react";
import {createContext} from 'react'
import { ParkingContextState } from './types'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const contextDefaultValues : ParkingContextState = {
    parkingSlots: [],
    userInput: '',
    value :0,
    setValue : () => undefined,
    setUserInput: () => undefined,
    open: false,
    setOpen : () => undefined,
    setForm : () => undefined,
    price: 0,
    time : 2,
    setTime : () => undefined,
    setPrice : () => undefined,
    form: {
        registration: "",
        time: ""
    },
    handleSubmit: () => {},
    handleSubmit2: () => {}

} 

interface Props {
    children?: ReactNode
}

const DataContext = createContext<ParkingContextState >(contextDefaultValues)


export const DataProvider = ({children} :Props) => {

    let navigate = useNavigate();
    const [userInput, setUserInput] = useState<string>("");
    const [form, setForm] = useState<{ registration: string; time: string }>({
      registration: "",
      time: "",
    });
    const [parkingSlots, setParkingSlots] = useState<any>([]);
    const [open , setOpen] = useState<boolean>(false)
    const [price , setPrice ] = useState<number>(20)
    const [time , setTime] = useState<number>(2)
    const [value , setValue] = useState<number>(0)
  
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      let data = [];
      for (let i = 1; i <= Number(userInput); i++) {
        data.push({ id: i, isAlloted: false  });
      }
      navigate("/layout" );
      setParkingSlots(data);
      console.log(data);
    };
  
   
    const handleSubmit2 = (e: React.FormEvent) => {
      e.preventDefault();

      let bookingSlots= [...parkingSlots];
      let randObj = bookingSlots[Math.floor(Math.random() * parkingSlots.length)];
       console.log(randObj)
      if(value !== bookingSlots.length ){
        for(let i=0;i< bookingSlots.length;i++){
            if(bookingSlots[i].id === randObj.id){ 
           if(!randObj.isAlloted){
             randObj.isAlloted = true;
             randObj.registration = form.registration;
             randObj.time = form.time;
           }
           else{
             let obj = bookingSlots.find((e:any)=> e.isAlloted === false);
             obj.isAlloted = true;
             obj.registration = form.registration;
             obj.time = form.time;
           }}
           console.log(bookingSlots);
           setValue(value + 1)
        }
       }
       else{
         const notify = () => toast("Parking is full");
            notify();
       }
       console.log(bookingSlots)
    setParkingSlots(bookingSlots);
    setForm({ registration: "", time: "" });
    };
  
     return(
         <DataContext.Provider value = {{
          userInput,  handleSubmit , parkingSlots, open  , price , form , handleSubmit2, setUserInput,
         setOpen, setForm, setPrice , time , setTime, value , setValue
         }}>
             {children}

         </DataContext.Provider>
     ) 
 }
 export default DataContext