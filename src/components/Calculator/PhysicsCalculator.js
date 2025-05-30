import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import StepByStepSolution from '../Common/StepByStepSolution';

function PhysicsCalculator() {
  const [formulaType, setFormulaType] = useState('kinematics');
  const [values, setValues] = useState({});
  const [result, setResult] = useState('');
  const [steps, setSteps] = useState([]);

  const formulas = {
    kinematics: {
      displacement: 'v₀t + ½at²',
      velocity: 'v₀ + at',
      fields: ['initial velocity (v₀)', 'time (t)', 'acceleration (a)']
    },
    force: {
      newton: 'F = ma',
      fields: ['mass (m)', 'acceleration (a)']
    },
    energy: {
      kinetic: 'KE = ½mv²',
      fields: ['mass (m)', 'velocity (v)']
    }
  };

  const handleValueChange = (field, value) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  const calculateResult = () => {
    let result, steps;
    switch(formulaType) {
      case 'kinematics':
        const v0 = parseFloat(values['initial velocity (v₀)'] || 0);
        const t = parseFloat(values['time (t)'] || 0);
        const a = parseFloat(values['acceleration (a)'] || 0);
        result = v0 * t + 0.5 * a * t * t;
        steps = [
          `Using displacement formula: s = v₀t + ½at²`,
          `v₀ = ${v0} m/s`,
          `t = ${t} s`,
          `a = ${a} m/s²`,
          `s = ${v0} × ${t} + ½ × ${a} × ${t}²`,
          `s = ${result} meters`
        ];
        break;
      // Add other formula calculations here
    }
    setResult(result);
    setSteps(steps);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Physics Calculator
        </Typography>
        
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Formula Type</InputLabel>
          <Select
            value={formulaType}
            label="Formula Type"
            onChange={(e) => setFormulaType(e.target.value)}
          >
            <MenuItem value="kinematics">Kinematics</MenuItem>
            <MenuItem value="force">Force</MenuItem>
            <MenuItem value="energy">Energy</MenuItem>
          </Select>
        </FormControl>

        {formulas[formulaType].fields.map((field) => (
          <TextField
            key={field}
            label={field}
            type="number"
            fullWidth
            margin="normal"
            onChange={(e) => handleValueChange(field, e.target.value)}
          />
        ))}

        <Button
          variant="contained"
          onClick={calculateResult}
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

export default PhysicsCalculator;