let titulos = [
    { id:1,
      cargo: "Java FullStack",
      fecha: "Ago/2021-Dic/2021",
      organizacion: "Generations Mexico",
      habilidades: "Gestion del tiempo y metodologias agiles",
      imagen: require("../assets/Generations.jpg"),
    },
    { id:2,
      cargo: "Estudiante Python",
      fecha: "Ago/2019-Dic/2020",
      organizacion: "Instituto de Fisica",
      habilidades: "Gestion del tiempo y metodologias agiles",
      imagen:  require("../assets/boletines-del-instituto-de-fisica.jpg")
    },
    { id:3,
      cargo: "Lincenciado en Tecnologia",
      fecha: "Ago/2019-Dic/2020",
      organizacion: "Fes Cuatitlan",
      habilidades: "Gestion del tiempo y metodologias agiles",
      imagen:  require("../assets/683px-Escudo-UNAM-escalable.svg.png")
    }
  ];
  
  export function getInfoEducacion() {
    return titulos;
  }