import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import { getEndpoint } from '../pages/const/const';


export default function NewUserDialog(users={users}, setUsers={setUsers}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [open, setOpen] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleOpenDialog = () => {
        setOpen(true);
    };
    
      const handleCloseDialog = () => {
        setOpen(false);
    };


    const handleCreateUser = () => {
        let payload = {
            username: username,
            password: password,
        };


    axios.post(getEndpoint('/administrador/users'), payload)
    .then((response)=> {
      console.log("Éxito al registrar usuario");
    })
    .catch((error)=>{

      console.log("ERROR AL REGISTRAR USUARIO");
    
    });

        handleCloseDialog();
    };

    return (

        <div>
            <Button variant="contained" color="primary" onClick={handleOpenDialog}>Crear nuevo usuario</Button>

            <Dialog open={open} onClose={handleCloseDialog}>

                <DialogTitle>Crear nuevo usuario</DialogTitle>

                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField label="Username" fullWidth value={username} onChange={handleUsernameChange} />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField label="Password" fullWidth type="password" value={password} onChange={handlePasswordChange} />
                        </Grid>

                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancelar</Button>
                    <Button onClick={handleCreateUser} color="primary">Continuar</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}   
