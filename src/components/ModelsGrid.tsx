import { Card, CardContent } from '@/components/ui/card';
import supraImg from '@/assets/supra-hello-kitty-hero.jpg';
import skylineImg from '@/assets/skyline-r34.jpg';
import gtrImg from '@/assets/gtr-r35.jpg';
import rx7Img from '@/assets/rx7-fd.jpg';

const ModelsGrid = () => {
const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const tocarSom = (sound: string) => {
    
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    const newAudio = new Audio(sound);
    currentAudioRef.current = newAudio;
    newAudio.play();
  };
const models = [
  {
    name: 'Skyline R34',
    engine: 'RB26DETT I6 Twin Turbo',
    power: '325-507+ cv',
    image: skylineImg,
    color: 'primary',
    alt: 'Nissan Skyline R34 GT-R vista lateral com luzes traseiras características',
    sound: '/skyline.mp3', // 🔊 Caminho do som
  },
  {
    name: 'GTR R35',
    engine: 'VR38DETT V6 Twin Turbo',
    power: '730 cv',
    image: gtrImg,
    color: 'secondary',
    alt: 'Nissan GTR R35 com acabamento preto fosco e kit aerodinâmico',
    sound: '/gtr.mp3', // 🔊
  },
  {
    name: 'Supra MK4 HK',
    engine: '2JZ-GTE I6 Twin Turbo',
    power: '690 cv',
    image: supraImg,
    color: 'accent',
    alt: 'Toyota Supra MK4 Hello Kitty edição especial rosa perolada',
    sound: '/supraa.mp3', // 🔊
  },
  {
    name: 'RX-7 FD',
    engine: '13B-REW Twin Rotor',
    power: '456+ cv',
    image: rx7Img,
    color: 'primary',
    alt: 'Mazda RX-7 FD com motor rotativo e stance agressivo',
    sound: '/rx7.mp3', // 🔊
  },
];


  const glowClass = {
    primary: 'hover:card-glow-primary',
    secondary: 'hover:card-glow-secondary',
    accent: 'hover:card-glow-accent',
  };




  return (
    <section id="modelos" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-glow-primary">
            Modelos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lendas japonesas com especificações de alta performance e modificações técnicas avançadas
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <Card
            onClick={() => tocarSom(model.sound)}
              key={model.name}
              className={`group glass-effect border-border/50 overflow-hidden transition-all duration-300 ${glowClass[model.color as keyof typeof glowClass]} cursor-pointer animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={model.image}
                  alt={model.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
                  {model.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {model.engine}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Potência</span>
                  <span className="text-lg font-display font-bold text-primary">
                    {model.power}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsGrid;
