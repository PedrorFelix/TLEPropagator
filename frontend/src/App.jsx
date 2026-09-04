// frontend/src/App.jsx
import { useEffect, useState } from 'react';
import Globe from './components/Globe';

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
    <div style={{ width: '100vw', height: '100vh' }}>
      <Globe />
    </div>
  );
}

export default App;