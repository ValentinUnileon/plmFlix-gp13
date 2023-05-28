import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Toolbar, AppBar, Avatar} from '@mui/material';
import logoNetflix from "../images/logo.png"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const PREFIX = 'header';

const classes = {
  root: `${PREFIX}-root`,
  logo: `${PREFIX}-logo`,
  transparent: `${PREFIX}-transparent`,
  avatar: `${PREFIX}-avatar`,
  toolbar: `${PREFIX}-toolbar`,
  item: `${PREFIX}-item`
};

const Root = styled('div')({
  
  [`& .${classes.root}`]: {
    backgroundColor: '#000',
    height: "50px",
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },

  [`& .${classes.logo}`]: {
    width: '100px',
    cursor: 'pointer',
  },
  [`& .${classes.transparent}`]: {
    backgroundColor: 'transparent',
  },
  [`& .${classes.avatar}`]: {
    cursor:'pointer',
  },
  [`& .${classes.toolbar}`]: {
    width: '100%',
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0px 15px 0px',
  },
  [`& .${classes.item}`]: {
    color: 'white',
  }
});


export default function Header(){

  const [show, setShow] = useState(false);
  
  const hideHeader = () =>{
    if(window.scrollY < 15){
      setShow(false);
    }else{
      setShow(true);
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  },[])


  return (
    <Root className={`${classes.root} ${!show && classes.transparent}`} elevation={0}>
      <div className={classes.toolbar}>
        <Link to="/login">
          <img src={logoNetflix} alt="logo Netflix" className={classes.logo} />
        </Link>
        <Link to="/profiles" className={classes.item}>
          Peliculas
        </Link>
        <Link to="/profiles" className={classes.item}>
          Series
        </Link>
        <Link to="/profiles" className={classes.item}>
          <Avatar className={classes.avatar}></Avatar>
        </Link>
      </div>
    </Root>
  );
}



