'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@patagonia-web-factory/ui-kit';
import { DERIVANTES_DATA } from '../../data';

interface DerivantesContentProps {
  data: typeof DERIVANTES_DATA;
}

export function DerivantesContent({ data }: DerivantesContentProps) {
  return (
    <section className="py-12 md:py-20 bg-katz-relief min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="flex flex-col gap-4">
            <p className="text-xs md:text-sm font-semibold text-katz-gray-body tracking-wider uppercase">
              {data.subtitle}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-katz-primary leading-tight">
              {data.title}
            </h1>
            <ul className="space-y-3 mt-2">
              {data.bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-katz-cta-primary" />
                  </div>
                  <p
                    className="text-sm md:text-base text-katz-gray-body leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-4 w-max">
              <a
                href={data.cta.url}
                target="_blank"
                className="text-decoration-none text-primary"
              >
                <span className="montserrat-bold text-primary">
                  {data.cta.text}
                </span>
              </a>
            </Button>
          </div>
          {/* Right Column - Important Card */}
          <div className="flex flex-col items-center justify-center gap-6 lg:gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md lg:max-w-lg">
              <div className="border-l-4 border-katz-cta-primary pl-4 flex flex-col gap-3">
                <h6 className="text-lg font-bold text-katz-primary">
                  ¡IMPORTANTE!
                </h6>
                <p className="text-sm font-medium text-katz-gray-body uppercase">
                  Para profesionales que necesitan derivar muestras, ofrecemos
                  asesoramiento personalizado y resultados confiables.
                </p>
                <Button variant="outline" className="mt-2 w-max">
                  <a
                    href="https://derivaciones.laboratorioskatz.com/interpracsysweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <span className="font-bold">INGRESAR</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
