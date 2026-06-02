//clase usuario

export class Usuario{
    constructor(nombre,email,rol="Cliente"){
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;
    this.activo = true;
    }
    saludo(){
        return `
        -----------------------
        Tu nombre es: ${this.nombre}
        Tu email es ${this.email}
        -----------------------
        `;
    }
    desactivar(){
        this.activo = false;
    }
    resumen(){
        return `
        -----------------------
        Nombre: ${this.nombre}
        Email: ${this.email}
        Rol: ${this.rol}
        Activo: ${this.activo}
        -----------------------
        `;
    }
}

// clase extendida UsuarioVIP

export class UsuarioVIP extends Usuario{
    constructor(nombre,email,rol,menbresia){
        super(nombre,email,rol);
        this.menbresia = menbresia;
    }
    saludo(){
        return super.saludo() + `
        VIP con membresía: ${this.menbresia}
        ------------------------
        `;
    }
    beneficios(){
        return `
        -----------------------
        Beneficios VIP:
        - Acceso a ofertas exclusivas
        - Envío gratuito
        -----------------------
        `;
    }
}