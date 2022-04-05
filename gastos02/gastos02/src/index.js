import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BudgetProvider } from './contexts/BudgetContext';

ReactDOM.render(
  <React.StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

