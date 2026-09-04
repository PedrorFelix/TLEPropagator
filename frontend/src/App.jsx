// frontend/src/App.jsx
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hello/')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error connecting to Django:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>React + Django App</h1>
      {loading ? <p>Loading backend...</p> : <p>Response: <strong>{message}</strong></p>}
    </div>
  );
}

export default App;