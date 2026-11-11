const promesa = new Promise((resolve, reject) => {
let compraRealizada = true;
if (compraRealizada) {
resolve("Compra realizada correctamente");
} else {
reject("La compra no pudo realizarse");
}
});
promesa
.then(resultado => {
console.log(resultado);
})
.catch(error => {
console.log(error);
});

