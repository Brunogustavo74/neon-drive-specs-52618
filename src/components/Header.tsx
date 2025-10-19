import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Modelos', href: '#modelos' },
    { label: 'Especificações', href: '#specs' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-display font-bold text-primary text-glow-primary">
            JDM LEGENDS
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
         
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

  {isMenuOpen && (
  <div className="md:hidden fixed inset-0 z-40  border-t border-border/50 top-[600%]">
    <div className="flex flex-col items-center justify-center h-full gap-8">
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => scrollToSection(item.href)}
          className="text-2xl font-display text-foreground hover:text-primary transition-colors duration-200"
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
)}
      </nav>
    </header>
  );
};

export default Header;
