class AdministradorProductos {
    constructor() {
        this.productos = [];
    }

    crear(data) {
        const producto = {
            id: this.productos.length + 1,
            titulo: data.titulo,
            foto: data.foto,
            precio: data.precio,
            stock: data.stock
        };
        this.productos.push(producto);
    }

    obtenerTodos() {
        return this.productos;
    }

    obtenerUno(id) {
        return this.productos.find(producto => producto.id === id);
    }
}

// Ejemplo de uso
const administradorProductos = new AdministradorProductos();

// Crear productos
administradorProductos.crear({ titulo: "Producto 1", foto: "ruta/a/foto1.jpg", precio: 19.99, stock: 100 });
administradorProductos.crear({ titulo: "Producto 2", foto: "ruta/a/foto2.jpg", precio: 29.99, stock: 50 });

// Obtener todos los productos
const todosLosProductos = administradorProductos.obtenerTodos();

// Obtener un producto específico
const idProductoBuscar = 1;
const productoEncontrado = administradorProductos.obtenerUno(idProductoBuscar);

console.log("Todos los productos:", todosLosProductos);
console.log(`Producto encontrado con id ${idProductoBuscar}:`, productoEncontrado);
