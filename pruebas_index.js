
function log(m){
    console.log(m);
}


let a = [1, 2, 3, 4, 5];
//log (a);


let sum = a.reduce((a, n) => {
    log(`${a}, ${n}`);
    return a + n;
}, 0);

//log(sum);
// a.forEach(log) = a.forEach((n) => log(n))

let contactlist = [{
    name : "Pepe",
    phone : 12345
}, {
    name : "Luis",
    phone : 56789
}];

log(contactlist);
log(JSON.stringify(contactlist));   // convertir Objeto en cadena


let x = JSON.parse('{"nombre": "Juan", "edad": 30, "ciudad": "Madrid"}');  // convertur cadena a Objeto
log(x.nombre);

