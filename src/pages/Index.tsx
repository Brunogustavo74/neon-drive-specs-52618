import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ModelsGrid from '@/components/ModelsGrid';
import SpecsTable from '@/components/SpecsTable';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ModelsGrid />
        <SpecsTable />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
