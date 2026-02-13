import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Diferencial", href: "#diferencial" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          Filtr<span className="text-gradient">AI</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="bg-gradient-hero text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity">
            Solicitar Demo
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="bg-gradient-hero text-primary-foreground font-semibold w-full">
              Solicitar Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
