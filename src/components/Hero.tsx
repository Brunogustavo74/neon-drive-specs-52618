import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Gauge, Zap, Cog } from 'lucide-react';
import supraHero from '@/assets/supra-hello-kitty-hero.jpg';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const tocarSom = () => {
    const audio = new Audio('/supraa.mp3');
    audio.play();
  };

  const specs = [
    { icon: Zap, label: 'Potência', value: '690 Cavalos', subtitle: 'Mapa Estágio 3' },
    { icon: Gauge, label: 'Torque', value: '740 Nm', subtitle: 'Peak @ 5500 RPM' },
    { icon: Cog, label: 'Motor', value: '2JZ-GTE', subtitle: 'I6 Twin Turbo' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Edição Especial
              </span>
            </div>
            
         <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-glow-primary leading-tight">
  Toyota Supra MK4         
  <span className="block text-pink-500 mt-2">Hello Kitty Edition</span>
</h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Seis cilindros em linha de 2.998 cc, componentes internos forjados, turbo twin-scroll 
              de 3 estágios, projetado para potência sustentada em altas rotações.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {specs.map((spec) => (
                <div 
                  key={spec.label}
                  className="glass-effect p-4 rounded-lg hover:card-glow-primary transition-all duration-300"
                >
                  <spec.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="text-xs text-muted-foreground mb-1">{spec.label}</div>
                  <div className="text-xl font-display font-bold text-foreground">{spec.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{spec.subtitle}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
      
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground">0-100 km/h</span>
                <span className="block">3.1s (est.)</span>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div>
                <span className="font-semibold text-foreground">Transmissão</span>
                <span className="block">RWD, LSD Reforçado</span>
              </div>
            </div>
          </div>

          <div 
            ref={imageRef}
            className="relative parallax-layer animate-scale-in"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
          <button onClick={tocarSom}>  <img
              src={supraHero}
              alt="Toyota Supra MK4 Hello Kitty, pintura rosa perolada com bodykit wide e detalhes customizados"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
              loading="eager"
              
            />
            </button>
            <div className="absolute -bottom-6 -right-6 glass-effect p-4 rounded-xl">
              <div className="text-xs text-muted-foreground">Peso</div>
              <div className="text-2xl font-display font-bold text-foreground">1,380 kg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
