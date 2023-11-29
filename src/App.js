import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import CreatePaciente from "./components/createPaciente";
import PacientesList from "./components/List";
import EditPacientes from "./components/edit";

import { Route,Routes } from "react-router-dom";
function App() {
  
  return (
  <>
  <Routes>
    
            <Route exact path="/create-paciente" element={<CreatePaciente />} />
            <Route exact path="/edit-paciente/:DNI" element={<EditPacientes/>} />
            <Route exact path="/paciente-list" element={<PacientesList />} />
          </Routes>
    
    
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
