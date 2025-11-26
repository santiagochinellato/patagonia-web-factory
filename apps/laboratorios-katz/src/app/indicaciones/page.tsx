import fs from 'fs';
import path from 'path';
import { IndicacionesLayout } from './components/indicaciones-layout';
import { IndicacionesContainer } from './components/indicaciones-container';

async function getIndicacionesData() {
  const filePath = path.join(process.cwd(), 'public/indicaciones.mock.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.data;
}

export const metadata = {
  title: 'Indicaciones - Laboratorios Katz',
  description:
    'Guía de preparación para análisis clínicos. Encuentra las indicaciones necesarias para tus estudios en Laboratorios Katz.',
};

export default async function IndicacionesPage() {
  const indicaciones = await getIndicacionesData();

  return (
    <IndicacionesLayout>
      <IndicacionesContainer initialData={indicaciones} />
    </IndicacionesLayout>
  );
}
