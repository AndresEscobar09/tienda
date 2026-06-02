import {Usuario,UsuarioVIP} from './usuario.js';
import {Producto,ProductoDigital} from './producto.js';


//se crean 3 usuarios
const usuario1 = new Usuario("Juan","juan@example.com");
//console.log(usuario1.resumen());

const usuario2 = new Usuario("Maria","maria@example.com","administrador");
//console.log(usuario2.resumen());

const usuario3 = new UsuarioVIP("Carlos","carlos@example.com","VIP","PLATINUM");
//console.log(usuario3.resumen());


//se crean 4 productos
const producto1 = new Producto("Laptop",1000,"Electrónica");
//console.log(producto1.resumen());

const producto2 = new Producto("Smartphone",500,"Electrónica");
//console.log(producto2.resumen());

const producto3 = new ProductoDigital("Ebook",20,"Mensual");
//console.log(producto3.resumen());

const producto4 = new ProductoDigital("Curso Online",100,"Anual");
//console.log(producto4.resumen());


//desactivar usuario2 y mostrar resumen antes y después
console.log(usuario2.resumen());
usuario2.desactivar();
console.log(usuario2.resumen());

//aplcar descuento al producto1 y mostrar resumen antes y después
console.log(producto1.resumen());
console.log(`Precio con descuento del 20%: $${producto1.aplicarDescuento(0.20)}`);

// mostrar tarjeta de todos los productos
console.log(producto1.tarjeta(),producto2.tarjeta(),producto3.tarjeta(),producto4.tarjeta()
);

//mostrar resumen de todos los usuarios
console.log(usuario1.resumen(),usuario2.resumen(),usuario3.resumen());

//mostrar saludo de usuario3 y beneficios VIP
console.log(usuario3.saludo());
console.log(usuario3.beneficios());
