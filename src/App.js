import {Outlet } from "react-router-dom";
import React from "react";
import { Box, Grid } from "@mui/material";
import ImagenPerfil from "./components/imagenPerfil";
import BarraMenu from "./components/barraMenu";
import "./styles/App.css"


export default function App() {
  return (
    
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
        <ImagenPerfil></ImagenPerfil>
        </Grid>
        <Grid item xs={0} sm={3}>
          {/* espaciado */}
        </Grid>
        <Grid item xs={12} sm={6}>
        <BarraMenu></BarraMenu>         
        </Grid>
          {/* espaciado */}
        <Grid item xs={0} sm={3}>
        </Grid>
      </Grid>
    </Box>
      
      <Outlet></Outlet>
    </div>
  );
}