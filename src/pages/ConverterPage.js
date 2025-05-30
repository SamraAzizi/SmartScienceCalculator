import React from 'react';
import { Container, Typography } from '@mui/material';
import UnitConverter from '../components/UnitConverter/UnitConverter';

function ConverterPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Unit Converter
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
        Convert between different units of measurement
      </Typography>
      
      <UnitConverter />
    </Container>
  );
}

export default ConverterPage;