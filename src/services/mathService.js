import { create, all } from 'mathjs';

const math = create(all);

class MathService {
  solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
      return { error: 'No real solutions' };
    }
    
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    
    return {
      x1,
      x2,
      steps: [
        `Given quadratic equation: ${a}x² + ${b}x + ${c} = 0`,
        `Calculate discriminant: b² - 4ac = ${discriminant}`,
        `x₁ = (-b + √(b² - 4ac)) / (2a) = ${x1}`,
        `x₂ = (-b - √(b² - 4ac)) / (2a) = ${x2}`
      ]
    };
  }

  evaluateExpression(expression) {
    try {
      const result = math.evaluate(expression);
      return {
        result,
        steps: [
          `Original expression: ${expression}`,
          `Evaluated result: ${result}`
        ]
      };
    } catch (error) {
      return { error: 'Invalid expression' };
    }
  }

  calculateDerivative(expression, variable = 'x') {
    try {
      const derivative = math.derivative(expression, variable);
      return {
        result: derivative.toString(),
        steps: [
          `Original function: ${expression}`,
          `Taking derivative with respect to ${variable}`,
          `Result: ${derivative.toString()}`
        ]
      };
    } catch (error) {
      return { error: 'Invalid expression for differentiation' };
    }
  }

  calculateIntegral(expression, variable = 'x') {
    try {
      // Note: This is a simplified version. For complex integrals,
      // you might want to use a more sophisticated library or API
      const integral = math.integrate(expression, variable);
      return {
        result: integral.toString(),
        steps: [
          `Original function: ${expression}`,
          `Integrating with respect to ${variable}`,
          `Result: ${integral.toString()} + C`
        ]
      };
    } catch (error) {
      return { error: 'Invalid expression for integration' };
    }
  }
}

export default new MathService();