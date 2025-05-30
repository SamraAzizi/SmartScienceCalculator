import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import Header from './components/Common/Header';
import Navigation from './components/Common/Navigation';

// Pages
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import FormulasPage from './pages/FormulasPage';
import ConverterPage from './pages/ConverterPage';
import PhysicsPage from './pages/PhysicsPage';
import ChemistryPage from './pages/ChemistryPage';
// Styles
import './styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app-container">
          <Header />
          <Navigation />
          <main className="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/formulas" element={<FormulasPage />} />
              <Route path="/converter" element={<ConverterPage />} />
              <Route path="/physics" element={<PhysicsPage />} />
              <Route path="/chemistry" element={<ChemistryPage />} />

            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;