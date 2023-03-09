// - Una función sin parámetros que devuelva siempre "true"
siempreTrue()
function siempreTrue() {
    console.log(true);
}
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function saludo(){
    console.log("Hola soy una promesa");
  }
  
  setTimeout(saludo, 5000);

// - Una función generadora de índices pares automáticos
function* generadora(){
    let id = 0;
    while(true){
        id = id + 2
        if (id >= 100) {
            return id
        }
        yield id
    }
}
const gen = generadora();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
