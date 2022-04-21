import { HojaRuta } from "./hojaRuta";

export class Detalle{

    kmSalida : number;
    kmRegreso : number;
    horaSalida : number;
    horaRegreso : number;
    minutoSalida : number;
    minutoRegreso : number;

    hojaRuta : HojaRuta;


  constructor(kmSalida: number, kmRegreso: number, horaSalida: number, horaRegreso: number, minutoSalida: number, minutoRegreso: number, hojaRuta: HojaRuta){
    this.kmSalida = kmSalida;
    this.kmRegreso = kmRegreso;
    this.horaSalida = horaSalida;
    this.horaRegreso = horaRegreso;
    this.minutoSalida = minutoSalida;
    this.minutoRegreso = minutoRegreso;
    this.hojaRuta = hojaRuta;
  }
    

}