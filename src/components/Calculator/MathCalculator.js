import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { evaluate } from 'mathjs';
import StepByStepSolution from '../Common/StepByStepSolution';

function MathCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [steps, setSteps] = useState([]);

  const handleCalculate = () => {
    try {
      const calculatedResult = evaluate(input);
      setResult(calculatedResult);
      
      // Generate steps (simplified example)
      setSteps([
        `Expression: ${input}`,
        `Simplified: ${calculatedResult}`,
        `Result: ${calculatedResult}`
      ]);
    } catch (error) {
      setResult('Error: Invalid expression');
      setSteps([]);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Mathematical Calculator
        </Typography>
        <TextField
          fullWidth
          label="Enter mathematical expression"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          onClick={handleCalculate}
          sx={{ mt: 2 }}
        >
          Calculate
        </Button>
        {result && (
          <Typography variant="h6" sx={{ mt: 2 }}>
            Result: {result}
          </Typography>
        )}
        <StepByStepSolution steps={steps} />
      </Paper>
    </Box>
  );
}

export default MathCalculator;