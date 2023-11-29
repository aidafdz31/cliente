import axios from 'axios';

export const client = axios.create({
    baseURL: "http://localhost:3000"
})

export interface ResponseAPI {
    firstName: string;
    surname: string;
    direction: string;
    localidad: string;
    cp:number;
    telf:number; 
    DNI:string; 
          
        
}