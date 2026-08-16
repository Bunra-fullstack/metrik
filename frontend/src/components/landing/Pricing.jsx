import { Link } from 'react-router-dom';

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '/month',
      description: 'For individuals just getting started',
      features: ['Up to 3 dashboards', 'Basic analytics', 'Community support'],
      highlighted: false,
      buttonText: 'Get Started',
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For growing teams that need more',
      features: [
        'Unlimited dashboards',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
      ],
      highlighted: true,
      buttonText: 'Start Free Trial',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations at scale',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
      ],
      highlighted: false,
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="w-full bg-gray-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Choose the plan that fits your team. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 border ${
                plan.highlighted
                  ? 'bg-indigo-600 border-indigo-500 scale-105'
                  : 'bg-gray-800 border-gray-700'
              }`}
            >
              <h3 className="text-white text-xl font-semibold mb-1">
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${plan.highlighted ? 'text-indigo-200' : 'text-gray-400'}`}
              >
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${plan.highlighted ? 'text-indigo-200' : 'text-gray-400'}`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span
                      className={
                        plan.highlighted ? 'text-indigo-200' : 'text-indigo-500'
                      }
                    >
                      ✓
                    </span>
                    <span
                      className={
                        plan.highlighted ? 'text-white' : 'text-gray-300'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/signup"
                className={`block text-center w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-indigo-600 hover:bg-gray-100'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
