console.log("Init script.");


//const express = require("express"); //carga el modulo que hemos intalado en una variable
import express from "express";
import {loadBackend} from "./src/back/index.js";

const app = express();
const PORT = process.env.PORT || 16078;

app.use(express.json());

app.use("/", express.static("./public")); 

loadBackend(app);

app.listen(PORT, () => {  //cuando esté escuchando, llama al metodo
    console.log(`Server running on the port ${PORT}!`);  //como la primera es asincrona, tenemos q ponerlo así
});


console.log("Finish setup");  


