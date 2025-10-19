import { Instagram, Twitter, Youtube, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/bruno.4mz?igsh=NDU2ZW0waWJxeWJk', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/Brunogustavo74/neon-drive-specs-52618', label: 'GitHub' },
  ];

  const footerLinks = [
    { label: 'Sobre', href: '#' },
    { label: 'Modelos', href: '#modelos' },
    { label: 'Especificações', href: '#specs' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary text-glow-primary mb-4">
              JDM LEGENDS
            </h3>
            <p className="text-sm text-muted-foreground">
              Especificações técnicas e fotografia automotiva de carros japoneses modificados.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-muted-foreground hover:text-primary hover:card-glow-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 JDM Legends. Todos os direitos reservados.</p>
            <p>
              Imagens: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Unsplash</a> / 
              <a href="https://pexels.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary ml-1">Pexels</a> / 
              <span className="ml-1">Geradas com IA</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
