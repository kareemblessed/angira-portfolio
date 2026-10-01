import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container flex max-w-6xl flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.role}, {profile.location}
        </p>
        <a href="#home" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
          Back to top
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
