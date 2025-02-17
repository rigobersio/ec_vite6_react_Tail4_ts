// nav-components.tsx
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaShoppingCart } from 'react-icons/fa';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClose?: () => void;
}

export const NavLinkRouter = ({ to, children, mobile = false, onClose }: NavLinkProps) => (
  <LinkRouter
    to={to}
    className={`nav-link ${mobile ? 'mobile-nav-link' : ''}`}
    onClick={onClose}
  >
    {children}
  </LinkRouter>
);

export const NavLinkScroll = ({ to, children, mobile = false, onClose }: NavLinkProps) => (
  <LinkScroll
    to={to}
    smooth
    className={`nav-link ${mobile ? 'mobile-nav-link' : ''}`}
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
    className={`relative ${mobile ? 'p-3 w-full' : 'p-2'} hover:text-[var(--beige)] transition-colors`}
  >
    <FaShoppingCart className={`${mobile ? 'mx-auto' : ''} w-6 h-6`} />
    <span className="absolute -top-1 -right-1 bg-[var(--light-brown)] text-[var(--dark-green)] text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
      {count}
    </span>
  </LinkRouter>
);

export const LanguageSelector = ({ mobile = false }: { mobile?: boolean }) => (
  <button 
    className={`${mobile ? 'block w-full p-3' : 'px-2 py-1'} text-[var(--white)] hover:text-[var(--beige)] border border-[var(--medium-green)] rounded-lg transition-colors`}
  >
    {mobile ? 'Cambiar Idioma (EN/ES)' : 'EN'}
  </button>
);