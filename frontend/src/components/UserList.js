import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Button, TextField, Typography, Alert, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../cssComponents/adminStyle.css';
import { getEndpoint } from '../pages/const/const';
import NewUserDialog from './NewUserDialog';

export default function UserList() {

    const [users, setUsers] = useState([]);

    const handleDeleteUser = (userId) => {

      axios.delete(getEndpoint(`/administrador/users/${userId}`))
        .then((response) => {
          console.log('Usuario eliminado:', response.data);
          setUsers(users.filter((user) => user._id !== userId));
        })
        .catch((error) => {
          console.error('Error al eliminar el usuario:', error);
        });
    };

    const handleCreateUser = (user) => {
      setUsers([...users, user]);
    };
      
    useEffect(() => {
      axios.get(getEndpoint('/administrador/users'))
      .then((response)=>{
      setUsers(response.data);
     });
        }, [users]);
      
        return (
          <div>
              <Typography variant="h5" frontWeight = 'bold' style={{ fontFamily: 'Palatino' }} color='white'>Eliminar usuario de la aplicacion</Typography>
            
            {users.map((user) => (
              <Box key={user._id} marginBottom={1}>
                <Button variant="outlined" onClick={() => handleDeleteUser(user._id)} >
                  {user.username}
                </Button>
              </Box>
            ))}

          <NewUserDialog onCreateUser={handleCreateUser}/>
           
          </div>
        );

}