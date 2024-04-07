const fs = require('fs')

const Registrar = (nombre, edad, tipodeAnimal, color, enfermedad) => {
    
    const nuevaCita = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
   
    nuevaCita.push({ nombre, edad, tipodeAnimal, color, enfermedad })
    
    fs.writeFileSync('citas.json', JSON.stringify(nuevaCita))
    console.log("Cita Registrada Con Exito")

}

const Leer = () => {
    const leerCitas = fs.readFileSync("citas.json", "utf-8")
    console.log(leerCitas)

}

module.exports = { Registrar, Leer }


