import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button, CardContent, Card, CardActions,CardMedia,CardHeader, Typography
} from "@mui/material";

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";

import { styled } from "@mui/system";


import React, {
    useState,
    useEffect
} from "react";
import axios from "axios";
import {getEndpoint} from '../pages/const/const';



export default function VideoPop({open, video, handleClose, likeList, pendientesList, vistoList}) {
    const [videoTitle, setVideoTitle] = useState("");
    const [videoDes, setVideoDes] = useState("");
    const [videoThum, setVideoThum] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [videoCat, setVideoCat] = useState("");

    const [gusta, setGusta] = useState(false);
    const [pendiente, setPendiente] = useState(false);
    const [visto, setVisto] = useState(false);
    const [minuto, setMinuto] = useState();




    useEffect(() => {
        axios.get(getEndpoint(`/${video}`))
        .then((response)=>{
            setVideoTitle(response.data.title);
            setVideoDes(response.data.description);
            setVideoThum(response.data.thumbnailUrl);   
            setVideoUrl(response.data.videoUrl);
            setVideoCat(response.data.categorie);
        });

        if(likeList.includes(video))
            setGusta(true);
        
        if(pendientesList.includes(video))
            setPendiente(true);

        if(vistoList.includes(video)){
            setVisto(true);
            setMinuto(vistoList.find(item => item.video === video).currentTime);
        }
            
    }, [video]);

    //gestion de botones
    const clickMegusta = () =>{
        alert("gusta");
        if(gusta){//ya en la lista(delete)

        }else{//boton blanco(put)

        }

    }

    const clickPendiente = () =>{
        alert("pendiente");
        if(pendiente){//ya en la lista(delete)

        }else{//boton blanco

        }
    }

    const clickReproducir = () =>{
        alert("reproducir");
        if(!visto){//añadir a la lista (put)

        }
    }


    return(
        <Dialog open={open} onClose={handleClose} style={{boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"}}>
            <Card style={{ maxHeight: 800,  overflow: "auto",  backgroundColor: "rgb(24, 24, 24)" }}>
                <CardHeader 
                    style={{color: "white"}} 
                    title={videoTitle}
                    action={
                        <IconButton aria-label="settings" style={{color: "white"}} onClick={handleClose}>
                          <CloseIcon />
                        </IconButton>
                      }
                />
                <CardMedia
                    component="img"
                    height="500"
                    image={videoThum}
                />
                <Button variant="contained" startIcon={<PlayArrowIcon />} style={{color: "black", backgroundColor: "white"}} onClick={clickReproducir} >
                    Reproducir
                </Button>
                <IconButton aria-label="add to favorites" style={{color: "white"}} onClick={clickMegusta}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="add to pendientes" style={{color: "white"}} onClick={clickPendiente}>
                    <AddIcon />
                </IconButton>
                <CardContent style={{color: "white"}}>
                    <Typography variant="h5">{videoCat}</Typography>
                    
                    <br/>
                    <Typography variant="body">{videoDes}</Typography>
                </CardContent>
            </Card>
        </Dialog>
    );
}