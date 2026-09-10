import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ProblemSection from '@/components/ProblemSection';
import DocumentsGrid from '@/components/DocumentsGrid';
import ProcessSteps from '@/components/ProcessSteps';
import Benefits from '@/components/Benefits';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <DocumentsGrid />
        <ProcessSteps />
        <Benefits />
        <PricingSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
