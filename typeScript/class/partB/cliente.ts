import { Factura } from "./factura";

export class Cliente{
    
    numero : number;
    razonSocial: string;
    cuit : number;

    facturas : Factura[];

    constructor(numero: number, razonSocial: string, cuit: number){
    this.numero = numero
    this.razonSocial = razonSocial
    this.cuit = cuit
    this.facturas = []
    }
    totalFacturadoXTipoPago(tipoPago:string) : number{
        let total : number = 0;
        if(tipoPago === 'E' || tipoPago === 'TD' || tipoPago === 'TC' || tipoPago === 'CC' || tipoPago === 'TR'){
            const facturasTipoPago = this.facturas.filter(factura => factura.tipoPago === tipoPago) ;
            facturasTipoPago.forEach(factura => {
                total += factura.calcularTotalFinal();
            })   
        }else{
            this.facturas.forEach(factura => {
                total += factura.calcularTotalFinal() ;
            })
            console.log(`El tipo de pago ingresado es incorrecto. Subtotal sin recargo/descuento es: $${total}`);
        }
        return total;
    }
    
}