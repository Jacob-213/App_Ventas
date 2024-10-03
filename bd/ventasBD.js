const ventasBD = require("./conexion").ventas;

async function nuevaVenta(data) {
    data.estatus = "vendido";
    await ventasBD.doc().set(data);
    return true;
}
async function buscarVentaPorId(id) {
    const venta = await ventasBD.doc(id).get();
    if (venta.exists) {
        return { id: venta.id, ...venta.data() }; 
    } else {
        return null;
    }
}
async function mostrarVentas() {
    const ventas = await ventasBD.get();
    let ventasValidas = [];
    ventas.forEach(venta => {
        ventasValidas.push({ id: venta.id, ...venta.data() });
    });
    return ventasValidas;
}
async function cambiarEstatusVenta(id, nuevoEstatus) {
    const venta = await ventasBD.doc(id).get();
    if (venta.exists) {
        await ventasBD.doc(id).update({ estatus: nuevoEstatus });
        return true;
    }
    return false;
}
module.exports = {
    nuevaVenta,
    buscarVentaPorId,
    mostrarVentas,
    cambiarEstatusVenta
};
