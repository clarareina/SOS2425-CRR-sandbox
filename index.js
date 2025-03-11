console.log("Init script.");

const express = require("express"); //carga el modulo que hemos intalado en una variable
const app = express();
const PORT = process.env.PORT || 16078;
const BASE_API = "/api/v1";

app.use("/", express.static("./public")); 

//api contactos 
let contacts = [
    {
        name : "peter",
        phone : 1234
    },
    {
        name : "pablo",
        phone : 7890
    }
]


app.get(BASE_API+"/contacts", (request, response) => {
    console.log("New GET to /contacts");
    response.send(JSON.stringify(contacts));
});

app.listen(PORT, () => {  //cuando esté escuchando, llama al metodo
    console.log(`Server running on the port ${PORT}!`);  //como la primera es asincrona, tenemos q ponerlo así
});


console.log("Finish setup");  
