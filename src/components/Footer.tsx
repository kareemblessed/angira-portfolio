const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Ronan Angira • AI/ML Engineer & Automation Specialist
        </p>
      </div>
    </footer>
  );
};

export default Footer;
