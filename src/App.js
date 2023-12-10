import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import CreatePaciente from "./components/createPaciente";
import PacientesList from "./components/List";
import EditPacientes from "./components/edit";
import Menu from "./pages/Menu";
import { Route,Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
function App() {
  
  return (
  <>
 <Menu/>
  <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/create-paciente" element={<CreatePaciente />} />
            <Route exact path="pacientes/edit/:DNI" element={<EditPacientes/>} />
            <Route exact path="/pacientes" element={<PacientesList />} />
          </Routes>

          <Footer/>
    
    
  </>
  );
}

export default App;
/*
}
  state= {
      data:[]
  };

  peticionGet = () =>{
      axios.get(url).then(response=> {
                this.setState({data: response.data});
               console.log(response.data)
        })

}

componentDidMount() {
        this.peticionGet();  
}    
  render(){

  return (
    <List/>
  );
}
*/
