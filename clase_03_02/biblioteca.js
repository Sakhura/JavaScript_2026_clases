console.log("Bienvenido al Sistema de Gestión de Bilioteca");
console.log("=".repeat(50));

//=============================================
// L1: Estructura de Datos 
//=============================================

//=============================================
// Crear un arreglo de libnro (5)
// cada libro = 1 objeto
// titulo ([string])
// autor(string)
// año(number)
// categoria( string) : Ficcion, No Ficcion, Ciencias, Misterios, Arte
// disponible (boolean) true / false
//=============================================

let biblioteca =[
    {
        titulo: "Cien años de Soledad",
        autor: "Gabriel Garcia Marquéz",
        año: 1967,
        categoria: "Ficcion",
        disponible: true
    },
    {
        itulo: "Sapiens: De animales a dioses", 
        autor: "Yuval Noah Harari", 
        año: 2011, categoria: "No Ficción", 
        disponible: true
    },
    {
        titulo: "Cosmos", 
        autor: "Carl Sagan", 
        año: 1980, 
        categoria: "Ciencias", 
        disponible: true
    },
    {
        titulo: "El código Da Vinci", 
        autor: "Dan Brown", 
        año: 2003, 
        categoria: "Misterios", 
        disponible: false
    },
    {
        titulo: "La historia del arte", 
        autor: "Ernst Gombrich", 
        año: 1950, 
        categoria: "Arte", 
        disponible: false
    }
];

//=============================================
// L2: Fx de visualización 
//=============================================

function mostrarTodosLosLibros(){
    console.log("\n CATALOGO COMPLETO DE LIBROS:");
    console.log("-".repeat(50));
    console.log(`\nTotal de libros: ${biblioteca.length}`);
}

// mostrarTodosLosLibros();

function menu(){
    console.log("\n" + "=".repeat(50));
    console.log("MENÚ PRINCIPAL - BIBLIOTECA");
    console.log("1. Ver todos los Libros");
    console.log("2. Buscar por Categoria");
    console.log("3. Buscar por Autor");
    console.log("4. Ver Estadisticas");
    console.log("5. Prestar Libros");
    console.log("6. Devolver Libros");
    console.log("7. Generar Reporte de Disponibilidad");
    console.log("0. Salir");
    console.log("=".repeat(50));

}

menu();
//=============================================
// L3: fx busqueda 
//=============================================

/**
 * Buscar libro por categoria
 * @param{String}
 * @returns{Array}
 */

function buscarPorCategoria(categoria){
    console.log(`\n Buscando Libros por Categoria: ${categoria}`);
    console.log("-".repeat(50));

    let resultado =[];

    if (resultado.length === 0){
        console.log("No se encontraron libros en esta categoria")
    }
    return resultado;

}

/**
 * Buscar libro por autor
 * @param{String} autor- El nombre del autor a buscar
 * @returns{Array} - Arreglo de libros del autor
 */

function buscarPorAutor(autor){
    console.log(`\n Buscando Libros por Autor: ${autor}`);
    console.log("-".repeat(50));

    let resultado =[];

    return resultado;

}

/**
 * Filtros 
 * @returns{Array} - Arreglo libros disponibles
 */

function obtenerListadoLibrosDisponibles(){
    return biblioteca.filter(libro => libro.disponible);
}

//=============================================
// L4: calculos / estadisticas
//=============================================

/**
 * Calcular el promedio de años de publicacion
 * @returns {number} - año promedio
 */

function calcularPromedio(){
    let sumaAños = 0;

    return sumaAños / biblioteca.length;
}

calcularPromedio();
/**
 * Contar libros por categoria
 * @returns {Object} - objeto con el conteo por categoria
 */

function contarPorCategoria(){
    console.log("\n DISTRIBUCION POR CATEGORIAS");
    console.log("-".repeat(50));

    let conteo ={};

    for( let categoria in conteo){
        console.log(`${categoria} : ${conteo[categoria]} libro(s)`);
    }

    return conteo;


}

/**
 * Porcentaje de libros disponibles
 * @returns {number} - porcentaje de disponibilidad
 */

function calcularPorcentajeDisponible(){

    let disponibles = obtenerListadoLibrosDisponibles().length;
    let porcentaje = (disponibles/ biblioteca.length) * 100;

    return porcentaje.toFixed(2);
}

//mostrar varias estadisticas

function mostrarEstadisticas(){
    console.log("\n ESTADISTICAS DE LA BIBLIOTECA");
    console.log("-".repeat(50));

    console.log(`Total de Libros: ${calcularTotalLibros()}`);
    console.log(`Libros Disponibles: ${obtenerListadoLibrosDisponibles().length} `);
    console.log(`Libros Prestados: ${biblioteca.length - obtenerListadoLibrosDisponibles().length}`);
    console.log(`Porcentaje Disponible: ${calcularPorcentajeDisponible()}%`);
    console.log(`Año promedio de la publicación ${calcularPromedio().toFixed(0)}`);

    console.log("\n");
    contarPorCategoria();
}


//=============================================
// L5: Sistema de Prestamos
//=============================================

/**
 * Prestar un libro
 * @param {string}  titulo libro a prestar
 * @returns {boolean} true presto libro ok / false si no
 */

function prestarLibro(titulo){
    console.log(`"\n Intentando prestar: ${titulo}"`);
    console.log("-".repeat(50));

    let libro = biblioteca.length.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());

    if(!libro){
        console.log("ERROR: El libro no existe en la biblioteca");
        return false;
    }

    if(!libro.disponible){
        console.log("ERROR: El libro ya esta prestado");
        return false;
    }

    console.log("Libro Prestado Exitosamente");
    return true;

}

/**
 * Devolver Libro
 * @param {String} titulo a devover
 * @returns {boolean} true si devolvio / false si no  
 */

function devolverLibro(){
    console.log(`"\n Intentando devolver: ${titulo}"`);
    console.log("-".repeat(50));

    let libro = biblioteca.length.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());

    if(!libro){
        console.log("ERROR: El libro no existe en la biblioteca");
        return false;
    }

    if(!libro.disponible){
        console.log("ERROR: El libro no estaba prestado");
        return false;
    }

    console.log("Libro devuelto Exitosamente");
    return true;
}

function generarReportePrestamos(){
    console.log("REPORTE DE PRESTAMOS");
    console.log("-".repeat(50));

    let prestados = biblioteca.filter(libro => !libro.disponible);

    if(prestados.length === 0){
        console.log("No hay libros prestados actualmente");
    } else {
        console.log(`Total libros prestados: ${prestados.length}\n`);

        prestados.forEach((libro, index) => {
            console.log(`${index + 1}. "${libro.titulo}" - ${libro.autor}`);
        });
    }
}

function iniciarAplicacion(){
    console.log("\n Sistema inicializado correctamente");
    menu();

    iniciarAplicacion();
}
