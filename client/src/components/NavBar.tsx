import React, { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { useStore } from '../store/store';

const NavBar: React.FC = () => {
  const [click, setClick] = useState(false);
  const user = useStore((state) => state.user);
  const role = useStore((state) => state.role);
  const setUser = useStore((state) => state.setUser);
  const setToken = useStore((state) => state.setToken);
  const setRole = useStore((state) => state.setRole);

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    setRole(null);
    setClick(false);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#061609] text-white transition">
      <ul className="text-center text-xl p-1">
        <li className="my-4 py-4 border-gray-400 hover:bg-gray-400 hover:rounded">
          <LinkRouter to="/" onClick={handleClick}>
            Inicio
          </LinkRouter>
        </li>
        <li className="my-4 py-4 border-gray-400 hover:bg-gray-400 hover:rounded">
          <LinkRouter to="/products" onClick={handleClick}>
            Productos
          </LinkRouter>
        </li>
        <li className="my-4 py-4 border-gray-400 hover:bg-gray-400 hover:rounded">
          <LinkRouter to="/about" onClick={handleClick}>
            Nosotros
          </LinkRouter>
        </li>
        <li className="my-4 py-4 border-gray-400 hover:bg-gray-400 hover:rounded">
          <LinkScroll to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contacto
          </LinkScroll>
        </li>
        {user ? (
          <>
            <li className="my-4 py-4 border-gray-400 hover:bg-gray-400 hover:rounded">
              <span>Hola, {user}</span>
            </li>
            {role === 'admin' && (
              <li className="my-4 py-4 border-gray-400 hover:bg-gray-400 hover:rounded">
                <LinkRouter to="/admin" onClick={handleClick}>
                  Admin
                </LinkRouter>
              </li>
            )}
            <li className="my-4 py-4 border-gray-400 hover:bg-gray-400 hover:rounded">
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </li>
          </>
        ) : (
          <li className="my-4 py-4 border-gray-400 hover:bg-gray-400 hover:rounded">
            <LinkRouter to="/login" onClick={handleClick}>
              Iniciar Sesión
            </LinkRouter>
          </li>
        )}
        <li className="my-4 py-4 border-gray-400 hover:bg-gray-400 hover:rounded">
          <LinkRouter to="/cart" onClick={handleClick}>
            Carrito
          </LinkRouter>
        </li>
        <li className="my-4 py-4 border-gray-400 hover:bg-gray-400 hover:rounded">
          <button>EN</button>
        </li>
      </ul>
    </div>
  );

  return (
    <nav id="navbar" className="fixed w-full h-[var(--nav-height)] z-50 top-0 shadow-xl bg-[#061609]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-8"> {/* Contenedor principal */}
            {/* Logo */}
            <LinkRouter
              to="/"
              className="text-2xl font-bold text-[#b8847a] hover:text-[#cac79f] transition-colors"
            >
              E-Commerce
            </LinkRouter>

            {/* Enlaces Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <LinkRouter
                to="/products"
                className="text-[#f9f9f9] hover:text-[#cac79f] text-sm font-medium transition-colors"
              >
                Productos
              </LinkRouter>
              <div className="w-px h-6 bg-[#1b3c3e]/40" /> {/* Separador */}
              <LinkScroll
                to="contact"
                smooth
                className="text-[#f9f9f9] hover:text-[#cac79f] text-sm font-medium transition-colors"
              >
                Contacto
              </LinkScroll>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6 ml-1">
            {user ? (
              <div className="flex items-center gap-4">
                {/* Usuario y Menú */}
                <span className="text-[#f9f9f9] text-sm font-medium hover:text-[#cac79f] transition-colors">
                  Hola, {user}
                </span>

                {role === 'admin' && (
                  <LinkRouter
                    to="/admin"
                    className="text-[#f9f9f9] text-sm font-medium hover:text-[#b8847a] transition-colors"
                  >
                    Admin
                  </LinkRouter>
                )}

                <button
                  onClick={handleLogout}
                  className="text-[#f9f9f9] text-sm font-medium hover:text-[#1e3a8a] transition-colors"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <LinkRouter
                to="/login"
                className="text-[#f9f9f9] text-sm font-medium hover:text-[#cac79f] transition-colors"
              >
                Iniciar Sesión
              </LinkRouter>
            )}

            {/* Carrito con indicador */}
            <LinkRouter
              to="/cart"
              className="relative text-[#f9f9f9] hover:text-[#cac79f] transition-colors"
            >
              <span className="absolute -top-2 -right-2 bg-[#b8847a] text-[#061609] text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3 {/* Número dinámico */}
              </span>
              Carrito
            </LinkRouter>

            {/* Selector de idioma */}
            <button className="text-[#f9f9f9] hover:text-[#cac79f] transition-colors px-2 py-1 border border-[#1b3c3e] rounded-lg">
              EN
            </button>
          </div>
          <div className="flex sm:hidden items-center pr-2">
            <button
              className="p-2 rounded-lg backdrop-blur-sm bg-[#061609]/50 hover:bg-[#1b3c3e]/80 transition-all duration-300 group"
              onClick={handleClick}
            >
              <div className="relative">
                {click ? (
                  <FaTimes className="w-6 h-6 text-[#cac79f] group-hover:text-[#b8847a]" />
                ) : (
                  <CiMenuFries className="w-6 h-6 text-[#cac79f] group-hover:text-[#b8847a]" />
                )}
                <div className="absolute inset-0 rounded-lg mix-blend-overlay bg-gradient-to-tr from-[#cac79f]/20 to-transparent" />
              </div>
            </button>
          </div>
        </div>
      </div>
      {click && content}
    </nav>
  );
};

export default NavBar;