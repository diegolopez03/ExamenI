// Importar módulos necesarios 
//Express
const express = require("express");

//Handlebars
const exphbs = require("express-handlebars");







// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");



// Ruta /
app.get("/", (req, res, next) => {
  res.render("formulario_interes");
});



// Inicializar el servidor en un puerto
app.listen(5000, () => {
    console.log("Servidor ejecutándose en el puerto 5000");
  });
