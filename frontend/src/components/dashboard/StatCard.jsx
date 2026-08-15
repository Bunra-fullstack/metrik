function StatCard({ label, value, change }) {
  const isPositive = change && change.startsWith('+');

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
      <p className="text-gray-400 text-sm mb-2">{label}</p>
      <div className="flex items-end justify-between">
        <p className="text-white text-3xl font-bold">{value}</p>
        {change && (
          <span
            className={`text-sm font-medium ${
              isPositive ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {change}
          </span>
        )}
      </div>
    </div>
  );
}

export default StatCard;
