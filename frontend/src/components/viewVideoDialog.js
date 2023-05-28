import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Categoria from "../components/category";
import ReactPlayer from "react-player";
import { IconButton } from '@mui/material';
import {DialogContent} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';


import {Button} from "@mui/material";
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

export default function ViewFilms({user, profiles, videoUrl, videoId, tiempo, setOpen}) {  
  const onClose = () =>{
      setOpen(false);
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
            url={videoUrl}
            playing
            controls
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0,}}
          />
        </div>
      </DialogContent>
    </div>
  );
}
