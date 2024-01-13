// frontend/src/App.js
import React, { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState('');
  const [backendResponse, setBackendResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the backend
    const response = await fetch('/api/send-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: inputData }),
    });

    // Get the response from the backend
    const data = await response.json();
    setBackendResponse(data.message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input Data:
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </label>
        <button type="submit">Send Data</button>
      </form>

      <h2>Backend Response: {backendResponse}</h2>
    </div>
  );
}

export default App;
