import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Scientific Calculator',
      description: 'Advanced mathematical calculations with step-by-step solutions',
      path: '/calculator'
    },
    {
      title: 'Formula Library',
      description: 'Comprehensive collection of mathematical, physical, and chemical formulas',
      path: '/formulas'
    },
    {
      title: 'Unit Converter',
      description: 'Convert between different units of measurement',
      path: '/converter'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Smart Science Calculator
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Your all-in-one scientific assistant for mathematics, physics, and chemistry
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardActionArea onClick={() => navigate(feature.path)}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;