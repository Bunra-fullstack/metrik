import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 min-h-screen flex flex-col p-6">
      {/* Logo */}
      <Link
        to="/"
        className="text-white text-2xl font-bold tracking-tight mb-10"
      >
        Metr<span className="text-indigo-500">ik</span>
      </Link>

      {/* Nav links */}
      <nav className="flex flex-col gap-2 flex-1">
        <a
          href="#"
          className="text-white bg-gray-700 rounded-lg px-4 py-2.5 text-sm font-medium"
        >
          Overview
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-2.5 text-sm transition-colors"
        >
          Settings
        </a>
      </nav>

      {/* User info + logout */}
      <div className="border-t border-gray-700 pt-4">
        <p className="text-white text-sm font-medium mb-3">
          {user?.name || 'User'}
        </p>
        <button
          onClick={handleLogout}
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          Log out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
