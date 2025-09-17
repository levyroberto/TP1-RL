import fs from 'fs'
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
 function leerArchivoComoString(ruta) {
    try {
        const contenido = fs.readFileSync(ruta, 'utf-8');
        return contenido;
      } catch (error) {
        throw new Error(`Error al leer el archivo: ${error.message}`);
      }
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
 function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    try {
        if (shouldCreateIfNotExists) {
          fs.writeFileSync(ruta, texto, { flag: "w" });
        } else {
          throw new Error("La escritura inhabilitada");
        }
        return true;
      } catch (error) {
        throw new Error(`Error en escritura: ${error.message}`);
      }
}

// exportar ambas funciones
export { leerArchivoComoString, escribirTextoEnArchivo }
