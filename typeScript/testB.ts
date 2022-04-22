import { Articulo } from "./class/partB/articulo";
import { Cliente } from "./class/partB/cliente";
import { DetalleFactura } from "./class/partB/detalleFactura";
import { Factura } from "./class/partB/factura";

let cliente01 = new Cliente(1234,'Monotributista',20123456788);

let factura01 = new Factura("A",1,100,'E',0,0,new Date("01/12/2021 13:00"),cliente01);

let artLeche = new Articulo(123,"Leche",110,"litro");
let artQueso = new Articulo(234,"Queso",260,"gramo");
let artPan = new Articulo(345,"Pan",100,"gramo");
let artFideos = new Articulo(678,"Fideos",95,"gramo");
let artCerveza = new Articulo(891,"Cerveza",250,"litro");

let detArt01 = new DetalleFactura(2,0,artLeche,factura01);
let detArt02 = new DetalleFactura(4,0,artCerveza,factura01);

factura01.detallesFacturas.push(detArt01);
factura01.detallesFacturas.push(detArt02);

let factura02 = new Factura("B",2,200,'CC',0, 0,new Date("01/24/2021 14:56"),cliente01);

let detArt03 = new DetalleFactura(4,0,artFideos,factura02);
let detArt04 = new DetalleFactura(1,0,artQueso,factura02);

factura02.detallesFacturas.push(detArt03);
factura02.detallesFacturas.push(detArt04);

let factura03 = new Factura("B",2,200,'C',0,0,new Date("01/24/2021 14:56"),cliente01);

let detArt05 = new DetalleFactura(2,0,artPan,factura03);
let detArt06 = new DetalleFactura(6,0,artCerveza,factura03);

factura03.detallesFacturas.push(detArt05);
factura03.detallesFacturas.push(detArt06);

cliente01.facturas.push(factura01);
cliente01.facturas.push(factura02);
cliente01.facturas.push(factura03);

cliente01.facturas.forEach(factura => {
    factura.detallesFacturas.forEach(detalle => {
        detalle.calcularSubTotal()
    })
    factura.calcularTotalItems()
})
factura01.calcularTotalFinal()
const tipoPago:string = 'E'
const totalPorTipoDePago:number = cliente01.totalFacturadoXTipoPago(tipoPago)

console.log('----------------------------------')
console.log(`En la factura 01, con el tipo de pago: ${tipoPago} el subtotal fue de: $${totalPorTipoDePago}`);
console.log('----------------------------------')