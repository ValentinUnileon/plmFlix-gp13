import * as React from "react";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import {Button} from "@mui/material";
import '../cssComponents/viewVideo.css';
import icon from "../images/flecha-correcta.png";
import { useRef,useEffect,useState } from "react";
import { getEndpoint } from "../pages/const/const";
import axios from "axios";

const PREFIX = "viewFilms";

const classes = {
  root: `${PREFIX}-root`,
  container: `${PREFIX}-container`,
};

const Root = styled("div")({
  [`&.${classes.root}`]: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },

  [`& .${classes.container}`]: {
    margin: "10px 10px 10px 10px",
  },

  button: {
    height: '75px',
    width: '75px',
    left: '50px',
    top: '125px',
    cursor: 'pointer',
    color: '#fff',
    fontWeight: 700,
    borderRadius: '50%', 
    backGroundColor: 'rgba(51,51,51,0.5)',
    display: 'block',
    transform: 'rotate(90deg)',
    }, 
    "& button:hover": {
      color: 'red',
      backGroundColor: 'blue',
    },  

});

export default function ViewFilms({user, profiles, videoURL, videoID}) {
  const [duration, setDuration] = useState(0);
  const [SecondsViews, setSecondsViews] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef();
  const [videoCurrentTime, setVideoCurrentTime] = useState();
  const [vistoList, setVistoList] = ([]);
  


  useEffect(() => {
    
  console.log("video" + videoID);

    axios.get(getEndpoint(`/${user}/profiles`)).then((response) => {
      console.log(response);
      //console.log(response.data.user.vistoList);
    })
  })


  const handleDuration = (videoDuration) => {
    setDuration(videoDuration);
  }
  
  


  /* Calcular el tiempo restante de video */
  const handleProgress = (progress) => {
    //const vidDuration = duration;
    const currentTime = progress.playedSeconds;
    // remainingTime = vidDuration - currentTime;
    setSecondsViews(currentTime);
  };

   const onReady = React.useCallback(() => {
    if(!isReady){
      /* Duracion - tiempo Restante */
      const timeStart = 40;
      playerRef.current.seekTo(timeStart, "seconds");
    }
  }, [isReady])

  /* onClick() 
  guarda los sec remaining de cada video de cada usuario
  y me regresa a home
  usar profile y videoID para ello 
  */

  
  return (
    <Root className={classes.root}>
      <div className="body">
        <div className="video-back">
          <ReactPlayer
            ref = {playerRef}
            url={videoURL} 
            controls
            muted
            playing = {isPlaying}
            onDuration={handleDuration}
            onProgress={handleProgress}
            onReady={onReady}
            width="50%"
            height="50%"
          />
        </div>
        <div className="button">
            <Button>
              <img src={icon} height="50px" width="50px" />
              {/*
              funcion onClick();
              */ }
            </Button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <p color="green"> duracion del video: {duration} segundos</p>
        <p color="green"> Has visto del video: {SecondsViews} segundos</p>
      </div>
    </Root>
  );
}
