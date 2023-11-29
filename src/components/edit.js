import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditPacientes() {
  const [pacientesForm, setPacientesForm] = useState({
    firstName: "",
            surname: "",
            direction: "",
            localidad:"",
            cp:"",
            telf:"",
            DNI:"",
  });
  let params = useParams();
  let navigate = useNavigate();
  const inputsHandler = (e) => {
    setPacientesForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/pacientes/:DNI" + params.DNI, {
            firstName: pacientesForm.firstName,
            surname: pacientesForm.surname,
            direction: pacientesForm.direction,
            localidad:pacientesForm.localidad,
            cp:pacientesForm.cp,
            telf:pacientesForm.telf,
            DNI:pacientesForm.DNI,
        
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/pacientes-List");
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/pacientes" + params.DNI)
      .then((res) => {
        setPacientesForm({
          firstName: res.data.data.firstName,
          surname: res.data.data.surname,
         direction: res.data.data.direction,
            localidad:res.data.data.localidad,
            cp:res.data.data.cp,
            telf:res.data.data.telf,
            DNI:res.data.data.DNI,
         
        });
      });
  }, []);
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={pacientesForm.firstName}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">apellidos</label>
            <input
              type="text"
              className="form-control"
              name="surname"
              id="surname"
              value={pacientesForm.surname}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              type="text"
              className="form-control"
              name="direction"
              id="direction"
              value={pacientesForm.direction}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Localidad</label>
            <input
              type="text"
              className="form-control"
              name="localidad"
              id="localidad"
              value={pacientesForm.localidad}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">código postal</label>
            <input
              type="text"
              className="form-control"
              name="cp"
              id="cp"
              value={pacientesForm.cp}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              name="telf"
              id="telf"
              value={pacientesForm.telf}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">DNI</label>
            <input
              type="text"
              className="form-control"
              name="DNI"
              id="DNI"
              value={pacientesForm.DNI}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditPacientes;