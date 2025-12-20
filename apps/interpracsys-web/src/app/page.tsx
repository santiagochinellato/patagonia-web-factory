import { Navbar } from './_components/Navbar';
import { Hero } from './_components/Hero';
import { FeatureGrid } from './_components/FeatureGrid';
import { ConnectivitySection } from './_components/ConnectivitySection';
import { TrustSection } from './_components/TrustSection';
import { ContactSection } from './_components/ContactSection';
import { FloatingCTA } from './_components/FloatingCTA';
import { Footer } from './_components/Footer';
import { client } from '../lib/sanity';
import { SETTINGS_QUERY, LANDING_PAGE_QUERY } from '../lib/queries';
import { IPSettings, IPLandingPage } from '../types/sanity';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Index() {
  const settings: IPSettings = await client.fetch(SETTINGS_QUERY);
  const landingPage: IPLandingPage = await client.fetch(LANDING_PAGE_QUERY);

  return (
    <main className="min-h-screen bg-white">
      <Navbar settings={settings} />
      <Hero data={landingPage?.hero} />
      <FeatureGrid data={landingPage?.features} />
      <ConnectivitySection data={landingPage?.connectivity} />
      <TrustSection
        data={landingPage?.trust}
        solutions={landingPage?.specializedSolutions}
      />
      <ContactSection contactInfo={settings?.footer?.contactInfo} />
      <Footer settings={settings} />
      <FloatingCTA settings={settings} />
    </main>
  );
}
