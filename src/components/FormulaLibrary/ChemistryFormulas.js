import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const chemistryFormulas = {
  stoichiometry: [
    {
      name: 'Molarity',
      formula: 'M = moles of solute / liters of solution',
      explanation: 'Concentration of a solution in moles per liter',
      example: '2 moles in 1L = 2M solution'
    },
    {
      name: 'Percent Composition',
      formula: '% composition = (mass of element / total mass) × 100',
      explanation: 'Percentage of each element in a compound',
      example: 'In H₂O: H is 11.19%, O is 88.81%'
    }
  ],
  thermochemistry: [
    {
      name: 'Enthalpy Change',
      formula: 'ΔH = ΣH(products) - ΣH(reactants)',
      explanation: 'Heat energy change in a reaction',
      example: 'Exothermic reaction: ΔH < 0'
    },
    {
      name: 'Gibbs Free Energy',
      formula: 'ΔG = ΔH - TΔS',
      explanation: 'Determines reaction spontaneity',
      example: 'Spontaneous reaction: ΔG < 0'
    }
  ],
  kinetics: [
    {
      name: 'Rate Law',
      formula: 'rate = k[A]ᵃ[B]ᵇ',
      explanation: 'Reaction rate depends on concentrations',
      example: 'First order: rate = k[A]'
    },
    {
      name: 'Half-Life',
      formula: 't₁/₂ = ln(2)/k',
      explanation: 'Time for concentration to halve',
      example: 'k = 0.693/t₁/₂'
    }
  ]
};

function ChemistryFormulas() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Chemistry Formulas
      </Typography>
      
      {Object.entries(chemistryFormulas).map(([category, formulas]) => (
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

export default ChemistryFormulas;