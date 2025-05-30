import React, { useState } from 'react';
import { Container, Tabs, Tab, Box } from '@mui/material';
import MathFormulas from '../components/FormulaLibrary/MathFormulas';
import PhysicsFormulas from '../components/FormulaLibrary/PhysicsFormulas';
import ChemistryFormulas from '../components/FormulaLibrary/ChemistryFormulas';

function FormulasPage() {
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
        {currentTab === 0 && <MathFormulas />}
        {currentTab === 1 && <PhysicsFormulas />}
        {currentTab === 2 && <ChemistryFormulas />}
      </Box>
    </Container>
  );
}

export default FormulasPage;