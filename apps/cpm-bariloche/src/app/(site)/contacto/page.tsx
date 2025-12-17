'use client';

import { PageHeader, Section } from '@/components/ui/shared';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactoPage() {
  return (
    <div className="bg-white min-h-screen">
      <Section>
        <PageHeader
          title="Contacto"
          subtitle="Estamos para escucharte. Envianos tu consulta o acercate a nuestros consultorios."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-surface-light p-8 md:p-10 rounded-[2.5rem] border border-slate-100">
            <h3 className="font-heading font-bold text-2xl text-brand-dark mb-6">
              Envianos un mensaje
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 ml-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 ml-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
                  placeholder="tuchico@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary bg-brand-pink text-white py-4 mt-4 shadow-lg shadow-pink-200"
              >
                Enviar Consulta
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-soft border border-slate-50">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-dark mb-1">
                    Ubicación
                  </h4>
                  <p className="text-text-muted">
                    Av. de los Pioneros 4960
                    <br />
                    San Carlos de Bariloche, Río Negro
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-soft border border-slate-50">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-dark mb-1">
                    Teléfonos
                  </h4>
                  <p className="text-text-muted">
                    Fijo: 0294 444-1141
                    <br />
                    Móvil: +54 9 294 432-7185
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-soft border border-slate-50">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-dark mb-1">
                    Horarios
                  </h4>
                  <p className="text-text-muted">
                    Lunes a Viernes: 08:00 - 20:00
                    <br />
                    Sábados: 09:00 - 13:00
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.022971239123!2d-71.35084992346764!3d-41.13458607133315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b1520667087%3A0x673412781483861!2sAv.%20de%20los%20Pioneros%204960%2C%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1716383626245!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
