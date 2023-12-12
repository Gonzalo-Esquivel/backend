class AdministradorUsuarios {
    constructor() {
        this.usuarios = [];
    }

    crear(data) {
        const usuario = {
            id: this.usuarios.length + 1,
            nombre: data.nombre,
            foto: data.foto,
            correo: data.correo
        };
        this.usuarios.push(usuario);
    }

    obtenerTodos() {
        return this.usuarios;
    }

    obtenerUno(id) {
        return this.usuarios.find(usuario => usuario.id === id);
    }
}

const administradorUsuarios = new AdministradorUsuarios();

administradorUsuarios.crear({ nombre: "Usuario 1", foto: "ruta/a/foto_usuario1.jpg", correo: "usuario1@example.com" });
administradorUsuarios.crear({ nombre: "Usuario 2", foto: "ruta/a/foto_usuario2.jpg", correo: "usuario2@example.com" });

const todosLosUsuarios = administradorUsuarios.obtenerTodos();

const idUsuarioBuscar = 2;

const usuarioEncontrado = administradorUsuarios.obtenerUno(idUsuarioBuscar);

console.log("Todos los usuarios:", todosLosUsuarios);

console.log(`Usuario encontrado con id ${idUsuarioBuscar}:`, usuarioEncontrado);