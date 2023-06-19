document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const metrosInput = document.getElementById('metros');
    const resultadoElement = document.getElementById('resultado');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const metros = parseInt(metrosInput.value);
  
      let transporte = '';
  
      if (metros > -1 && metros <= 1000) {
        transporte = 'Pie';
      } else if (metros > 1001 && metros <= 10000) {
        transporte = 'Bicicleta';
      } else if (metros > 10001 && metros <= 30000) {
        transporte = 'Colectivo';
      } else if (metros > 30001 && metros <= 100000) {
        transporte = 'Auto';
      } else if (metros > 100001) {
        transporte = 'Avion';
      }
  
      console.log(`Para ${metros} metros recomendamos ir en ${transporte}`);
      resultadoElement.innerHTML = `El medio de transporte recomendado es: ${transporte}`;
    });
  });
