function Navbar() {
  return (
    <nav className="w-full bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-tight">
          Metr<span className="text-indigo-500">ik</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-400 hover:text-white text-sm transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">
            About
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-white text-sm transition-colors">
            Login
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar