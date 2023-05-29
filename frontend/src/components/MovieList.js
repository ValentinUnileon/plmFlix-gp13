import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Button, TextField, Typography, Alert, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../cssComponents/adminStyle.css';
import { getEndpoint } from '../pages/const/const';
import NewMovieDialog from './NewMovieDialog';


export default function MovieList() {

    const [movies, setMovies] = useState([]);

    const handleDeleteMovie = (movieId) => {

      axios.delete(getEndpoint(`/administrador/movies/${movieId}`))
        .then((response) => {

          setMovies(movies.filter((movie) => movie._id !== movieId));
        })
        .catch((error) => {
          console.error('Error al eliminar la película:', error);
        });
    };
      
        useEffect(() => {
          axios.get(getEndpoint('/administrador/movies'))
          .then((response)=>{
            setMovies(response.data);
          });
        }, [movies]);

        const handleCreateMovie = (movie) => {
          setMovies([...movies, movie]);
        };
      
        return (
          <div>
              <Typography variant="h5" frontWeight = 'bold' style={{ fontFamily: 'Palatino' }} color='white'>Eliminar pelicula de la aplicacion</Typography>
            
            {movies.map((movie) => (
              <Box key={movie._id} marginBottom={1}>
                <Button variant="outlined" onClick={() => handleDeleteMovie(movie._id)} >
                  {movie.title}
                </Button>
              </Box>
            ))}

            <NewMovieDialog onCreateMovie={handleCreateMovie}/>
           
          </div>
        );

}