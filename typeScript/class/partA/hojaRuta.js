"use strict";
exports.__esModule = true;
exports.HojaRuta = void 0;
var HojaRuta = /** @class */ (function () {
    function HojaRuta(fecha, numero, vehiculo) {
        this.fecha = fecha;
        this.numero = numero;
        this.vehiculo = vehiculo;
        this.detalles = [];
    }
    HojaRuta.prototype.calcularTotalKm = function () {
        var kmRecorridos = 0;
        this.detalles.forEach(function (detalle) {
            kmRecorridos += detalle.kmRegreso - detalle.kmSalida;
        });
        return kmRecorridos;
    };
    return HojaRuta;
}());
exports.HojaRuta = HojaRuta;
