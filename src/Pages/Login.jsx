import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="logincontainer">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg innerlogincontainer">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign in to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 border rounded-md"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-2 border rounded-md"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 text-white rounded-md submitbutton">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;