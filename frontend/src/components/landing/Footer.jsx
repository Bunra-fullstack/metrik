function Footer() {
  const linkColumns = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Dashboard", "Integrations"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Support", "Privacy Policy", "Terms of Service"]
    }
  ]

  return (
    <footer id="about" className="w-full bg-gray-900 border-t border-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">

          {/* Logo + tagline */}
          <div className="max-w-xs">
            <div className="text-white text-2xl font-bold tracking-tight mb-3">
              Metr<span className="text-indigo-500">ik</span>
            </div>
            <p className="text-gray-400 text-sm">
              Clear, real-time insights into your business metrics — no complexity, just answers.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {linkColumns.map((column, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold text-sm mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Metrik. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built by Bunra
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer