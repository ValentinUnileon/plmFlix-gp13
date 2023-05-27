import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Button, TextField, Typography, Alert, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../cssComponents/adminStyle.css';

export default function MovieList() {

    const [movies, setMovies] = useState([]);
      
        useEffect(() => {
          axios.get('/administrador')
            .then(response => {
              setMovies(response.data);
            })
            .catch(error => {
              console.error('Error al buscar las peliculas:', error);
            });
        }, []);
      
        return (
          <div>
            <h2 className='textoLista'>Eliminar pelicula de la aplicacion</h2>
            <ul>
              {movies.map((movie) => (
                <li key={movie._id}>{movie.name}</li>
              ))}
            </ul>
          </div>
        );

}