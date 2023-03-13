class Estudiante{
    nombre = "Javier";
    asignaturas = ["Javascript", "HTML","CSS"];


    obtenDatos() {
        return{
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}
const Estudiante2 = new Estudiante();
console.log(Estudiante2.obtenDatos());
