# Smart Science Calculator

A comprehensive web application that serves as a smart calculator for mathematics, physics, and chemistry problems. This application provides step-by-step solutions, formula libraries, and unit conversions to help students and professionals solve scientific problems efficiently.

## Features

### 1. Smart Calculators
- **Math Calculator**: Solves algebraic expressions, calculus problems, and geometric calculations
- **Physics Calculator**: Handles mechanics, energy, waves, thermodynamics, and electricity problems
- **Chemistry Calculator**: Balances chemical equations and solves stoichiometry problems

### 2. Formula Libraries
- **Mathematics**: Comprehensive collection of formulas for algebra, calculus, geometry, trigonometry, and statistics
- **Physics**: Formulas covering mechanics, energy, waves, thermodynamics, and electricity
- **Chemistry**: Formulas for stoichiometry, thermodynamics, kinetics, equilibrium, and electrochemistry

### 3. Unit Converter
- Convert between different units of measurement:
  - Length (m, km, cm, mm, mi, yd, ft, in)
  - Mass (kg, g, mg, lb, oz)
  - Temperature (°C, °F, K)
  - Time (s, min, h, d)
  - Volume (L, mL, m³, gal, fl oz)
  - Energy (J, kJ, cal, kcal, eV)

### 4. Step-by-Step Solutions
- Detailed explanations for problem-solving steps
- Visual representations where applicable
- Practice problems with solutions

## Technology Stack

- **Frontend**: React.js with Material-UI
- **Key Libraries**:
  - `@mui/material`: UI components
  - `mathjs`: Mathematical computations
  - `react-latex`: LaTeX rendering
  - `axios`: HTTP client

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```
2. Navigate to the project directory

```bash
cd my-app
```

3. Install dependencies:
Install Material UI and its dependencies:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```
Install React Router:

```bash
npm install react-router-dom
```
Install MathJS:
```bash
npm install mathjs
```

4. Start the development server:
```bash
npm start
```


5. Open `http://localhost:3000` to view it in your browser.


6. Project Structure
```bash

my-app/
├── public/
│   └── index.html
│
├── src/
│
│   ├── components/
│   │   ├── Calculator/
│   │   │   ├── MathCalculator.js
│   │   │   ├── PhysicsCalculator.js
│   │   │   └── ChemistryCalculator.js
│   │   ├── FormulaLibrary/
│   │   │   ├── MathFormulas.js
│   │   │   ├── PhysicsFormulas.js
│   │   │   └── ChemistryFormulas.js
│   │   ├── UnitConverter/
│   │   │   └── UnitConverter.js
│   │   └── Common/
│   │       ├── Header.js
│   │       ├── Navigation.js
│   │       └── StepByStepSolution.js
│
│   ├── pages/
│   │   ├── Home.js
│   │   ├── CalculatorPage.js
│   │   ├── FormulasPage.js
│   │   ├── ConverterPage.js
│   │   ├── PhysicsPage.js
│   │   └── ChemistryPage.js
│
│   ├── services/
│   │   ├── mathService.js
│   │   ├── physicsService.js
│   │   └── chemistryService.js
│
│   ├── utils/
│   │   ├── formulaUtils.js
│   │   └── unitConversionUtils.js
│
│   ├── constants/
│   │   ├── units.js
│   │   └── formulaNames.js
│
│   ├── styles/
│   │   ├── App.css
│   │   └── Calculator.css
│
│   ├── App.js
│   └── index.js
│
├── README.md
├── package.json
└── .gitignore
```