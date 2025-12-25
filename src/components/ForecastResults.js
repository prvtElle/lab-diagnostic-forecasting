import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ForecastResults({ historicalData, predictions }) {
  // Prepare data for chart: historical + predictions
  const chartData = [];

  // Add historical data
  historicalData.forEach((row, index) => {
    chartData.push({
      month: row.month,
      historical: row.totalTests,
      predicted: null
    });
  });

  // Add predictions
  predictions.forEach((pred, index) => {
    const monthIndex = historicalData.length + index;
    const monthName = `Month ${monthIndex + 1}`;
    chartData.push({
      month: monthName,
      historical: null,
      predicted: pred
    });
  });

  return (
    <div>
      <h2>Forecast Results</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="historical" stroke="#8884d8" name="Historical" />
          <Line type="monotone" dataKey="predicted" stroke="#82ca9d" name="Predicted" />
        </LineChart>
      </ResponsiveContainer>
      <h3>Predicted Values for Next Year:</h3>
      <ul>
        {predictions.map((pred, index) => (
          <li key={index}>Month {historicalData.length + index + 1}: {pred} tests</li>
        ))}
      </ul>
    </div>
  );
}

export default ForecastResults;
