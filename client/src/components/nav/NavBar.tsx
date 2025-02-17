import React, { useState, useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { useStore } from '../../store/store';
import { NavLinkRouter, NavLinkScroll, NavCartButton, LanguageSelector } from './NavComponents';
import MobileMenu from './MobileMenu';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, role, setUser, setToken, setRole } = useStore();

  // Manejo de tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false);
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Lógica de logout
  const handleLogout = () => {
    setUser(null);
    setToken(null);
    setRole(null);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed w-full h-[var(--nav-height)] z-50 top-0 bg-[var(--dark-green)] border-b border-[var(--medium-green)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">

        {/* Logo */}
        <NavLinkRouter to="/products">E-Commerce</NavLinkRouter>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinkRouter to="/products">Productos</NavLinkRouter>
          <div className="h-6 w-px bg-[var(--medium-green)]" />
          <NavLinkScroll to="contact">Contacto</NavLinkScroll>
        </div>

        {/* Sección Derecha */}
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-[var(--white)]">Hola, {user}</span>
              {role === 'admin' && <NavLinkRouter to="/admin">Admin</NavLinkRouter>}
              <button
                onClick={handleLogout}
                className="text-[var(--white)] hover:text-[var(--dark-blue)] transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <NavLinkRouter to="/login">Iniciar Sesión</NavLinkRouter>
          )}
          <NavCartButton count={3} />
          <LanguageSelector />
        </div>

        {/* Botón Mobile */}
        <button
          className="md:hidden p-2 text-[var(--beige)] hover:text-[var(--light-brown)] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

      {/* Menú Mobile */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default NavBar;