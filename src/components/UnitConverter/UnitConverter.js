import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function UnitConverter() {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const unitCategories = {
    length: ['meters', 'kilometers', 'miles', 'feet'],
    mass: ['grams', 'kilograms', 'pounds', 'ounces'],
    temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
    time: ['seconds', 'minutes', 'hours', 'days']
  };

  const conversionFactors = {
    length: {
      meters: 1,
      kilometers: 0.001,
      miles: 0.000621371,
      feet: 3.28084
    },
    // Add other conversion factors here
  };

  const handleConvert = () => {
    if (!fromUnit || !toUnit || !value) return;

    let result;
    if (category === 'temperature') {
      // Special handling for temperature conversions
      result = convertTemperature(parseFloat(value), fromUnit, toUnit);
    } else {
      // Standard conversion using factors
      const baseValue = value / conversionFactors[category][fromUnit];
      result = baseValue * conversionFactors[category][toUnit];
    }

    setResult(`${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`);
  };

  const convertTemperature = (value, from, to) => {
    let celsius;
    // Convert to Celsius first
    switch(from) {
      case 'Celsius': celsius = value; break;
      case 'Fahrenheit': celsius = (value - 32) * 5/9; break;
      case 'Kelvin': celsius = value - 273.15; break;
    }
    // Convert from Celsius to target unit
    switch(to) {
      case 'Celsius': return celsius;
      case 'Fahrenheit': return (celsius * 9/5) + 32;
      case 'Kelvin': return celsius + 273.15;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Unit Converter
        </Typography>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => {
              setCategory(e.target.value);
              setFromUnit('');
              setToUnit('');
              setResult('');
            }}
          >
            {Object.keys(unitCategories).map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>From Unit</InputLabel>
          <Select
            value={fromUnit}
            label="From Unit"
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {unitCategories[category].map((unit) => (
              <MenuItem key={unit} value={unit}>{unit}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>To Unit</InputLabel>
          <Select
            value={toUnit}
            label="To Unit"
            onChange={(e) => setToUnit(e.target.value)}
          >
            {unitCategories[category].map((unit) => (
              <MenuItem key={unit} value={unit}>{unit}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          margin="normal"
        />

        <Button
          variant="contained"
          onClick={handleConvert}
          sx={{ mt: 2 }}
        >
          Convert
        </Button>

        {result && (
          <Typography variant="h6" sx={{ mt: 2 }}>
            {result}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default UnitConverter;