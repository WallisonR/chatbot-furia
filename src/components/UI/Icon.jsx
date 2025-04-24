import React from 'react';
import * as LucideIcons from 'lucide-react';

/**
 * Componente genérico para renderizar ícones do Lucide
 * @param {string} name - Nome do ícone do Lucide
 * @param {string} className - Classes adicionais CSS
 * @param {number} size - Tamanho do ícone
 * @param {string} color - Cor do ícone
 * @returns {JSX.Element} Componente de ícone
 */
const Icon = ({ name, className = '', size = 24, color = 'currentColor', ...props }) => {
  const LucideIcon = LucideIcons[name];
  
  if (!LucideIcon) {
    console.error(`Ícone '${name}' não encontrado`);
    return null;
  }
  
  return (
    <LucideIcon 
      className={className}
      size={size}
      color={color}
      {...props}
    />
  );
};

export default Icon;