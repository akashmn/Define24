import { useState } from 'react';
import { FaLock, FaEnvelope, FaUser, FaBuilding } from 'react-icons/fa'; // Importing icons

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#F6F6F6', backgroundImage: 'linear-gradient(to right, #eee 1px, transparent 1px), linear-gradient(to bottom, #eee 1px, transparent 1px)', backgroundSize: '70px 70px'}}>
      <div className="max-w-md w-full space-y-6 bg-white p-8 border border-gray-200 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Add Admin
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <div className="flex items-center px-3 py-2 border border-gray-300 rounded-t-md">
                <FaUser className="text-gray-500" /> {/* User icon */}
                <input id="name" name="name" type="text" required className="ml-3 block w-full placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Name" value={formData.name} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="flex items-center px-3 py-2 border border-gray-300">
                <FaEnvelope className="text-gray-500" /> {/* Email icon */}
                <input id="email" name="email" type="email" required className="ml-3 block w-full placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Email" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="flex items-center px-3 py-2 border border-gray-300">
                <FaLock className="text-gray-500" /> {/* Password icon */}
                <input id="password" name="password" type="password" required className="ml-3 block w-full placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Password" value={formData.password} onChange={handleChange} />
              </div>
            </div>
            <div>
                <label htmlFor="department" className="sr-only">Department</label>
                <div className="flex items-center px-3 py-2 border border-gray-300 rounded-b-md">
                    <FaBuilding className="text-gray-500" /> {/* Department icon */}
                        <select id="department" name="department" required className="ml-3 block w-full placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.department} onChange={handleChange}>
                            <option value="">Select department</option>
                            <option value="Police">Police </option>
                            <option value="Traffic-Rules">Traffic Rules</option>
                            <option value="Cyber-attack">Cyber attack</option>
                            <option value="Bulliying">Bulliying</option>
                            {/* Add more options as needed */}
                        </select>
                </div>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#816cdf] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;