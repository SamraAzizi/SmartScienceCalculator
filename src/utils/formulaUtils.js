// Utility functions for formula validation and processing

/**
 * Validates mathematical expressions
 * @param {string} expression - The mathematical expression to validate
 * @returns {boolean} - Whether the expression is valid
 */
export const isValidMathExpression = (expression) => {
  try {
    // Check for balanced parentheses
    const stack = [];
    for (let char of expression) {
      if (char === '(') stack.push(char);
      if (char === ')') {
        if (stack.length === 0) return false;
        stack.pop();
      }
    }
    if (stack.length !== 0) return false;

    // Check for invalid characters
    const validChars = /^[0-9+\-*/().\s^√πe\[\]]+$/;
    return validChars.test(expression);
  } catch (error) {
    return false;
  }
};

/**
 * Formats the result with appropriate decimal places
 * @param {number} value - The value to format
 * @param {number} decimals - Number of decimal places
 * @returns {string} - Formatted result
 */
export const formatResult = (value, decimals = 4) => {
  if (Math.abs(value) < 1e-10) return '0';
  if (Math.abs(value) > 1e10) return value.toExponential(decimals);
  return value.toFixed(decimals);
};

/**
 * Validates chemical formulas
 * @param {string} formula - The chemical formula to validate
 * @returns {boolean} - Whether the formula is valid
 */
export const isValidChemicalFormula = (formula) => {
  const validElementRegex = /^([A-Z][a-z]?\d*)+$/;
  return validElementRegex.test(formula);
};

/**
 * Parses a chemical equation
 * @param {string} equation - The chemical equation to parse
 * @returns {Object} - Parsed reactants and products
 */
export const parseChemicalEquation = (equation) => {
  const [reactants, products] = equation.split('->');
  return {
    reactants: reactants.trim().split('+').map(r => r.trim()),
    products: products.trim().split('+').map(p => p.trim())
  };
};