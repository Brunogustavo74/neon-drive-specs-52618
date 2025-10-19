import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download, FileSpreadsheet } from 'lucide-react';

const SpecsTable = () => {
  const specs = [
  {
    model: 'Supra MK4 HK',
    engine: '2JZ-GTE I6 Twin Turbo',
    power: '690 cv',       // 680 HP → 690 cv
    torque: '740 Nm',
    acceleration: '3,1 s',
    weight: '1.380 kg',
    drivetrain: 'Traseira',
  },
  {
    model: 'Skyline R34',
    engine: 'RB26DETT I6 Twin Turbo',
    power: '426 cv',       // 420 HP → 426 cv
    torque: '450 Nm',
    acceleration: '4,5 s',
    weight: '1.500 kg',
    drivetrain: 'Tração integral',
  },
  {
    model: 'GTR R35',
    engine: 'VR38DETT V6 Twin Turbo',
    power: '730 cv',       // 720 HP → 730 cv
    torque: '780 Nm',
    acceleration: '2,9 s',
    weight: '1.740 kg',
    drivetrain: 'Tração integral',
  },
  {
    model: 'RX-7 FD',
    engine: '13B-REW Twin Rotor',
    power: '456 cv',       // 450 HP → 456 cv
    torque: '420 Nm',
    acceleration: '4,2 s',
    weight: '1.280 kg',
    drivetrain: 'Traseira',
  },
];
  return (
    <section id="specs" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-glow-secondary">
            Especificações Técnicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dados comparativos de performance e engenharia automotiva
          </p>
        </div>

        <div className="glass-effect rounded-2xl p-6 md:p-8 overflow-x-auto animate-scale-in">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="font-display text-foreground">Modelo</TableHead>
                <TableHead className="font-display text-foreground">Motor</TableHead>
                <TableHead className="font-display text-foreground">Potência</TableHead>
                <TableHead className="font-display text-foreground">Torque</TableHead>
                <TableHead className="font-display text-foreground">0-100 km/h</TableHead>
                <TableHead className="font-display text-foreground">Peso</TableHead>
                <TableHead className="font-display text-foreground">Tração</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {specs.map((spec, index) => (
                <TableRow 
                  key={spec.model} 
                  className="border-border/50 hover:bg-muted/30 transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TableCell className="font-display font-semibold text-primary">
                    {spec.model}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{spec.engine}</TableCell>
                  <TableCell className="font-semibold text-secondary">{spec.power}</TableCell>
                  <TableCell className="font-semibold text-accent">{spec.torque}</TableCell>
                  <TableCell>{spec.acceleration}</TableCell>
                  <TableCell>{spec.weight}</TableCell>
                  <TableCell>{spec.drivetrain}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        
       
        </div>
      </div>
    </section>
  );
};

export default SpecsTable;
