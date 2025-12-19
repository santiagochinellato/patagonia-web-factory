import { Navbar } from './_components/Navbar';
import { Hero } from './_components/Hero';
import { FeatureGrid } from './_components/FeatureGrid';
import { ConnectivitySection } from './_components/ConnectivitySection';
import { TrustSection } from './_components/TrustSection';

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <TrustSection />
      <ConnectivitySection />
    </main>
  );
}
