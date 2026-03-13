// utility functions for temperature conversion

/**
 * Converts Fahrenheit to Celsius.
 * @param {number} fahrenheit - Temperature in Fahrenheit
 * @returns {number} - Temperature in Celsius
 */
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
};

/**
 * Converts Celsius to Fahrenheit.
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} - Temperature in Fahrenheit
 */
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

module.exports = { fahrenheitToCelsius, celsiusToFahrenheit };