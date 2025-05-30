import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const mathFormulas = {
  algebra: [
    {
      name: 'Quadratic Formula',
      formula: 'x = (-b ± √(b² - 4ac)) / 2a',
      explanation: 'Solves quadratic equations in the form ax² + bx + c = 0',
      example: 'For x² + 5x + 6 = 0, a=1, b=5, c=6'
    },
    {
      name: 'Slope Formula',
      formula: 'm = (y₂ - y₁) / (x₂ - x₁)',
      explanation: 'Calculates the slope between two points',
      example: 'For points (1,2) and (4,8): m = (8-2)/(4-1) = 2'
    }
  ],
  calculus: [
    {
      name: 'Power Rule',
      formula: 'd/dx(xⁿ) = nx^(n-1)',
      explanation: 'Derivative of a variable raised to a power',
      example: 'd/dx(x³) = 3x²'
    },
    {
      name: 'Chain Rule',
      formula: 'd/dx[f(g(x))] = f\'(g(x)) · g\'(x)',
      explanation: 'Derivative of a composite function',
      example: 'd/dx(sin(x²)) = 2x·cos(x²)'
    }
  ],
  geometry: [
    {
      name: 'Circle Area',
      formula: 'A = πr²',
      explanation: 'Area of a circle with radius r',
      example: 'For r=5, A=78.54 square units'
    },
    {
      name: 'Sphere Volume',
      formula: 'V = (4/3)πr³',
      explanation: 'Volume of a sphere with radius r',
      example: 'For r=3, V=113.1 cubic units'
    }
  ]
};

function MathFormulas() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Mathematical Formulas
      </Typography>
      
      {Object.entries(mathFormulas).map(([category, formulas]) => (
        <Box key={category} sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ textTransform: 'capitalize', mb: 2 }}>
            {category}
          </Typography>
          
          {formulas.map((formula, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{formula.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {formula.formula}
                </Typography>
                <Typography paragraph>
                  {formula.explanation}
                </Typography>
                <Typography>
                  <strong>Example:</strong> {formula.example}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default MathFormulas;