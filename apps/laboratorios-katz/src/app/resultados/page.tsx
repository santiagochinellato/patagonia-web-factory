import { RESULTADOS_DATA } from '../data';
import { ResultadosLayout } from './components/resultados-layout';
import { ResultadosContent } from './components/resultados-content';

export const metadata = {
  title: 'Resultados Online - Laboratorios Katz',
  description:
    'Acceda a sus resultados de análisis clínicos de forma segura y confidencial. Consulte sus estudios en línea con su usuario y contraseña.',
};

export default function ResultadosPage() {
  return (
    <ResultadosLayout>
      <ResultadosContent data={RESULTADOS_DATA} />
    </ResultadosLayout>
  );
}
