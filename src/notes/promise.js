let promesa = new Promise((resolve, rejected) => {
  setTimeout(() => {
    rejected("Exito Total!");
  }, 2000);
});

console.log("Ahora Comienza");

promesa.then((mensaje) => {
  console.log(mensaje);
  console.log("Aca termina");
}).catch ((error) => {
  console.log(error);
});

