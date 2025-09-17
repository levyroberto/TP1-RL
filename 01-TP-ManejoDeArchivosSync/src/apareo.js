/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arr1, arr2) {
    let i = 0, j = 0;
    const resultado = [];
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        resultado.push(arr1[i]);
        i++;
      } else if (arr1[i] > arr2[j]) {
        resultado.push(arr2[j]);
        j++;
      } else {
        resultado.push(arr1[i]);
        i++;
        j++;
      }
    }
  
    while (i < arr1.length) {
      resultado.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      resultado.push(arr2[j]);
      j++;
    }
  
    return resultado;
  }
  

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    return arrs.reduce((acc, arr) => {
        return combinarDosArrays(acc, arr)
    }, [])
}

// exportar ambas funciones
export { combinarDosArrays, combinarNArrays }