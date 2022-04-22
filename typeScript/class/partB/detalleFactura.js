"use strict";
exports.__esModule = true;
exports.DetalleFactura = void 0;
var DetalleFactura = /** @class */ (function () {
    function DetalleFactura(cantidad, subtotal, articulo, factura) {
        var _this = this;
        this.calcularSubTotal = function () {
            _this.subtotal = _this.articulo.precio * _this.cantidad;
            return _this.subtotal;
        };
        this.cantidad = cantidad;
        this.subtotal = subtotal;
        this.articulo = articulo;
        this.factura = factura;
    }
    return DetalleFactura;
}());
exports.DetalleFactura = DetalleFactura;
