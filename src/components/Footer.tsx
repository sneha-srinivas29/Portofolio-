const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sneha Srinivas. All rights reserved.
      </p>
      <p className="text-sm text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        Built with React + TypeScript
      </p>
    </div>
  </footer>
);

export default Footer;
