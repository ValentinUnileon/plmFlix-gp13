import * as React from "react";
import { BottomNavigation } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logoNetflix from "../images/logoNetflix.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <Link to="/login">
          <img src={logoNetflix} alt="logo Netflix" className={classes.logo} />
        </Link>
      </div>
      <div className={classes.row}>
        <Link to="/login" className={classes.item}>Terminos y Aviso de privacidad</Link>
        <Link to="/login" className={classes.item}>Ayuda</Link>
        <Link to="/login" className={classes.item}>Acerca de nosotros</Link>
      </div>

      <div className={classes.row}>
        <p style={{color: 'grey'}}>©2022-2023, PLMIndutries.com,Inc. o sus filiales</p>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    backgroundColor: "#000",
    width: "100%",
    height: "130px",
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
    display: "grid",
    gridTemplateRows: "repeat(3,1fr)",
    gridGap: "5px",
  },

  logo: {
    width: "100px",
    height: "auto",
    cursor: "pointer",
    marginTop: '30px',
  },

  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  item: {
    marginLeft: '2rem',
    color: 'red',
  },
});
