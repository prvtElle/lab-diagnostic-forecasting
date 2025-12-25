import React, { useState } from 'react';

function InputForm({ onDataSubmit }) {
  const [data, setData] = useState([
    { month: 'January 2023', totalTests: 1300, cbc: 800, urinalysis: 200, fecalysis: 300 },
    { month: 'February 2023', totalTests: 1500, cbc: 1000, urinalysis: 300, fecalysis: 200 }
  ]);

  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = Number(value);
    setData(newData);
  };

  const addRow = () => {
    setData([...data, { month: '', totalTests: 0, cbc: 0, urinalysis: 0, fecalysis: 0 }]);
  };

  const handleSubmit = () => {
    onDataSubmit(data);
  };

  return (
    <div>
      <h2>Input Historical Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Month/Year</th>
            <th>Total Tests</th>
            <th>CBC</th>
            <th>Urinalysis</th>
            <th>Fecalysis</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.month}
                  onChange={(e) => handleChange(index, 'month', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.totalTests}
                  onChange={(e) => handleChange(index, 'totalTests', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.cbc}
                  onChange={(e) => handleChange(index, 'cbc', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.urinalysis}
                  onChange={(e) => handleChange(index, 'urinalysis', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.fecalysis}
                  onChange={(e) => handleChange(index, 'fecalysis', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <button onClick={handleSubmit}>Submit Data</button>
    </div>
  );
}

export default InputForm;
