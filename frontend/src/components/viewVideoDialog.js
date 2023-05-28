import * as React from "react";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import { Button, Dialog } from "@mui/material";
import "../cssComponents/viewVideo.css";
import icon from "../images/flecha-correcta.png";
import { useRef, useEffect, useState } from "react";
import { getEndpoint } from "../pages/const/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    height: "75px",
    width: "75px",
    left: "50px",
    top: "125px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: 700,
    borderRadius: "50%",
    backGroundColor: "rgba(51,51,51,0.5)",
    display: "block",
    transform: "rotate(90deg)",
  },
  "& button:hover": {
    color: "red",
    backGroundColor: "blue",
  },
});

export default function ViewFilms({
  user,
  profiles,
  videoURL,
  videoID,
  listaVistos,
}) {
  const [duration, setDuration] = useState(0);
  const [SecondsViews, setSecondsViews] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef();
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [vistoList, setVistoList] = useState([]);
  const [visto, setVisto] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  const handleDuration = (videoDuration) => {
    setDuration(videoDuration);
  };

  useEffect(() => {
    axios
      .get(getEndpoint(`/${user}/${profiles}/vistoList`))
      .then((response) => {
        const vistoList = response.data;
        if (Array.isArray(vistoList) && vistoList.length === 1) {
          setVideoCurrentTime(vistoList[0].currentTime);
          console.log(videoCurrentTime);
        } else if (Array.isArray(vistoList) && vistoList.length > 1) {
          const item = vistoList[vistoList.length - 2];
          if (item && item.currentTime !== undefined) {
            const currentTime = item.currentTime;
            setVideoCurrentTime(currentTime);
            console.log(videoCurrentTime);
          } else {
            console.log("currentTime no está definido");
          }
        } else {
          console.log(
            "vistoList no tiene suficientes elementos" + vistoList.length
          );
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  /* Obtiene los segundos vistos */
  const handleProgress = (progress) => {
    //const vidDuration = duration;
    const currentTime = progress.playedSeconds;
    // remainingTime = vidDuration - currentTime;
    setSecondsViews(currentTime);
  };

  /* Inicia el video en el segundo timeStart */
  const onReady = React.useCallback(() => {
    if (!isReady) {
      /* Duracion - tiempo Restante */
      const timeStart = videoCurrentTime;
      playerRef.current.seekTo(timeStart, "seconds");
    }
  }, [isReady]);

  /*
  actualiza los sec vistos de cada video de cada usuario
  y me regresa a home
  */
  function click() {
    /*axios
      .put(getEndpoint(`/${user}/${profiles}/visto_add`), {
        videoId: videoID,
        currentTime: SecondsViews,
      })
      .then(() => {
        const updatedVistoList = [
          { _id: videoID, videoUrl: videoURL, currentTime: SecondsViews },
          ...listaVistos,
        ];
        setVistoList(updatedVistoList);
        setVisto(true);
      })
      .catch((error) => {
        console.log(error);
      });
      */
  }

  return (
    <Root className={classes.root}>
      <div className="body">
        <div className="video-back">
          <ReactPlayer
            ref={playerRef}
            url={videoURL}
            controls
            muted
            playing={isPlaying}
            onDuration={handleDuration}
            onProgress={handleProgress}
            onReady={onReady}
            width="50%"
            height="50%"
          />
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

      <div className="button">
        <Button>
          <img src={icon} height="50px" width="50px" />
        </Button>
      </div>
    </Root>
  );
}
