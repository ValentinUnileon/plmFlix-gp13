import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import { IconButton } from '@mui/material';
import { DialogContent } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import { getEndpoint } from "../pages/const/const";
import axios from "axios";

const PREFIX = "viewFilms";

const classes = {
  root: `${PREFIX}-root`,
  container: `${PREFIX}-container`,
};

const Root = styled("div")({
  [`&.${classes.root}`]: {
    backgroundColor: "#111",
    width: "100%",
    height: "100%",
  },

  [`& .${classes.container}`]: {
    margin: "10px 10px 10px 10px",
  },
});

export default function ViewFilms({ user, profiles, videoUrl, videoId, setOpen }) {
  const [tiempo, setTiempo] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
    axios.get(getEndpoint(`/${user}/${profiles}/visto/${videoId}`))
      .then((response) => {
        setTiempo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [videoUrl, user, profiles, videoId]);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(tiempo);
    }
  }, [tiempo]);

  const handleProgress = () => {
    const newTime = playerRef.current.getCurrentTime();
    setTiempo(newTime);
  };

  const onClose = () => {
    axios.put(getEndpoint(`/${user}/${profiles}/visto`), { videoId: videoId, tiempo: tiempo })
      .then(() => {
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          {/* 16:9 aspect ratio, adjust padding-top if needed */}
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            playing
            controls
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            onProgress={handleProgress}
          />
        </div>
      </DialogContent>
    </div>
  );
}
