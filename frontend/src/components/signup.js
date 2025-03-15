import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Patient', // Default role
    password: '',
  });

  // State to handle errors
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.phone || !formData.role || !formData.password) {
      setError('All fields are required');
      return;
    }

    try {
      // Send POST request to the backend
      const response = await axios.post('http://localhost:5000/signup', formData);

      // Handle success response
      console.log('Signup successful:', response.data);
      alert('Signup successful!');
      setError('');

      // Reset form data after successful signup
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'Patient',
        password: '',
      });

      // Redirect the user to the login page
      window.location.href = '/login';
    } catch (err) {
      // Handle error response
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        {error && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {['name', 'email', 'phone', 'password'].map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === 'password' ? 'password' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Patient">Patient</option>
              <option value="Caregiver">Caregiver</option>
              <option value="Professional">Professional</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
