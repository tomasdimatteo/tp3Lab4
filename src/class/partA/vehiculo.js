"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo) {
        var _this = this;
        this.calcularTotalKmRecorridos = function (fechaDesde, fechaHasta) {
            var totalKm = 0;
            _this.hojaRutas.forEach(function (dato) {
                if (dato.fecha >= fechaDesde && dato.fecha <= fechaHasta) {
                    totalKm += dato.calcularTotalKm();
                }
            });
            return totalKm;
        };
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.hojaRutas = [];
    }
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
