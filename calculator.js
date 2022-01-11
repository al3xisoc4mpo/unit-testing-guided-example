console.log ("Hola Mundo!");

// FUNCIONES DECLARATIVAS
// SOLO SE HACE UNA VEZ
// function
function sum(a, b) {

  // EN CASO DE QUE NO HAYA ARGUMENTOS
  if (!a && !b) {
    return 0;
  }

  // EN CASO QUE EL SEGUNDO ARGUMENTO NO EXISTA
  if (!b) {
    b = 0;
  }

  const total = a + b;
  return total;
}

// INVOCACION DE FUNCION
// PUEDE USARSE (INVOCARSE) LAS VECES QUE QUIERAN
// sum(1,2)

function subtract(a, b) {

    // EN CASO DE QUE NO HAYA ARGUMENTOS
    if (!a && !b) {
      return 0;
    }
  
    // EN CASO QUE EL SEGUNDO ARGUMENTO NO EXISTA
    if (!b) {
      b = 0;
    }
  const total = a - b;
  return total;
}

function divide(a, b) {
  
      // EN CASO DE QUE NO HAYA ARGUMENTOS
      if (!a && !b) {
        return 0;
      }
    
      // EN CASO QUE EL SEGUNDO ARGUMENTO SEA CERO (LA DIVISION ENTRE CERO NO EXISTE)
      if (b === 0) {
       return error('Division by 0 not valid');
      }

    const total = a / b;
    return total;
  return;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
