import { Articulo } from "./articulo";
import { Factura } from "./factura";

export class DetalleFactura{

    cantidad: number;
    subtotal: number;

    articulo : Articulo;
    factura : Factura;

    constructor(cantidad: number, subtotal: number, articulo: Articulo, factura: Factura){
    this.cantidad = cantidad;
    this.subtotal = subtotal;
    this.articulo = articulo;
    this.factura = factura;
    }

    calcularSubTotal = () => {
        this.subtotal = this.articulo.precio * this.cantidad;
        return this.subtotal
    }
    
}