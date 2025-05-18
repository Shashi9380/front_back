import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } else {
      alert('Invalid login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <input className="p-2 m-2 border" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input className="p-2 m-2 border" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Login</button>
    </div>
  );
}

export default LoginPage;
