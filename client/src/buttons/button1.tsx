import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button1: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
      {text}
    </button>
  );
};

export default Button1;
