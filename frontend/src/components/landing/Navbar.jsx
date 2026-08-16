import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-tight">
          Metr<span className="text-indigo-500">ik</span>
        </div>

        {/* Nav Links — desktop only */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            About
          </a>
        </div>

        {/* Buttons — desktop only */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger icon — mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-2">
          <a
            href="#features"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            About
          </a>
          <Link
            to="/login"
            className="text-gray-400 hover:text-white text-sm text-left transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
