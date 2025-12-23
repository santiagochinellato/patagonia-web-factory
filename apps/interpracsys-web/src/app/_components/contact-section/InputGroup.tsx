'use client';

import React from 'react';

export const InputGroup = ({
  label,
  placeholder,
  type = 'text',
  id,
  name,
  autoComplete,
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  id: string;
  name?: string;
  autoComplete?: string;
  required?: boolean;
}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-sm font-bold text-slate-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name || id}
      autoComplete={autoComplete}
      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-slate-700"
      placeholder={placeholder}
      required={required}
    />
  </div>
);
