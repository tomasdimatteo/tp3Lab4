//Para ejecutar el código se siguen los siguientes pasos:
//tsc (directorio del archivo .ts principal) -> Hará la conversión de .ts a .js
//node (directorio del archivo .js principal) -> Ejecutará el archivo principal con node.

import { HojaRuta } from "./class/partA/hojaRuta";
import { Detalle } from "./class/partA/detalle";
import { Vehiculo } from "./class/partA/vehiculo";

let vehiculo01 = new Vehiculo("ABC123","Ford","Fiesta");

let hojaRuta01 = new HojaRuta(new Date('08/16/2021 08:40'), 1, vehiculo01);

let detalle01 = new Detalle(10,80,17,55,20,55, hojaRuta01);
let detalle02 = new Detalle(80,120,15,12,20,10, hojaRuta01);
let detalle03 = new Detalle(120,400,8,12,22,9, hojaRuta01);

hojaRuta01.detalles.push(detalle01);
hojaRuta01.detalles.push(detalle02);
hojaRuta01.detalles.push(detalle03);

let hojaRuta02 = new HojaRuta(new Date('12/12/2021 12:52'), 2, vehiculo01);

let detalle04 = new Detalle(100, 160, 7, 21, 11, 57, hojaRuta02);
let detalle05 = new Detalle(60, 120, 10, 12, 6, 35, hojaRuta02);
let detalle06 = new Detalle(140, 170, 6, 10, 55, 7, hojaRuta02);

hojaRuta02.detalles.push(detalle04);
hojaRuta02.detalles.push(detalle05);
hojaRuta02.detalles.push(detalle06);

let hojaRuta03 = new HojaRuta(new Date('12/01/2022 10:35'), 3, vehiculo01);

let detalle07 = new Detalle(150, 200, 9, 15, 17, 32, hojaRuta03);
let detalle08 = new Detalle(80, 110, 8, 13, 14, 23, hojaRuta03);
let detalle09 = new Detalle(100, 180, 10, 22, 33, 8, hojaRuta03);

hojaRuta03.detalles.push(detalle07);
hojaRuta03.detalles.push(detalle08);
hojaRuta03.detalles.push(detalle09);

vehiculo01.hojaRutas.push(hojaRuta01);
vehiculo01.hojaRutas.push(hojaRuta02);
vehiculo01.hojaRutas.push(hojaRuta03);

let desde = new Date('08/01/2021 08:00');
let hasta = new Date('01/15/2022 23:00');

let kmRuta1 : number = hojaRuta01.calcularTotalKm();
let kmRuta2 : number = hojaRuta02.calcularTotalKm();
let kmRuta3 : number = hojaRuta03.calcularTotalKm();
let totalKm : number = vehiculo01.calcularTotalKmRecorridos(desde,hasta);

console.log('------------------------------------------')
console.log("Ruta 1: " + kmRuta1 + "\nRuta 2: " + kmRuta2 + "\nRuta 3: " + kmRuta3 + "\nTotal de km recorridos: " + totalKm);
console.log('------------------------------------------')