import * as React from "react";
import { styled } from "@mui/material/styles";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Categoria from "../components/category";
import ReactPlayer from "react-player";


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

export default function ViewFilms({user, profiles, videoURL, videoID}) {
    
  return (
    <Root className={classes.root}>
      <div className="body">
        <div className="video-back">
          <ReactPlayer
            url= {videoURL} 
            controls
            playing
            muted
            width="100%"
            height="100%"
          />

          <Button></Button>
        </div>
      </div>
    </Root>
  );
}
