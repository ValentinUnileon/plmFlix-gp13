import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, TextField, Typography, Alert, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../cssComponents/adminStyle.css';

export default function UserList() {

    const [users, setUsers] = useState([]);
      
    useEffect(() => {
      axios.get('/administrador')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error al buscar los usuarios: ', error);
        });
    }, []);
  
    return (
      <div>
        <h2 className='textoLista'>Eliminar usuario de la aplicacion</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );

}