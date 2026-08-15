import Sidebar from '../components/dashboard/Sidebar';
import StatCard from '../components/dashboard/StatCard';
import { useAuth } from '../context/AuthContext';

function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-white text-2xl font-bold mb-1">
          Welcome back, {user?.name}
        </h1>
        <p className="text-gray-400 mb-8">
          Here's what's happening with your account today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard label="Total Users" value="1,204" change="+12%" />
          <StatCard label="Revenue" value="$8,420" change="+5%" />
          <StatCard label="Active Sessions" value="342" change="-2%" />
        </div>

      </main>
    </div>
  );
}

export default DashboardPage;