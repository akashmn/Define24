import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://refracto-backend.onrender.com/departments/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ adminEmail: email, adminPassword: password })
    });

    const data = await response.json();
    const dataset = data.response

    if (dataset.status === 1) {
      localStorage.setItem("departmentID", dataset.data.departmentID);
      localStorage.setItem("adminName", dataset.data.adminName);
      localStorage.setItem("departmentName", dataset.data.departmentName);
      // history.push('/dashboard');
    }

  };

  return (
    <div className="logincontainer">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg innerlogincontainer">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign in to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              value={email}
              onChange={(e) => setemail(e.target.value)}
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