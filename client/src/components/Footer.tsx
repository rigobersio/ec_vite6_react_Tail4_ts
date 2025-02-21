import React from 'react';
import { FaGithub, FaLinkedinIn, FaGlobe } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const developers = [
  {
    name: "Rigoberto Martínez",
    role: "Full Stack Developer",
    img: "https://res.cloudinary.com/dqh2illb5/image/upload/v1715016763/myPerfil/1710771555673_Git-Hub_unujoi.jpg",
    links: [
      { icon: <FaGlobe />, url: "https://porfolio-rigoberto.vercel.app/", text: "Portafolio" },
      { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/rigoberto-martinez/", text: "LinkedIn" },
      { icon: <SiGmail />, url: "mailto:rigoberto.developer@tutanota.com", text: "Email" }
    ]
  },
  {
    name: "Franco De Vincentis",
    role: "Full Stack Developer",
    img: "https://res.cloudinary.com/dqh2illb5/image/upload/v1723593004/SPA-Tasks/Franco-perfil_wwmbmu.jpg",
    links: [
      { icon: <FaGlobe />, url: "#", text: "Portafolio" },
      { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/franco-de-vincentis/", text: "LinkedIn" },
      { icon: <SiGmail />, url: "mailto:devincentisf35@gmail.com", text: "Email" }
    ]
  },
  {
    name: "Tercer Developer",
    role: "Frontend Developer",
    img: "https://via.placeholder.com/150",
    links: [
      { icon: <FaGlobe />, url: "#", text: "Portafolio" },
      { icon: <FaLinkedinIn />, url: "#", text: "LinkedIn" },
      { icon: <SiGmail />, url: "#", text: "Email" }
    ]
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--dark-green)] text-[var(--cream)] border-t-4 border-[var(--light-green)]">
      {/* Wave divider */}
      <div className="w-full transform -translate-y-1">
        <svg viewBox="0 0 1200 120" className="w-full h-16 md:h-24">
          <path
            fill="var(--medium-green)"
            d="M0 70L1200 10V120H0Z"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {/* About Section */}
          <div className="space-y-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-[var(--light-brown)] border-l-4 border-[var(--accent-brown)] pl-3">
              Acerca de E-Commerce
            </h2>
            <p className="text-sm leading-relaxed">
              Plataforma líder en comercio electrónico, ofreciendo una experiencia segura y moderna 
              para compradores y vendedores.
            </p>
          </div>

          {/* Team Members */}
          {developers.map((dev, index) => (
            <div key={index} className="group relative">
              <div className="space-y-4 transform transition duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <img
                    className="w-14 h-14 rounded-full border-2 border-[var(--accent-brown)]"
                    src={dev.img}
                    alt={dev.name}
                  />
                  <div>
                    <h3 className="font-semibold text-[var(--cream)]">{dev.name}</h3>
                    <p className="text-sm text-[var(--light-brown)]">{dev.role}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {dev.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-[var(--light-brown)] transition-colors"
                      >
                        <span className="text-[var(--accent-brown)]">{link.icon}</span>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-[var(--light-brown)] border-l-4 border-[var(--accent-brown)] pl-3">
              Contacto
            </h2>
            <div className="space-y-2">
              <a
                href="https://github.com/rigobersio/spa_tasks"
                className="flex items-center gap-2 hover:text-[var(--light-brown)]"
              >
                <FaGithub className="text-[var(--accent-brown)]" />
                Repositorio GitHub
              </a>
              <div className="pt-4 border-t border-[var(--medium-green)]">
                <p className="text-sm font-medium text-[var(--light-brown)]">Colaboradores:</p>
                <p className="text-sm">Rigoberto Martínez</p>
                <p className="text-sm">Franco De Vincentis</p>
                <p className="text-sm">Tercer Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-[var(--medium-green)] text-center">
          <p className="text-sm text-[var(--cream)]">
            © {new Date().getFullYear()} UnMomentum. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;