/**
 * Calculates the Greatest Common Divisor (GCD)
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - The GCD
 */
export const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
};

/**
 * Calculates the Least Common Multiple (LCM)
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - The LCM
 */
export const lcm = (a, b) => {
  return Math.abs(a * b) / gcd(a, b);
};

/**
 * Generates a range of numbers
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} step - Step size
 * @returns {number[]} - Array of numbers
 */
export const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};

/**
 * Rounds a number to a specified number of decimal places
 * @param {number} value - The value to round
 * @param {number} decimals - Number of decimal places
 * @returns {number} - Rounded value
 */
export const roundTo = (value, decimals = 2) => {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
};

/**
 * Checks if a number is prime
 * @param {number} n - The number to check
 * @returns {boolean} - Whether the number is prime
 */
export const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

/**
 * Calculates the factorial of a number
 * @param {number} n - The number
 * @returns {number} - The factorial
 */
export const factorial = (n) => {
  if (n < 0) throw new Error('Factorial not defined for negative numbers');
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

/**
 * Calculates combinations (nCr)
 * @param {number} n - Total number of items
 * @param {number} r - Number of items to choose
 * @returns {number} - Number of combinations
 */
export const combinations = (n, r) => {
  if (r > n) throw new Error('r cannot be greater than n');
  return factorial(n) / (factorial(r) * factorial(n - r));
};

/**
 * Calculates permutations (nPr)
 * @param {number} n - Total number of items
 * @param {number} r - Number of items to arrange
 * @returns {number} - Number of permutations
 */
export const permutations = (n, r) => {
  if (r > n) throw new Error('r cannot be greater than n');
  return factorial(n) / factorial(n - r);
};