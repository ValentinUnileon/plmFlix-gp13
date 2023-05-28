
import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Button, TextField, Typography, Toolbar, AppBar, Avatar} from '@mui/material';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../cssComponents/banner.css'
import { useState,useEffect } from 'react';
import axios from "axios";
import { getEndpoint } from "../pages/const/const";
import videoPop from "./videoPop"
import ViewFilms from './viewVideoDialog';
import Slide from '@mui/material/Slide';
import {Dialog} from '@mui/material';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PREFIX = 'banner';


const classes = {
  root: `${PREFIX}-root`,
  buttons: `${PREFIX}-buttons`,
  content: `${PREFIX}-content`
};

const Root = styled('div')({
    [`& .${classes.root}`]: {
      position: 'relative',
      width: '100%',
      height: '440px',
      objectFit: 'contain',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },

    [`& .${classes.buttons}`]: {
      "& button": {
        left: '75px',
        top: '300px',
        cursor: 'pointer',
        color: '#fff',
        fontWeight: 700,
        borderRadius: '5px', 
        padding: 'spacing(1,4,1,4)',
        marginRight: '1rem',
        backGroundColor: 'rgba(51,51,51,0.5)',
      } ,
      "& button:hover": {
        color: '#000',
        backGroundColor: '#e6e6e6',
      }, 
    },

    [`& .${classes.content}`]: {
      position: 'relative',
      left: '50px',
      top: '10px',
    },

    videoBack: {
      height: '440px',
      with: '100%',
      objectFit: 'cover',
    }

});

export default function Banner({categoriesList, user, perfil, pendientesList, setPendientesList, video}){
  const [videoUrl, setVideoUrl] = useState("");
  const [openV, setOpenV] = React.useState(false);
    /* funcion onclick que lleve a la pagina de ver el video del banner*/
  
    /* funcion para poner video del banner  */ 
    console.log(categoriesList);
    useEffect(() => {
      if (categoriesList.length > 0) {
        setVideoUrl(categoriesList[0].videos[1].videoUrl);
      }
    }, [categoriesList]);

    console.log(videoUrl);

    const clickReproducir = () => {
      setOpenV(true);
    };
  
    const handleCloseV = () => {
      setOpenV(false);
    };

  return (
    <Root className="video-background"> 
    <div className={classes.videoBack}>
    <ReactPlayer
            url= {videoUrl} 
            playing
            muted
            width="100%"
            height="440px"
          />
    </div>
      <div className="video-overlay">
        <div className={classes.buttons}>
          <Button onClick={clickReproducir}>Play</Button>
        </div>
      </div>

      <div>
      <Dialog
        fullScreen
        open={openV}
        onClose={handleCloseV}
        TransitionComponent={Transition}
      >
        {/* comp Edu */}
        <ViewFilms user= {user} profiles={perfil} videoURL={videoUrl} videoID={video} handleCloseV={handleCloseV}></ViewFilms>
      </Dialog>
      </div>
      
    </Root>
  );
}

