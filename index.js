console.log("Init script.");

const cool = require("cool-ascii-faces");

const express = require("express"); //carga el modulo que hemos intalado en una variable

const app = express();

const PORT = process.env.PORT || 16078;

app.use("/", express.static("./public")); 

app.get("/hello", (request, response) => {
    response.send("Hello from the server!")
}
);

app.get("/cool", (request, response) => {
    response.send(cool());
});

app.listen(PORT, () => {  //cuando esté escuchando, llama al metodo
    console.log(`Server running on the port ${PORT}!`);  //como la primera es asincrona, tenemos q ponerlo así
});


console.log("Finish setup");  
