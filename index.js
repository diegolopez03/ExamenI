// LINK REPOSITORIO GITHUB: https://github.com/diegolopez03/ExamenI.git
// Importar módulos necesarios 
//Express
const express = require("express");

//Handlebars
const exphbs = require("express-handlebars");

// Body parser
const bodyParser = require("body-parser");

// Funcion la función 
const { calculoInteres } = require("./calculoInteres");



// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Implementar body parser
app.use(bodyParser.urlencoded({ extended: true }));


// Ruta /
app.get("/", (req, res, next) => {
  res.render("formulario_interes");
});

// Ruta /interes
app.post("/interes", (req, res, next) => {
 
  const { monto, periodo, interes } = req.body;

  const filas = calculoInteres(monto, periodo, interes);

  res.render("resultado_interes", { filas });
});



// Inicializar el servidor en un puerto
app.listen(5000, () => {
    console.log("Servidor ejecutándose en el puerto 5000");
  });
