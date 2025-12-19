import { Navbar } from './_components/Navbar';
import { Hero } from './_components/Hero';
import { FeatureGrid } from './_components/FeatureGrid';
import { ConnectivitySection } from './_components/ConnectivitySection';
import { TrustSection } from './_components/TrustSection';
import { ContactSection } from './_components/ContactSection';
import { FloatingCTA } from './_components/FloatingCTA';
import { Footer } from './_components/Footer';

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <ConnectivitySection />
      <TrustSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
