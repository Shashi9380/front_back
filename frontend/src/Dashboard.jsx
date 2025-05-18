import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/');

    fetch('http://localhost:5000/dashboard', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => navigate('/'));
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">{message}</p>
    </div>
  );
}

export default Dashboard;
