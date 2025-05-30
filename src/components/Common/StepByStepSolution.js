import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

function StepByStepSolution({ steps }) {
  if (!steps || steps.length === 0) return null;

  return (
    <Paper elevation={2} sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Solution Steps
      </Typography>
      <List>
        {steps.map((step, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Step ${index + 1}: ${step}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default StepByStepSolution;