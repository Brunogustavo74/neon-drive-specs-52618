import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      isValid = false;
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Nome deve ter menos de 100 caracteres';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
      isValid = false;
    } else if (formData.email.length > 255) {
      newErrors.email = 'Email deve ter menos de 255 caracteres';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
      isValid = false;
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Mensagem deve ter menos de 1000 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <section id="contato" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-glow-primary">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground">
              Solicite especificações detalhadas ou tire suas dúvidas sobre os modelos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6 animate-scale-in">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-semibold flex items-center gap-2">
                <User className="w-4 h-4" />
                Nome
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="bg-background/50 border-border focus:border-primary"
                placeholder="Seu nome completo"
                maxLength={100}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="bg-background/50 border-border focus:border-primary"
                placeholder="seu@email.com"
                maxLength={255}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-semibold flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Mensagem
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="bg-background/50 border-border focus:border-primary min-h-[150px]"
                placeholder="Digite sua mensagem ou pedido de especificações..."
                maxLength={1000}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message}</p>
              )}
              <p className="text-xs text-muted-foreground text-right">
                {formData.message.length}/1000 caracteres
              </p>
            </div>

            <Button 
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow-primary"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
