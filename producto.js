// clase base Producto

export class Producto{
    constructor(nombre,precio,categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    calcularTotal(){
        return this.precio+(this.precio*0.19); // IVA del 19%
    }
    aplicarDescuento(porcentaje){
        return this.precio - (this.precio * porcentaje);
    }
    resumen(){
        return `
        -----------------------
        Producto: ${this.nombre}
        Categoria: ${this.categoria}
        Precio base: $${this.precio}
        -----------------------
        `;
    }
    tarjeta(){

        return `
        -----------------------
        ${this.nombre}
        ${this.categoria}
        $${this.calcularTotal()} (IVA incluido)
        
        -----------------------
     `;   
    }
}
// clase extendida ProductoDigital

export class ProductoDigital extends Producto{
    constructor(nombre,precio,licencia,categoria="Digital"){
        super(nombre,precio,categoria);
        this.licencia = licencia;
        }
        calcularTotal(){
            return this.precio; // Sin IVA para productos digitales

        }
        tarjeta(){
            return super.tarjeta() + `
            Licencia: ${this.licencia}
            -----------------------
            `;
        }  
    }
