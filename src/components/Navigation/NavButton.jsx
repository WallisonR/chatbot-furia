import React from 'react';

const NavButton = ({ icon: Icon, label, href, isActive = false }) => {
  const ButtonComponent = href ? 'a' : 'button';
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
  
  return (
    <ButtonComponent 
      {...props}
      className={`flex flex-col items-center text-xs px-1 sm:px-3 ${
        isActive ? 'text-white' : 'text-gray-300 hover:text-white'
      } focus:outline-none`}
    >
      <Icon className="h-5 w-5 mb-1" />
      <span>{label}</span>
    </ButtonComponent>
  );
};

export default NavButton;