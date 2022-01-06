import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link} from "react-router-dom";
import "../styles/barraMenu.css"

export default function BarraMenu(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return(
        <nav>
        <Box sx={{ width: '100%', bgcolor: 'black'}}>
          <Tabs value={value} onChange={handleChange}
           variant="scrollable"
           scrollButtons="auto"
           aria-label="scrollable auto tabs example">
            <Tab label="Sobre MI " sx={{color:'white'}} component={Link} to="/sobreMi" />
            <Tab label="Servicios"  sx={{color:'white'}} component={Link} to="/servicios" />
            <Tab label="Educacion"  sx={{color:'white'}} component={Link} to="/educacion" />
            <Tab label="Proyectos" sx={{color:'white'}} component={Link} to="/proyectos" />
            <Tab label="Contacto" sx={{color:'white'}} component={Link} to="/contacto" />
          </Tabs>
        </Box>
    </nav>
    )
}