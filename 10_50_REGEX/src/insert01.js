/*
   Insertamos una serie de valores sobre tarjetas gráficas.
    Usaremos una nueva colección llamada "graficas".
    
    Los insertaremos mediante la función "insertMany".
    Estructura: {
        nombre: cadena (nombre de la gráfica)
        vram: (cantidad de memoria VRAM)
        ensambladora: cadena (Empresa ensambladora)
        fecha: date (Fecha de salida)
        precio: int (Precio en euros)
        tdp: int (Consumo en Watts)
    }
*/
db.graficas.insertMany([
    { nombre: "GTX 950", vram:[2, 4], ensambladora: "MSI", fecha: new Date("2015, 8, 17"), precio: 160, tdp: 90},
    { nombre: "R9 Fury", vram:[4, 8], ensambladora: "Sapphire", fecha: new Date("2009, 5, 01"), precio: 340, tdp: 300},
    { nombre: "GTX 1060", vram:[3, 6], ensambladora: "Gigabyte", fecha: new Date("2015, 8, 17"), precio: 220, tdp: 150},
    { nombre: "RX 6900XT", vram:[12, 16], ensambladora: "AMD", fecha: new Date("2020, 10, 28"), precio: 1000, tdp: 300},
    { nombre: "GTX 580", vram:[1, 2], ensambladora: "Zotac", fecha: new Date("2011, 8, 17"), precio: 500, tdp: 250},
    { nombre: "HD 6870", vram:[1, 2], ensambladora: "Asus", fecha: new Date("2010, 10, 21"), precio: 200, tdp: 150},
    { nombre: "GTX 285", vram:[1, 2], ensambladora: "Nvidia", fecha: new Date("2008, 12, 23"), precio: 200, tdp: 200},
    { nombre: "GTX 770", vram:[2, 4], ensambladora: "Evga", fecha: new Date("2013, 6, 28"), precio: 500, tdp: 250},
    { nombre: "RTX 2080 Super", vram:[8, 12], ensambladora: "Nvidia", fecha: new Date("2019, 11, 22"), precio: 800, tdp: 250},
    { nombre: "R7 280", vram:[3, 6], ensambladora: "MSI", fecha: new Date("2015, 8, 17"), precio: 200, tdp: 200},
    { nombre: "GT 1030", vram:[1, 3], ensambladora: "Asus", fecha: new Date("2017, 5, 17"), precio: 120, tdp: 30},
    { nombre: "RX 570", vram:[4, 8], ensambladora: "Sapphire", fecha: new Date("2017, 4, 18"), precio: 160, tdp: 150},
    { nombre: "GTX 1650 Super", vram:[4, 6], ensambladora: "Zotac", fecha: new Date("2019, 11, 22"), precio: 160, tdp: 100},
    { nombre: "GT 620", vram:[1, 2], ensambladora: "Evga", fecha: new Date("2012, 5, 15"), precio: 70, tdp: 50},
    { nombre: "HD 2400 PRO", vram:[1, 2], ensambladora: "AMD", fecha: new Date("2010, 6, 28"), precio: 160 , tdp: 30}
])

/* Insertamos los documentos concretados arriba y comenzamos a realizar consultas (querys) 

 Atención: Los recursos utilizados en cada una de las siguientes Querys vendrán explicados en el documento pdf adjunto.

 */
/* Con esta primera consulta nos mostrará aquellas gráficas que no cumplan ambas condiciones de tener un precio entre 150 y 300 euros y la de un tdp mayor o igual a 90*/
db . graficas . find ({ $nor: [{  precio: {  $in: ["150","300"] }}, { tdp:{  $gte: 90} } ] } )