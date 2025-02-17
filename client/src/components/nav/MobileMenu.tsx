import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLinkRouter, NavLinkScroll, NavCartButton, LanguageSelector } from './NavComponents';

const MobileMenu: React.FC<{
    isOpen: boolean;
    onClose: () => void;
}> = ({ isOpen, onClose }) => {
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
                    className="fixed inset-0 z-40 bg-[var(--dark-green)] pt-[var(--nav-height)]"
                >
                    <div className="p-4 space-y-4">
                        <NavLinkRouter to="/products" mobile onClose={onClose}>Productos</NavLinkRouter>
                        <NavLinkRouter to="/about" mobile onClose={onClose}>Nosotros</NavLinkRouter>
                        <NavLinkScroll to="contact" mobile onClose={onClose}>Contacto</NavLinkScroll>

                        <div className="border-t border-[var(--medium-green)] pt-4">
                            <NavCartButton count={3} mobile />
                            <LanguageSelector mobile />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;