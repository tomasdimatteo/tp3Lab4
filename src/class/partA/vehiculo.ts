import { HojaRuta } from "./hojaRuta";

export class Vehiculo{
    patente : string;
    marca : string;
    modelo : string;

    hojaRutas : HojaRuta[];

    constructor(patente: string, marca: string, modelo: string){
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.hojaRutas = [];
    }

    calcularTotalKmRecorridos = (fechaDesde : Date, fechaHasta : Date) => {
        let totalKm : number = 0;
        this.hojaRutas.forEach(dato => {
            if(dato.fecha >= fechaDesde && dato.fecha <= fechaHasta){
                totalKm += dato.calcularTotalKm()
            }
        })
        return totalKm;
    }
}