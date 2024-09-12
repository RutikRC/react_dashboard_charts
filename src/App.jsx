import React from 'react';
import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';

const App = () => {
  return (
    <div className="App">
      <div className="dataCard revenueCard">
        <LineChart />
      </div>

      <div className="dataCard customerCard">
        <BarChart />
      </div>

      <div className="dataCard categoryCard">
        <DoughnutChart />
      </div>
    </div>
  );
};

export default App;
