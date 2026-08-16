import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="w-full bg-gray-900 px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          <span className="text-gray-300 text-sm">
            New: Real-time analytics dashboard
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Understand your data
          <br />
          without the complexity
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Metrik gives you clear, real-time insights into your business metrics
          — no spreadsheets, no confusing charts, just answers.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/signup"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </Link>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg border border-gray-700 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
