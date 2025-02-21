import React, { ReactNode } from 'react';

interface TypographyProps {
    children: ReactNode;
}

export const Titulo: React.FC<TypographyProps> = ({ children }) => (
    <h1 className="font-tangerine text-[var(--medium-green)] text-shadow-md text-8xl mt-0 mb-2">
        {children}
    </h1>
);

export const Subtitulo: React.FC<TypographyProps> = ({ children }) => (
    <h2 className="font-tangerine font-bold text-[var(--light-brown)] text-shadow-md text-6xl">
        {children}
    </h2>
);

export const Encabezado3: React.FC<TypographyProps> = ({ children }) => (
    <h3 className="font-merriweather text-[var(--light-brown)] text-xl font-semibold">
        {children}
    </h3>
);

export const Encabezado4: React.FC<TypographyProps> = ({ children }) => (
    <h4 className="font-tangerine text-[var(--medium-green)] text-4xl font-bold mt-5 mb-5 text-shadow-md">
        {children}
    </h4>
);

export const Encabezado5: React.FC<TypographyProps> = ({ children }) => (
    <h5 className="font-bold leading-5">
        {children}
    </h5>
);

export const Parrafo: React.FC<TypographyProps> = ({ children }) => (
    <p className="text-base">
        {children}
    </p>
);

export const Enlace: React.FC<{ href: string; children: ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-[var(--medium-green)] transition-all duration-300 text-base hover:text-[var(--dark-green)]">
        {children}
    </a>
);

export const ListaNumerica: React.FC<TypographyProps> = ({ children }) => (
    <li className="list-decimal font-roboto-mono">
        {children}
    </li>
);

export const Lista: React.FC<TypographyProps> = ({ children }) => (
    <ul className="list-none font-poppins italic font-light">
        {children}
    </ul>
);

export const ElementoLista: React.FC<TypographyProps> = ({ children }) => (
    <li className="py-1">
        {children}
    </li>
);

export const Separador: React.FC = () => (
    <hr className="h-0.5 w-20 bg-[var(--medium-green)] mb-5 border-0" />
);
