import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const physicsFormulas = {
  mechanics: [
    {
      name: 'Newton\'s Second Law',
      formula: 'F = ma',
      explanation: 'Force equals mass times acceleration',
      example: 'A 2kg mass accelerating at 5 m/s² experiences a force of 10N'
    },
    {
      name: 'Kinetic Energy',
      formula: 'KE = ½mv²',
      explanation: 'Energy of motion, where m is mass and v is velocity',
      example: 'A 1kg object moving at 2 m/s has KE = 2 Joules'
    }
  ],
  thermodynamics: [
    {
      name: 'Heat Transfer',
      formula: 'Q = mcΔT',
      explanation: 'Heat energy transfer, where c is specific heat capacity',
      example: 'Heating 1kg of water by 10°C requires 41,840 Joules'
    },
    {
      name: 'Ideal Gas Law',
      formula: 'PV = nRT',
      explanation: 'Relates pressure, volume, moles, and temperature of a gas',
      example: 'At constant T and n, doubling P halves V'
    }
  ],
  waves: [
    {
      name: 'Wave Speed',
      formula: 'v = fλ',
      explanation: 'Wave velocity equals frequency times wavelength',
      example: 'A wave with f=2Hz and λ=3m has v=6 m/s'
    },
    {
      name: 'Doppler Effect',
      formula: 'f = f₀(v ± v_o)/(v ± v_s)',
      explanation: 'Frequency change due to relative motion',
      example: 'A moving source causes frequency shifts'
    }
  ]
};

function PhysicsFormulas() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Physics Formulas
      </Typography>
      
      {Object.entries(physicsFormulas).map(([category, formulas]) => (
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

export default PhysicsFormulas;