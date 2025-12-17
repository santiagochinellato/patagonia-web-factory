import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'light' | 'blue' | 'none';
}

export function Section({
  children,
  className,
  bg = 'white',
  ...props
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-surface-light',
    blue: 'bg-brand-blue text-white',
    none: '',
  };

  return (
    <section
      className={cn('py-16 md:py-24', bgColors[bg], className)}
      {...props}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  align = 'center',
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <h1 className="font-heading font-black text-3xl md:text-5xl text-brand-dark mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
