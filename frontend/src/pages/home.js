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
  const [filmList, setFilmList] = useState([
    { id: "1", name: "uno" },
    { id: "2", name: "dos" },
  ]);

  const [categoriesList, setCategoriesList] = useState([]);

  function click() {
    setOpen(true);
  }

  useEffect(()=>{

  },[])
  return (
    <Root className={classes.root}>
      <Header />
      <div className={classes.body}>
        <Banner />
        <VideoPop open={open}/>
        <div className={classes.categorias}>
          {categoriesList.map((categoria, index) => (
            <div className="container">
              <Categoria click={click} categoria={categoria} film={filmList} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Root>
  );
}
