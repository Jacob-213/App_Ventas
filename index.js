const express = require("express");
const usuarioRutas = require("./rutas/rutasUsuarios");
const productoRutas = require("./rutas/rutasProductos"); // Importar rutas de productos
const ventaRutas = require("./rutas/rutasVentas");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/usuarios", usuarioRutas);

app.use("/productos", productoRutas);

app.use("/ventas", ventaRutas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});
