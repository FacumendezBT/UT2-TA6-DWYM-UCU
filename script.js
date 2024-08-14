const temp = document.getElementById('temp');
const toCelsiusButton = document.getElementById('toCelsius');
const toFahrenheitButton = document.getElementById('toFahrenheit');

toCelsiusButton.addEventListener('click', () => {
    let tempValue = parseFloat(temp.value);
    convertToCelsius(tempValue);
});

toFahrenheitButton.addEventListener('click', () => {
    let tempValue = parseFloat(temp.value);
    convertToFahrenheit(tempValue);
});

/**
 * Convierte la temperatura a Celsius
 * @param {number} temp - Temperatura a convertir
 */
function convertToCelsius(temp) {
    let tempConvertida = (temp - 32) * 5 / 9;
    console.log(tempConvertida.toFixed(1));
}

/**
 * Convierte la temperatura a Fahrenheit
 * @param {number} temp - Temperatura a convertir
 */
function convertToFahrenheit(temp) {
    let tempConvertida = temp * 9 / 5 + 32;
    console.log(tempConvertida.toFixed(1));
}