import { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        retypePassword: '',
        email: ''
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
    <div className="container mx-auto mt-10">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-6 text-center">Register</h1>
                
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                        {/* Username */}
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className="w-full p-2 border rounded-md"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="w-full p-2 border rounded-md"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="w-full p-2 border rounded-md"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Department */}
<div className="mb-4">
    <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">Department</label>
    <select 
        name="department" 
        id="department" 
        className="w-full p-2 border rounded-md"
        value={formData.department}
        onChange={handleChange}
    >
        <option value="">Select a department</option>
        <option value="crime">Crime</option>
        <option value="crime">Cyber</option>
        <option value="crime">Police</option>
        <option value="crime">Traffic</option>
        {/* Add more options as needed */}
    </select>
</div>

                    {/* Submit Button */}
                    <div className="mb-4">
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Register</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Register