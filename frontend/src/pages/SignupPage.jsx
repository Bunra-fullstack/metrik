import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await api.post('/auth/signup', {
        name,
        email,
        password,
      });
      const { token, ...userData } = response.data;
      login(userData, token);
      setError('');
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <Link to="/" className="block text-center mb-8">
          <span className="text-white text-2xl font-bold tracking-tight">
            Metr<span className="text-indigo-500">ik</span>
          </span>
        </Link>

        {/* Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
          <h1 className="text-white text-xl font-semibold mb-6 text-center">
            Create your account
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name field */}
            <div>
              <label className="text-gray-400 text-sm block mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Email field */}
            <div>
              <label className="text-gray-400 text-sm block mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Password field */}
            <div>
              <label className="text-gray-400 text-sm block mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Confirm Password field */}
            <div>
              <label className="text-gray-400 text-sm block mb-1.5">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Error message */}
            {error && <p className="text-red-400 text-sm">{error}</p>}

            {/* Submit button */}
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-colors mt-2"
            >
              Sign Up
            </button>
          </form>

          {/* Login link */}
          <p className="text-gray-400 text-sm text-center mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-400 hover:text-indigo-300">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
