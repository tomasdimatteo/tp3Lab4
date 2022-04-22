"use strict";
exports.__esModule = true;
var articulo_1 = require("./class/partB/articulo");
var cliente_1 = require("./class/partB/cliente");
var detalleFactura_1 = require("./class/partB/detalleFactura");
var factura_1 = require("./class/partB/factura");
var cliente01 = new cliente_1.Cliente(1234, 'Monotributista', 20123456788);
var factura01 = new factura_1.Factura("A", 1, 100, 'E', 0, 0, new Date("01/12/2021 13:00"), cliente01);
var artLeche = new articulo_1.Articulo(123, "Leche", 110, "litro");
var artQueso = new articulo_1.Articulo(234, "Queso", 260, "gramo");
var artPan = new articulo_1.Articulo(345, "Pan", 100, "gramo");
var artFideos = new articulo_1.Articulo(678, "Fideos", 95, "gramo");
var artCerveza = new articulo_1.Articulo(891, "Cerveza", 250, "litro");
var detArt01 = new detalleFactura_1.DetalleFactura(2, 0, artLeche, factura01);
var detArt02 = new detalleFactura_1.DetalleFactura(4, 0, artCerveza, factura01);
factura01.detallesFacturas.push(detArt01);
factura01.detallesFacturas.push(detArt02);
var factura02 = new factura_1.Factura("B", 2, 200, 'CC', 0, 0, new Date("01/24/2021 14:56"), cliente01);
var detArt03 = new detalleFactura_1.DetalleFactura(4, 0, artFideos, factura02);
var detArt04 = new detalleFactura_1.DetalleFactura(1, 0, artQueso, factura02);
factura02.detallesFacturas.push(detArt03);
factura02.detallesFacturas.push(detArt04);
var factura03 = new factura_1.Factura("B", 2, 200, 'C', 0, 0, new Date("01/24/2021 14:56"), cliente01);
var detArt05 = new detalleFactura_1.DetalleFactura(2, 0, artPan, factura03);
var detArt06 = new detalleFactura_1.DetalleFactura(6, 0, artCerveza, factura03);
factura03.detallesFacturas.push(detArt05);
factura03.detallesFacturas.push(detArt06);
cliente01.facturas.push(factura01);
cliente01.facturas.push(factura02);
cliente01.facturas.push(factura03);
cliente01.facturas.forEach(function (factura) {
    factura.detallesFacturas.forEach(function (detalle) {
        detalle.calcularSubTotal();
    });
    factura.calcularTotalItems();
});
factura01.calcularTotalFinal();
var tipoPago = 'E';
var totalPorTipoDePago = cliente01.totalFacturadoXTipoPago(tipoPago);
console.log('----------------------------------');
console.log("En la factura 01, con el tipo de pago: ".concat(tipoPago, " el subtotal fue de: $").concat(totalPorTipoDePago));
console.log('----------------------------------');