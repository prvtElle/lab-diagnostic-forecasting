# Laboratory Diagnostic Forecasting System - TODO

## Completed Tasks
- [x] Install @tensorflow/tfjs dependency (attempted, may need manual install due to network issues)
- [x] Create InputForm component: Table for inputting historical data (month/year, total tests, CBC, Urinalysis, Fecalysis)
- [x] Create forecastModel.js in utils: Functions for training TensorFlow.js model and predicting next 12 months
- [x] Update ForecastModel component: Integrate with utils functions for training and prediction
- [x] Create ForecastResults component: Display past trends and future forecasts with recharts LineChart
- [x] Update App.js: Integrate all components for full app flow

## Remaining Tasks
- [ ] Test the app locally (run npm start, ensure components render, train model, display results)
- [ ] Ensure TensorFlow.js is properly installed (manual install if needed)
- [ ] Verify predictions are reasonable (check model accuracy)
- [ ] Add error handling for insufficient data or model training failures
- [ ] Optimize model (consider more advanced time-series models like LSTM if simple linear regression is insufficient)

## Notes
- Assumed TensorFlow.js is available; code written accordingly
- Used recharts for visualizations as it's already in dependencies
- Model currently predicts total tests; can extend to multivariate forecasting for individual test types
