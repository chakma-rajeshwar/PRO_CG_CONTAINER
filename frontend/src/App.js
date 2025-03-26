import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    axios.get('http://backend:3000')
      .then(response => setMessage(response.data))
      .catch(error => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div className="app">
      <h1>PRO_CG Frontend</h1>
      <p>Backend response: {message}</p>
    </div>
  );
}

export default App;
