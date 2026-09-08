const footerLinks = {
  Product: [
    { label: 'Features', href: '#features', external: false },
    { label: 'Pricing', href: '#pricing', external: false },
  ],
  Connect: [
    {
      label: 'GitHub',
      href: 'https://github.com/Bunra-fullstack/metrik',
      external: true,
    },
    { label: 'Email', href: 'mailto:bunrahoeun@gmail.com', external: true },
  ],
  Legal: [
    { label: 'Privacy', comingSoon: true },
    { label: 'Terms', comingSoon: true },
    { label: 'Blog', comingSoon: true },
  ],
};

function FooterLink({ item }) {
  if (item.comingSoon) {
    return (
      <span
        className="text-gray-600 text-sm cursor-not-allowed"
        title="Coming soon"
      >
        {item.label}
      </span>
    );
  }

  return (
    <a
      href={item.href}
      {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
      className="text-gray-400 hover:text-white text-sm transition-colors"
    >
      {item.label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-white font-bold text-lg">Metrik</span>
            <p className="text-gray-500 text-sm mt-2">
              Analytics dashboard for tracking what matters.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-gray-300 text-sm font-semibold mb-3">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} Metrik. Built by{' '}
            <a
              href="https://github.com/Bunra-fullstack/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Bunra
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
