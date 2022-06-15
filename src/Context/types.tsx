
type FormData = {
    registration : string ,
    time : string
}


export type ParkingContextState = {
    parkingSlots : any[];
    userInput : string;
    value : number ;
    setValue : (value : number) => void;
    setUserInput : (value : string) => void;
    setOpen : (value : boolean) => void;
    setForm : (value : {registration : string , time : string}) => void;
    open : boolean;
    price : number;
    time : number;
    setTime : (value : number) => void;
    setPrice : (value: number) => void;
    form :FormData
    handleSubmit : (e: React.FormEvent) => void;
    handleSubmit2 : (e: React.FormEvent) => void; 
  };
  