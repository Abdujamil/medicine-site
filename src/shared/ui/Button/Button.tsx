import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyles = 'rounded transition-colors font-medium';
  const variants = {
    primary: 'bg-[#0A4E8D] text-white hover:bg-[#0a5ea8] px-4 py-3',
    secondary: 'bg-white text-[#1F1F1F] border border-[#ADADAD] hover:bg-gray-50 px-[15px] py-[4px] pb-[1px] flex items-end justify-center',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
