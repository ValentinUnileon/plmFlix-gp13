import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import { getEndpoint } from '../pages/const/const';


export default function NewMovieDialog(movies={movies}, setMovies={setMovies}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [likes, setLikes] = useState('');
    const [categorie, setCategorie] = useState('');

    const [open, setOpen] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleThumbnailUrlChange = (event) => {
        setThumbnailUrl(event.target.value);
    };

    const handleVideoUrlChange = (event) => {
        setVideoUrl(event.target.value);
    };

    const handleLikesChange = (event) => {
        const value = event.target.value;
        if (!isNaN(value)) {
            setLikes(value);
        } else {
            setLikes(0);
        }
    };
    
    const handleCategorieChange = (event) => {
        setCategorie(event.target.value);
    };

    const handleOpenDialog = () => {
        setOpen(true);
    };
    
      const handleCloseDialog = () => {
        setOpen(false);
    };


    const handleCreateMovie = () => {
        let payload = {
            title: title,
            description: description,
            thumbnailUrl: thumbnailUrl,
            videoUrl: videoUrl,
            likes: likes,
            categorie: categorie,
        };

        axios.post(getEndpoint('/administrador/movies'), payload)
        .then((response)=> {
          console.log("Éxito al crear pelicula");
        })
        .catch((error)=>{
          console.log(getEndpoint('/administrador/movies'), payload);
          console.log(error);
          console.log("ERROR AL REGISTRAR PELICULA");
        
        });

        handleCloseDialog();
    };

    return (

        <div>
            <Button variant="contained" color="primary" onClick={handleOpenDialog}>Crear nueva pelicula</Button>

            <Dialog open={open} onClose={handleCloseDialog}>

                <DialogTitle>Crear nueva pelicula</DialogTitle>

                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField label="Title" fullWidth value={title} onChange={handleTitleChange} />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField label="Description" fullWidth value={description} onChange={handleDescriptionChange} />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <TextField label="URL de la miniatura" fullWidth value={thumbnailUrl} onChange={handleThumbnailUrlChange} />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField label="URL del video" fullWidth value={videoUrl} onChange={handleVideoUrlChange} />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField label="Likes" fullWidth value={likes} type="number" onChange={handleLikesChange} />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField label="Categoría" fullWidth value={categorie} onChange={handleCategorieChange} />
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancelar</Button>
                    <Button onClick={handleCreateMovie} color="primary">Continuar</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}   
