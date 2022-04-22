"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(numero, razonSocial, cuit) {
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
        this.facturas = [];
    }
    Cliente.prototype.totalFacturadoXTipoPago = function (tipoPago) {
        var total = 0;
        if (tipoPago === 'E' || tipoPago === 'TD' || tipoPago === 'TC' || tipoPago === 'CC' || tipoPago === 'TR') {
            var facturasTipoPago = this.facturas.filter(function (factura) { return factura.tipoPago === tipoPago; });
            facturasTipoPago.forEach(function (factura) {
                total += factura.calcularTotalFinal();
            });
        }
        else {
            this.facturas.forEach(function (factura) {
                total += factura.calcularTotalFinal();
            });
            console.log("El tipo de pago ingresado es incorrecto. Subtotal sin recargo/descuento es: $".concat(total));
        }
        return total;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
