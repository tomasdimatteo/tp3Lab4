"use strict";
exports.__esModule = true;
exports.Factura = void 0;
var Factura = /** @class */ (function () {
    function Factura(letra, numero, recargo, tipoPago, totalItems, totalFinal, fecha, cliente) {
        var _this = this;
        this.calcularTotalFinal = function () {
            _this.totalFinal = _this.totalItems + _this.recargo;
            return _this.totalFinal;
        };
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = tipoPago;
        this.totalItems = totalItems;
        this.totalFinal = totalFinal;
        this.fecha = fecha;
        this.cliente = cliente;
        this.detallesFacturas = [];
    }
    Factura.prototype.calcularTotalItems = function () {
        var _this = this;
        this.detallesFacturas.forEach(function (detalle) {
            _this.totalItems = detalle.calcularSubTotal();
        });
        return this.totalItems;
    };
    return Factura;
}());
exports.Factura = Factura;
