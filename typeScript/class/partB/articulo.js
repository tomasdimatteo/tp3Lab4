"use strict";
exports.__esModule = true;
exports.Articulo = void 0;
var Articulo = /** @class */ (function () {
    function Articulo(codigo, denominacion, precio, unidadMedida) {
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
        this.detallesFacturas = [];
    }
    return Articulo;
}());
exports.Articulo = Articulo;
