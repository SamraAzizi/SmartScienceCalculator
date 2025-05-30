// Constants for unit conversions
const CONVERSION_FACTORS = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701
  },
  mass: {
    kilogram: 1,
    gram: 1000,
    milligram: 1000000,
    pound: 2.20462,
    ounce: 35.274
  },
  temperature: {
    celsius: 'base',
    fahrenheit: 'special',
    kelvin: 'special'
  },
  time: {
    second: 1,
    minute: 1/60,
    hour: 1/3600,
    day: 1/86400
  }
};

/**
 * Converts a value between units
 * @param {number} value - The value to convert
 * @param {string} fromUnit - The unit to convert from
 * @param {string} toUnit - The unit to convert to
 * @param {string} type - The type of conversion (length, mass, etc.)
 * @returns {number} - The converted value
 */
export const convertUnit = (value, fromUnit, toUnit, type) => {
  if (type === 'temperature') {
    return convertTemperature(value, fromUnit, toUnit);
  }

  const factors = CONVERSION_FACTORS[type];
  if (!factors) throw new Error(`Unknown conversion type: ${type}`);

  const fromFactor = factors[fromUnit];
  const toFactor = factors[toUnit];
  if (!fromFactor || !toFactor) throw new Error('Invalid units');

  return (value / fromFactor) * toFactor;
};

/**
 * Converts temperatures between different units
 * @param {number} value - The temperature value
 * @param {string} fromUnit - The unit to convert from
 * @param {string} toUnit - The unit to convert to
 * @returns {number} - The converted temperature
 */
const convertTemperature = (value, fromUnit, toUnit) => {
  // First convert to Celsius
  let celsius;
  switch (fromUnit) {
    case 'celsius':
      celsius = value;
      break;
    case 'fahrenheit':
      celsius = (value - 32) * 5/9;
      break;
    case 'kelvin':
      celsius = value - 273.15;
      break;
    default:
      throw new Error('Invalid temperature unit');
  }

  // Then convert from Celsius to target unit
  switch (toUnit) {
    case 'celsius':
      return celsius;
    case 'fahrenheit':
      return (celsius * 9/5) + 32;
    case 'kelvin':
      return celsius + 273.15;
    default:
      throw new Error('Invalid temperature unit');
  }
};

/**
 * Gets available units for a conversion type
 * @param {string} type - The type of conversion
 * @returns {string[]} - Array of available units
 */
export const getAvailableUnits = (type) => {
  const factors = CONVERSION_FACTORS[type];
  return factors ? Object.keys(factors) : [];
};