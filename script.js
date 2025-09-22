// Obtiene los elementos del DOM que vamos a usar
const inputValue = document.getElementById('input-value');
const conversionType = document.getElementById('conversion-type');
const resultParagraph = document.getElementById('result');

// Función principal para manejar la conversión
function convert() {
    // Obtiene el valor numérico del input y el tipo de conversión seleccionado
    const value = parseFloat(inputValue.value);
    const type = conversionType.value;
    let result = '';

    // Verifica si el valor de entrada es un número válido
    if (isNaN(value)) {
        resultParagraph.textContent = 'Error: Por favor, introduce un número válido.';
        return;
    }

    // Lógica para las conversiones
    if (type === 'temp') {
        // Conversión de Temperatura (Celsius a Fahrenheit)
        const fahrenheit = (value * 9/5) + 32;
        result = `${value}°C es igual a ${fahrenheit.toFixed(2)}°F`;
    } else if (type === 'length') {
        // Conversión de Longitud (Metros a Pies)
        const feet = value * 3.28084;
        result = `${value} metros es igual a ${feet.toFixed(2)} pies`;
    }

    // Muestra el resultado en el párrafo
    resultParagraph.textContent = `Resultado: ${result}`;
}

// Vincula la función 'convert' al botón de conversión
document.querySelector('button').addEventListener('click', convert);