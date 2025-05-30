import React, { useState } from 'react';
import { Container, Tabs, Tab, Box } from '@mui/material';
import MathCalculator from '../components/Calculator/MathCalculator';
import PhysicsCalculator from '../components/Calculator/PhysicsCalculator';
import ChemistryCalculator from '../components/Calculator/ChemistryCalculator';

function CalculatorPage() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={currentTab} onChange={handleTabChange} centered>
          <Tab label="Mathematics" />
          <Tab label="Physics" />
          <Tab label="Chemistry" />
        </Tabs>
      </Box>

      <Box sx={{ mt: 2 }}>
        {currentTab === 0 && <MathCalculator />}
        {currentTab === 1 && <PhysicsCalculator />}
        {currentTab === 2 && <ChemistryCalculator />}
      </Box>
    </Container>
  );
}

export default CalculatorPage;