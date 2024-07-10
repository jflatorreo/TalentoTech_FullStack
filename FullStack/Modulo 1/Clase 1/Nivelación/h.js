class Notificacion {
    constructor(usuario, mensaje) {
        this.usuario = usuario;
        this.mensaje = mensaje;
        this.hora = new Date().toLocaleTimeString();
    }

    mostrar() {
        console.log(`[${this.hora}] Notificación para ${this.usuario}: ${this.mensaje}`);
    }
}

class NotificacionMeGusta extends Notificacion {
    constructor(usuario, publicacion) {
        super(usuario, `Le ha gustado tu publicación: "${publicacion}"`);
        this.icono = "👍";
    }

    mostrar() {
        console.log(`${this.icono} ${super.mostrar()}`);
    }
}

class NotificacionComentario extends Notificacion {
    constructor(usuario, publicacion, comentario) {
        super(usuario, `Ha comentado en tu publicación: "${publicacion}"`);
        this.comentario = comentario;
        this.icono = "💬";
    }

    mostrar() {
        super.mostrar();
        console.log(`   ${this.icono} Comentario: "${this.comentario}"`);
    }
}

// Uso del sistema
const meGusta = new NotificacionMeGusta("Ana", "¡Qué hermoso día!");
meGusta.mostrar();

const comentario = new NotificacionComentario("Carlos", "¡Feliz cumpleaños!", "¡Muchas felicidades! Espero que tengas un día maravilloso.");
comentario.mostrar();