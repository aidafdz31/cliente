import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function PacientesList(props) {
  const [pacientes, setPacientes] =useState({firstName: "",
  surname: "",
  direction: "",
  localidad:"",
  cp:"",
  telf:"",
  DNI:""});
  const deletePacientes = (DNI) => {
    axios
      .delete("http://localhost:3000/pacientes/:DNI")
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/pacientes")
      .then((res) => {
        setPacientes(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pacientes]);
  return (
    <div>
      <table className="table">
       
          <tr>
            <th >nombre</th>
            <th >Apellido</th>
            <th >Dirección</th>
            <th >Localidad</th>
            <th >CP</th>
            <th >telf</th>
            <th >DNI</th>
          </tr>
      
        
          {this.pacientes.map((paciente, index) => {
            return (
              <tr key={index}>
                <th >{paciente.DNI}</th>
                <td>{paciente.firstName}</td>
                <td>{paciente.surname}</td>
                <td>{paciente.direction}</td>
                <td>{paciente.localidad}</td>
                <td>{paciente.cp}</td>
                <td>{paciente.telf}</td>
                <td>{paciente.DNI}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/edit-pacient/:DNI"}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deletePacientes(paciente.DNI)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      
      </table>
    </div>
  );
}
export default PacientesList;