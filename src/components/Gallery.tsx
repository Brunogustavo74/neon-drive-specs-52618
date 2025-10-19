import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: gallery1,
      alt: 'Detalhe das lanternas traseiras e spoiler do Supra MK4 Hello Kitty',
      title: 'Supra MK4 - Detalhes Traseiros',
      specs: 'Lanternas LED customizadas, spoiler em fibra de carbono',
    },
    {
      src: gallery2,
      alt: 'Motor RB26DETT do Skyline R34 com intercooler polido',
      title: 'R34 - Bay do Motor',
      specs: 'RB26DETT twin turbo, tubulação de intercooler polida',
    },
    {
      src: gallery3,
      alt: 'Mazda RX-7 FD em ação de drift com fumaça roxa',
      title: 'RX-7 FD - Drift Action',
      specs: 'Motor rotativo 13B-REW, setup para drift profissional',
    },
    {
      src: gallery4,
      alt: 'GTR R35 vista frontal três quartos com stance agressivo',
      title: 'GTR R35 - Stance',
      specs: 'Body kit em fibra de carbono, iluminação LED completa',
    },
    {
      src: gallery5,
      alt: 'Coleção de rodas JDM customizadas',
      title: 'Wheels Collection',
      specs: 'Rodas forjadas 18-20", acabamentos chrome e matte',
    },
    {
      src: gallery6,
      alt: 'Interior modificado de JDM com bancos racing e roll cage',
      title: 'Interior Racing',
      specs: 'Bancos Recaro, roll cage completo, painel digital',
    },
  ];

  return (
    <section id="galeria" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-glow-accent">
            Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detalhes técnicos e fotografia automotiva de alta qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer glass-effect hover:card-glow-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{image.specs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
<Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-4xl glass-effect border-primary/20">
            <DialogTitle className="sr-only">
              {selectedImage !== null ? images[selectedImage].title : ''}
            </DialogTitle>
            {selectedImage !== null && (
              <div className="space-y-4">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {images[selectedImage].title}
                  </h3>
                  <p className="text-muted-foreground">{images[selectedImage].specs}</p>
                </div>
              </div>
            )}
      <DialogClose asChild>
  <button
    className="absolute top-4 right-4 p-2 rounded-full glass-effect hover:bg-primary/20 transition-colors"
    aria-label="Fechar galeria"
  >
    <X className="w-5 h-5" />
  </button>
</DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
