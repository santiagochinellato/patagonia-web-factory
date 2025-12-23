'use client';

import { Network, RefreshCw, ShieldCheck } from 'lucide-react';
import React from 'react';
import { IPLandingPage } from '../../../types/sanity';
import { FeatureItem } from './FeatureItem';

export const FeatureList = ({
  features,
}: {
  features?: IPLandingPage['connectivity']['features'];
}) => {
  if (features && features.length > 0) {
    return (
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {features.map((feature, i) => (
          <FeatureItem
            key={i}
            icon={
              i === 0 ? (
                <Network size={24} className="text-white" />
              ) : i === 1 ? (
                <RefreshCw size={24} className="text-white" />
              ) : (
                <ShieldCheck size={24} className="text-white" />
              )
            }
            title={feature.title}
            text={feature.text}
            delay={0.3 + i * 0.1}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <FeatureItem
        icon={<Network size={24} className="text-white" />}
        title="Integración Universal"
        text="Ya sea química clínica, hematología, inmunología o gases en sangre; nos comunicamos con todas las marcas líderes."
        delay={0.3}
      />
      <FeatureItem
        icon={<RefreshCw size={24} className="text-white" />}
        title="Actualización Constante"
        text="Nuestro equipo de desarrollo añade nuevos protocolos mensualmente. Tu inversión en software nunca queda obsoleta frente a una máquina nueva."
        delay={0.4}
      />
      <FeatureItem
        icon={<ShieldCheck size={24} className="text-white" />}
        title="Cero Error de Trascripción"
        text="La comunicación es bidireccional. La orden de trabajo va del sistema a la máquina, y el resultado vuelve al sistema. Sin intermediarios ni errores humanos."
        delay={0.5}
      />
    </div>
  );
};
