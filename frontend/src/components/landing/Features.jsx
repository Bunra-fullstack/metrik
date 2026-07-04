function Features() {
  const features = [
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Track your key metrics as they happen, with live updating charts and dashboards."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Built for speed — your data loads instantly, no matter how large your dataset grows."
    },
    {
      icon: "🔒",
      title: "Secure by Default",
      description: "Your data is encrypted and protected with industry-standard authentication."
    }
  ]

  return (
    <section id="features" className="w-full bg-gray-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Powerful features designed to help you make sense of your data, faster.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-indigo-500 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features