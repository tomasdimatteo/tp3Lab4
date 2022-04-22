import { Detalle } from "./detalle";
import { Vehiculo } from "./vehiculo";

export class HojaRuta{

    fecha : Date;
    numero : number;

    vehiculo : Vehiculo;
    detalles : Detalle[];

    constructor(fecha: Date, numero: number, vehiculo: Vehiculo){
        this.fecha = fecha;
        this.numero = numero;
        this.vehiculo = vehiculo;
        this.detalles = [];
    }

   calcularTotalKm() : number {
        let kmRecorridos : number = 0;
        this.detalles.forEach(detalle => {
            kmRecorridos += detalle.kmRegreso - detalle.kmSalida    
        })
        return kmRecorridos;
    }
    
}