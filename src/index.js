import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Contacto from "./components/contacto";
import Educacion from "./components/educacion";
import Proyectos from "./components/proyectos";
import Servicios from "./components/servicios";
import SobreMI from "./components/sobreMi"
import "./styles/index.css"
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} >
        <Route path="servicios" element={<Servicios />} />
        <Route path="sobreMi" element={<SobreMI></SobreMI>}></Route>
        <Route path="educacion" element={<Educacion></Educacion>}></Route>
        <Route path="proyectos" element={<Proyectos></Proyectos>}></Route>
        <Route path="contacto" element={<Contacto></Contacto>}> </Route>
        <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
        <Route></Route>
        <Route></Route>
      </Route>      
    </Routes>
  </BrowserRouter>,
  rootElement
);
