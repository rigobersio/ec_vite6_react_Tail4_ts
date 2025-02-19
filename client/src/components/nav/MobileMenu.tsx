import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/store';
import { NavLinkRouter, NavLinkScroll, NavCartButton, LanguageSelector } from './NavComponents';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const MobileMenu: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    handleLogout: () => void;
}> = ({ isOpen, onClose, handleLogout }) => {
    const { user, role } = useStore();

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative inset-0 z-40 bg-[var(--dark-green)] pt-[var(--nav-height)]"
                >
                    <div className="p-4 space-y-4">
                        {/* Menú principal */}
                        <NavLinkRouter to="/products" mobile onClose={onClose}>
                            Productos
                        </NavLinkRouter>
                        <NavLinkScroll to="contact" mobile onClose={onClose}>
                            Contacto
                        </NavLinkScroll>

                        {/* Sección de usuario */}
                        <div className="border-t border-[var(--medium-green)] pt-4">
                            {user ? (
                                <>
                                    <div className="flex items-center gap-3 p-4 bg-[var(--medium-green)] rounded-lg">
                                        <FaUser className="text-[var(--beige)] text-xl" />
                                        <div>
                                            <p className="text-[var(--beige)] font-medium">{user}</p>
                                            <p className="text-[var(--light-brown)] text-sm">{role}</p>
                                        </div>
                                    </div>
                                    {role === 'admin' && (
                                        <NavLinkRouter 
                                            to="/admin" 
                                            mobile 
                                            onClose={onClose}
                                            className="flex items-center gap-2"
                                        >
                                            <FaCog className="text-[var(--beige)]" />
                                            Panel Admin
                                        </NavLinkRouter>
                                    )}
                                    <button 
                                        onClick={handleLogout}
                                        className="flex items-center gap-3 w-full p-4 text-[var(--light-brown)] hover:bg-[var(--medium-green)]"
                                    >
                                        <FaSignOutAlt className="text-[var(--beige)]" />
                                        Cerrar Sesión
                                    </button>
                                </>
                            ) : (
                                <NavLinkRouter 
                                    to="/login" 
                                    mobile 
                                    onClose={onClose}
                                    className="bg-[var(--light-brown)] hover:bg-[var(--dark-blue)] text-[var(--dark-green)] p-4 rounded-lg text-center font-medium block"
                                >
                                    Iniciar Sesión
                                </NavLinkRouter>
                            )}
                            
                            {/* Accesos directos */}
                            <div className="flex gap-4 p-4 border-t border-[var(--medium-green)]">
                                <NavCartButton count={3} mobile />
                                <LanguageSelector mobile />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;