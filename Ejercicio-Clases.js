class Estudiante{
    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = asignaturas = ["Javascript", "HTML","CSS"];
    }

    obtenDatos() {
        return{
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}
const Estudiante2 = new Estudiante("Javier");
const EstudianteObejto = Estudiante2.obtenDatos();
console.log(EstudianteObejto);
