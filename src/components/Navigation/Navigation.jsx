import React from 'react';
import { MessageSquare, Calendar, Trophy, ShoppingBag, Users } from 'lucide-react';
import NavButton from './NavButton';

const Navigation = () => {
  return (
    <div className="bg-gray-900 text-white flex justify-between px-2 py-3">
      <NavButton 
        icon={MessageSquare} 
        label="Chat" 
        isActive={true} 
      />
      <NavButton 
        icon={Calendar} 
        label="Agenda" 
        href="https://draft5.gg/proximas-partidas" 
      />
      <NavButton 
        icon={Trophy} 
        label="Resultados" 
        href="https://draft5.gg/resultados" 
      />
      <NavButton 
        icon={ShoppingBag} 
        label="Loja" 
        href="https://www.furia.gg/" 
      />
      <NavButton 
        icon={Users} 
        label="Comunidade" 
        href="https://draft5.gg/cs-atualizacoes" 
      />
    </div>
  );
};

export default Navigation;