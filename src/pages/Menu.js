import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Menu() {
 return (
 <nav>
 <div>Franquicias Dental Time</div>
 <div>
 <NavLink to="/" className={({isActive}) => isActive ?
 "active" : ""}>
 Inicio
 </NavLink>
 <NavLink to="/pacientes" className={({isActive}) => isActive ?
 "active" : ""}>
 Lista
 </NavLink>
 <NavLink to="pacientes/edit/:DNI" className={({isActive}) => isActive ?
 "active" : ""}>
 Editar
 </NavLink>
 <NavLink to="/create" className={({isActive}) => isActive ?
 "active" : ""}>
 Crear
 </NavLink>
 </div>
 </nav>
 )
}