const arr = [1,4,6];

const funcion = (palabra, i) => (
  {
    palabra,
    str: palabra.toString(),
    i
  }
);

const res = arr.map(funcion);

console.log(res);

var a = "";