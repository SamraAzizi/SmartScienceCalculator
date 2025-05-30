import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={location.pathname} centered>
        <Tab label="Mathematics" value="/" component={Link} to="/" />
        <Tab label="Physics" value="/physics" component={Link} to="/physics" />
        <Tab label="Chemistry" value="/chemistry" component={Link} to="/chemistry" />
        <Tab label="Unit Converter" value="/converter" component={Link} to="/converter" />
        

      </Tabs>
    </Box>
  );
}

export default Navigation;