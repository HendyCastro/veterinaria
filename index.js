const { Registrar, Leer } = require("./operaciones.js")
const data = process.argv.slice(2)

 if (data [0] === "leer") {
    Leer()
}
else if (data[0] === "registrar"){
    Registrar(data[1],data[2],data[3],data[4],data[5])
} else {
    console.log ("funcion no encontrada")
}

