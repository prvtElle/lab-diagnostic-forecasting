import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ForecastModel from './components/ForecastModel';
import ForecastResults from './components/ForecastResults';

function App() {
  const [historicalData, setHistoricalData] = useState([]);
  const [predictions, setPredictions] = useState([]);

  const handleDataSubmit = (data) => {
    setHistoricalData(data);
  };

  const handlePredictions = (preds) => {
    setPredictions(preds);
  };

  return (
    <div className="App">
      <h1>Laboratory Diagnostic Forecasting System</h1>
      <InputForm onDataSubmit={handleDataSubmit} />
      {historicalData.length > 0 && (
        <ForecastModel data={historicalData} onPredictions={handlePredictions} />
      )}
      {predictions.length > 0 && (
        <ForecastResults historicalData={historicalData} predictions={predictions} />
      )}
    </div>
  );
}

export default App;
