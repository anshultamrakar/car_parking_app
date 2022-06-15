import React from "react";
import Header from "./Components/Header";
import SpaceInput from "./Components/SpaceInput";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalPage from './Components/ModalPage'
import { DataProvider } from "./Context/DataContext";


const App = () => {
  return (
     <div>
       <DataProvider>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<SpaceInput/>}/>
      <Route path = "layout">
        <Route index element = {<Layout/>}/>
              <Route path = ":slotID" element = {<ModalPage/>}/>
        </Route>
      </Routes>
      <ToastContainer />
      </DataProvider>
    </div>
   
  );
};

export default App;



