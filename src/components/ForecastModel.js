import React, { useState } from 'react';
import { trainModel, predict } from '../utils/forecastModel';

function ForecastModel({ data, onPredictions }) {
  const [isTraining, setIsTraining] = useState(false);

  const handleTrainAndPredict = async () => {
    if (data.length < 2) {
      alert('Please provide at least 2 months of data.');
      return;
    }

    setIsTraining(true);
    try {
      const model = await trainModel(data);
      const predictions = predict(model, data.length);
      onPredictions(predictions);
    } catch (error) {
      console.error('Error training model:', error);
      alert('Error training model. Please check console for details.');
    } finally {
      setIsTraining(false);
    }
  };

  return (
    <div>
      <h2>Train Model and Forecast</h2>
      <button onClick={handleTrainAndPredict} disabled={isTraining}>
        {isTraining ? 'Training...' : 'Train Model and Predict Next Year'}
      </button>
    </div>
  );
}

export default ForecastModel;
