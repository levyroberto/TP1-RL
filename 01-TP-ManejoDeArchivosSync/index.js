import { leerArchivoComoString } from './src/utils/fileUtils.js'
import { transformarStringEnArrayDeNumeros } from './src/utils/transformUtils.js'
import { combinarDosArrays, combinarNArrays } from './src/apareo.js'
import { escribirTextoEnArchivo } from './src/utils/fileUtils.js'
import { transformarArrayDeNumerosAUnSoloString } from './src/utils/transformUtils.js'

// leo los 4 archivos a memoria
const setA = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in')
const setB = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in')
const impares = leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in')
const pares = leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in')

// preparo los 4 arrays a partir de los archivo leidos
const arrATransformado = transformarStringEnArrayDeNumeros(setA, ',')
const arrBTransformado = transformarStringEnArrayDeNumeros(setB, ',')

// combino los primeros dos arrays
const arrABcombinados = combinarDosArrays(arrATransformado, arrBTransformado)
   // console.log(arrABcombinados)

// preparo los otros dos arrays a partir de los archivos leídos
const arrImparesTransformado = transformarStringEnArrayDeNumeros(impares, ',')
const arrParesTransformado = transformarStringEnArrayDeNumeros(pares, ',')

// combino los segundos dos arrays
const arrCombinados = combinarDosArrays(arrImparesTransformado, arrParesTransformado)
   // console.log(arrCombinados)

// combino los cuatro arrays
const arrFinal = combinarNArrays([arrABcombinados, arrCombinados])
   console.log(arrFinal)

// escribo el array final en el archivo out/resultado.out
try {
   escribirTextoEnArchivo('./out/resultado.text', transformarArrayDeNumerosAUnSoloString(arrFinal, ','), false)
   console.log('Archivo creado exitosamente con flag false')
} catch (error) {
   console.log(error.message)
}

try {
   escribirTextoEnArchivo('./out/resultadoConFlagTrue.text', transformarArrayDeNumerosAUnSoloString(arrFinal, ','), true)
   console.log('Archivo creado exitosamente con flag true')
} catch (error) {
   console.log(error.message)
}
