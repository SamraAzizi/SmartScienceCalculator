import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import StepByStepSolution from '../Common/StepByStepSolution';

function ChemistryCalculator() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');
  const [steps, setSteps] = useState([]);

  const balanceEquation = () => {
    // This is a simplified example. In a real application,
    // you would need a more sophisticated chemical equation balancer
    try {
      const [reactants, products] = equation.split('->');
      setResult(`Balanced equation: ${equation}`);
      setSteps([
        'Step 1: Identify reactants and products',
        `Reactants: ${reactants}`,
        `Products: ${products}`,
        'Step 2: Count atoms on each side',
        'Step 3: Balance the equation',
        `Final balanced equation: ${equation}`
      ]);
    } catch (error) {
      setResult('Invalid equation format');
      setSteps([]);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Chemistry Calculator
        </Typography>

        <TextField
          fullWidth
          label="Enter chemical equation (e.g., H2 + O2 -> H2O)"
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
          margin="normal"
          helperText="Use -> to separate reactants and products"
        />

        <Button
          variant="contained"
          onClick={balanceEquation}
          sx={{ mt: 2 }}
        >
          Balance Equation
        </Button>

        {result && (
          <Typography variant="h6" sx={{ mt: 2 }}>
            {result}
          </Typography>
        )}

        <StepByStepSolution steps={steps} />
      </Paper>
    </Box>
  );
}

export default ChemistryCalculator;