import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaShoppingCart, FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClose?: () => void;
  className?: string;
}

export const NavLinkRouter = ({ 
  to, 
  children, 
  mobile = false, 
  onClose, 
  className = '' 
}: NavLinkProps) => (
  <LinkRouter
    to={to}
    className={`nav-link ${mobile ? 'mobile-nav-link' : ''} ${className}`}
    onClick={onClose}
  >
    {children}
  </LinkRouter>
);

export const NavLinkScroll = ({ 
  to, 
  children, 
  mobile = false, 
  onClose, 
  className = '' 
}: NavLinkProps) => (
  <LinkScroll
    to={to}
    smooth
    className={`nav-link ${mobile ? 'mobile-nav-link' : ''} ${className}`}
    onClick={onClose}
  >
    {children}
  </LinkScroll>
);

interface CartButtonProps {
  count: number;
  mobile?: boolean;
}

export const NavCartButton = ({ count, mobile = false }: CartButtonProps) => (
  <LinkRouter
    to="/cart"
    className={`relative ${mobile ? 'p-3 flex items-center gap-2' : 'p-2'} hover:text-[var(--beige)] transition-colors`}
    aria-label={`Carrito (${count} items)`}
  >
    <FaShoppingCart className={mobile ? 'w-6 h-6' : 'w-5 h-5'} />
    <AnimatePresence>
      {count > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className={`absolute ${
            mobile 
              ? 'static bg-transparent text-[var(--beige)] text-base'
              : '-top-1 -right-1 bg-[var(--light-brown)] text-[var(--dark-green)] text-xs'
          } w-5 h-5 rounded-full flex items-center justify-center font-bold`}
        >
          {mobile ? `(${count})` : count}
        </motion.span>
      )}
    </AnimatePresence>
    {mobile && <span className="text-[var(--beige)]">Carrito</span>}
  </LinkRouter>
);

export const LanguageSelector = ({ mobile }: { mobile?: boolean }) => (
  <button 
    className={`${
      mobile 
        ? 'flex items-center gap-2 p-3 text-[var(--beige)] hover:bg-[var(--medium-green)] rounded-lg w-full'
        : 'px-2 py-1 hover:text-[var(--beige)]'
    } transition-colors`}
    aria-label="Cambiar idioma"
  >
    <FaGlobe className={mobile ? 'w-6 h-6' : 'w-5 h-5'} />
    {mobile && <span className="text-[var(--beige)]">Idioma (EN/ES)</span>}
  </button>
);