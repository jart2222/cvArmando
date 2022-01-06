import { getInfoEducacion } from "../data/infoEducacion"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack } from "@mui/material";
import "../styles/educacion.css"

export default function Educacion(){
    let titulos =getInfoEducacion();
    return(
        <div className="educacionClase">
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={1}>
                    {titulos.map(titulo =>(

                    <Grid key={titulo.id} item xs={12} sm={4}>
                        <Stack direction="row" display="flex" justifyContent="center" alignItems="center" spacing={2}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                component="img"
                                height="300"
                                image={titulo.imagen}
                                alt={titulo.organizacion}
                                />
                                <CardContent  className="cardMedia">
                                <Typography gutterBottom variant="h5" component="div">
                                    {titulo.cargo} 
                                </Typography>
                                <Typography gutterBottom variant="p" component="div">
                                    {titulo.fecha}
                                </Typography>
                                <Typography variant="body2">
                                    {titulo.habilidades}
                                </Typography>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>

                    ))}
                </Grid>

            </Box>

        

        </div>
    )

}