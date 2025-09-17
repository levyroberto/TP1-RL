/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
    try {
        return str.split(separador)
            .map(Number)
            .filter(num => !isNaN(num))
    } catch (error) {
        throw new Error(`Error en transformación de string a array de números: ${error.message}`)
    }
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    try {
        return arr.join(separador)
    } catch (error) {
        throw new Error(`Error en transformación de array de strings a string: ${error.message}`)
    }
}

// exportar ambas funciones
export { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString }