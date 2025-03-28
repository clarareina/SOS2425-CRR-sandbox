import dataStore from "nedb";

const BASE_API = "/api/v1";

let db = new dataStore();

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


function loadBackend(app){
    app.get(BASE_API+"/contacts", (request, response) => {
        console.log("New GET to /contacts");
        response.send(JSON.stringify(contacts)); //lo que le envio al cliente
    });
    
    app.post(BASE_API+"/contacts", (request, response) => {
        console.log("New POST to /contacts");
        let newContact = request.body;  //lo que hay dentro de los datos que me han mandado en la petición
        contacts.push(newContact);
        response.sendStatus(201) //lo que le envio al cliente
    }); 
    
    app.put(BASE_API + "/contacts/:phone", (request, response) => {
            let phone = request.params.phone;
            console.log(`New PUT to /contacts/${phone}`);
        
            const search = contacts.filter(x => x.phone == phone);
    
            if (search.length > 0){
                console.log("Datos actuales encontrados:", search);
                let data = request.body;
                post.findOneAndUpdate(phone, data, {new: true});
    
                if (!data.name || !data.phone) {
                    response.status(400).json({message : "Faltan datos requeridos"});
                }
                else {
                    
                    response.status(200).json({message : "Datos actualizados"});
                }
            }
            else{   
                return response.status(404).json({error: `No se encuentran datos de ${phone}`});
            }
        
        });
    
    
}

export{loadBackend}