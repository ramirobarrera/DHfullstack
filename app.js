// function agregarHttp(url) {
//     return "http://"+url;
//   }
  
  
//   function procesar(url,funcion){
//       let arraycompleto = []
//       for (let i = 0; i < url.length;i++){
//           let valor = funcion(url[i])
//           arraycompleto.push(valor)
//       }
//       return arraycompleto
//   }
//     // escribí tu código aquí
//     // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
// console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp))

// let fecha = new Date ()

// dia = fecha.getDate ()
// mes = fecha.getMonth ()
// anio = fecha.getFullYear ()

// console.log('Hoy es el día 0'+ dia +' del mes 0'+ (mes + 1)+' del año '+ anio)

 function noParesDeContarImparesHasta(x){
    let contador = 0
    for (let i = 0; i <= x; i++){
        if (i % 2 != 0){
            contador++
    }
    }
    return contador
}
console.log(noParesDeContarImparesHasta(15))

/* function noParesDeContarImparesHasta(numero){
    let contador = 0;
    for(let i = 0; i <= numero; i++){
        i % 2 != 0?contador++:""
    }
    return contador;
}
console.log(noParesDeContarImparesHasta(15))*/