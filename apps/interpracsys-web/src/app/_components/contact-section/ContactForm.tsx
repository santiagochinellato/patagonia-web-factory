'use client';

import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import React from 'react';
import { IPLandingPage } from '../../../types/sanity';
import { InputGroup } from './InputGroup';

export const ContactForm = ({
  data,
}: {
  data?: IPLandingPage['contactSection'];
}) => {
  // State for client-side form handling
  const [status, setStatus] = React.useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/contacto.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json().catch(() => ({
        success: false,
        message: 'Error al procesar la respuesta del servidor',
      }));

      if (response.ok && result.success) {
        setStatus('success');
        setMessage(result.message || 'Consulta enviada exitosamente.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || 'Error al enviar el formulario');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Hubo un error al enviar tu consulta. Por favor intenta nuevamente.'
      );
    }
  };

  return (
    <div className="w-full lg:w-1/2">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          aria-label="Formulario de contacto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup
              label={data?.formNameLabel || 'Nombre'}
              placeholder={data?.formNamePlaceholder || 'Tu nombre'}
              id="name"
              name="name"
              autoComplete="name"
              required
            />
            <InputGroup
              label={data?.formOrgLabel || 'Laboratorio'}
              placeholder={data?.formOrgPlaceholder || 'Nombre del centro'}
              id="lab"
              name="lab"
              autoComplete="organization"
            />
          </div>
          <InputGroup
            label={data?.formEmailLabel || 'Email'}
            placeholder={data?.formEmailPlaceholder || 'tu@email.com'}
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-bold text-slate-700"
            >
              {data?.formMessageLabel || 'Mensaje'}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all resize-none text-slate-700"
              placeholder={
                data?.formMessagePlaceholder || '¿En qué podemos ayudarte?'
              }
              aria-label="Mensaje"
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 rounded-xl bg-brand-gradient text-white font-bold shadow-lg shadow-brand-navy/20 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-2 focus:ring-4 focus:ring-brand-cyan/30 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
            aria-label="Enviar consulta"
          >
            {status === 'submitting' ? (
              <>
                <span>Enviando...</span>
                <Loader2 size={20} className="animate-spin" />
              </>
            ) : (
              <>
                <span>{data?.formButtonText || 'Enviar Consulta'}</span>
                <Send size={20} aria-hidden="true" />
              </>
            )}
          </button>
          {status !== 'idle' && status !== 'submitting' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                status === 'success'
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle2 size={20} />
              ) : (
                <XCircle size={20} />
              )}
              {message}
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
};
