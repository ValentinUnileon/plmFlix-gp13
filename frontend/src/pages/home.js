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


  const [categoriesList, setCategoriesList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [pendientesList, setPendientesList] = useState([]);
  const [vistoList, setVistoList] = useState([]);
  const [video, setVideo]=useState("");

  function click(id) {
    //console.log(id);
    setOpen(true);
  }

  useEffect(()=>{

    axios.get(getEndpoint(`/${user}/${profile}/home`))
    .then((response) => {

      setCategoriesList(response.data.categories);
      console.log("categorias")

      setLikeList(response.data.perfile.likeList);
      setPendientesList(response.data.perfile.pendienteList);
      setVistoList(response.data.perfile.vistoList);

    });

  },[])


  return (
    <Root className={classes.root}>
      <Header />
      <div className={classes.body}>
        <Banner />
        <VideoPop open={open}/>
        <div className={classes.categorias}>

        {console.log("visto mg", vistoList)}

          {likeList.length > 0 &&
            
                <div className="container">
                  <Categoria click={click} nombrecategoria={"Peliculas favoritas"} listaPelis={likeList} />
                </div>
          }
    
          {pendientesList  > 0 &&
              <div className="container">
                <Categoria click={click} nombrecategoria={"Peliculas pendientes"} listaPelis={pendientesList} />
              </div>
          }

          {vistoList  > 0 &&
              <div className="container">
                <Categoria click={click} nombrecategoria={"Peliculas vistas"} listaPelis={vistoList} />
              </div>
          }



        {categoriesList.map((categoria, index) => {
          if (categoria.videos.length > 0) {
            return (
              <div className="container">
                <Categoria click={click} nombrecategoria={categoria.title} listaPelis={categoria.videos}  />
              </div>
            );
          }
        })}

        </div>
      </div>
      <Footer />
    </Root>
  );
}
