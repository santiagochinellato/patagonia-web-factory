'use client';

import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95';

  const variants = {
    primary:
      'bg-brand-blue text-white hover:bg-brand-dark shadow-lg hover:shadow-xl',
    secondary: 'bg-brand-light text-brand-blue hover:bg-white hover:shadow-md',
    outline:
      'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
