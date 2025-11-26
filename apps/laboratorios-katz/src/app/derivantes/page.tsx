import { Metadata } from 'next';
import { DerivantesLayout } from './components/derivantes-layout';
import { DerivantesContent } from './components/derivantes-content';
import { DERIVANTES_DATA } from '../data';

export const metadata: Metadata = {
  title: DERIVANTES_DATA.title,
  description: DERIVANTES_DATA.subtitle,
};

export default function DerivantesPage() {
  return (
    <DerivantesLayout>
      <DerivantesContent data={DERIVANTES_DATA} />
    </DerivantesLayout>
  );
}
