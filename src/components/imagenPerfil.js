import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "../styles/perfil.css"
import { Box, Grid } from "@mui/material";


export default function ImagenPerfil() {
  return (
    <div className='imagenPerfil_1'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Stack direction="row" display="flex" justifyContent="center" alignItems="center" spacing={2}>
            <Avatar alt="Jose Armando" src={require("../assets/Armando.jpg")} sx={{ width: 100, height: 100  }}/>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1>Jose Armando Roman Torres </h1>
          <h2> Desarrollador Java Full Stack</h2>
        </Grid>
        
      </Grid>
      </Box>
      
      
    </div>
    
  );
}