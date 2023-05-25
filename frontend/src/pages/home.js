import * as React from "react";
import { styled } from '@mui/material/styles';
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Categoria from "../components/category";
import VideoPop from "../components/videoPop";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {getEndpoint} from './const/const';

import {Button} from "@mui/material";

import axios from "axios";

const PREFIX = 'home';

const classes = {
  root: `${PREFIX}-root`,
  categorias: `${PREFIX}-categorias`
};

const Root = styled('div')({
  [`&.${classes.root}`]: {
    backgroundColor: "#111",
    width: "100%",
    height: "100%",
  },

  [`& .${classes.categorias}`]: {
    display: "grid",
    gridAutoRows: "repeat(2, auto)",
    gridGap: "30px",
    margin: '30px 0 30px 0',
  },
});

export default function Home() {
  const { user, profile } = useParams();
  const [open, setOpen] = useState(false);

  const [categoriesList, setCategoriesList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [pendientesList, setPendientesList] = useState([]);
  const [vistoList, setVistoList] = useState([]);
  const [video, setVideo] = useState("");

  function click(id) {
    setVideo(id);
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);

  };

  useEffect(()=>{
    axios.get(getEndpoint(`/${user}/${profile}/home`))
    .then((response)=>{
      setCategoriesList(response.data.categories);
      setLikeList(response.data.perfile.likeList);
      setPendientesList(response.data.perfile.pendienteList);
      setVistoList(response.data.perfile.vistoList);
    });
  },[profile])
  return (
    <Root className={classes.root}>
      <Header />
      <div className={classes.body}>
        <Banner />
        <VideoPop open={open} video={video} handleClose={handleClose} likeList={likeList} pendientesList={pendientesList} vistoList={vistoList}/>
        <div>
          {categoriesList.map((categoria)=>(
            <div>
              <p>{categoria.title}</p>
              {categoria.videos.map((video)=>(
                <Button onClick={() => click(video._id)}>{video._id}</Button>
              ))}
            </div>
          )
          )}
        </div>
      </div>
      <Footer />
    </Root>
  );
}
