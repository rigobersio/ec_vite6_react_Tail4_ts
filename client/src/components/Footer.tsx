import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[var(--dark-green)] text-[var(--beige)] transition">
      <div className="relative top-0 left-0 w-[100%] overflow-hidden">
        <svg data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="relative block h-[600px] fill-[var(--medium-green)]"></path>
        </svg>
        <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl text-[var(--light-brown)]">Acerca de E-Commerce</h2>
            <p>
              E-Commerce es una plataforma en línea que permite a los usuarios comprar y vender productos de manera fácil y segura.
            </p>
          </div>

          <div>
            <li className="text-[22px] list-none font-semibold text-[var(--light-brown)] py-2 uppercase">
              Rigoberto Martínez
            </li>
            <img
              className="my-4 rounded-full w-20 h-20 object-cover"
              src="https://res.cloudinary.com/dqh2illb5/image/upload/v1715016763/myPerfil/1710771555673_Git-Hub_unujoi.jpg"
              alt="Rigoberto Martínez"
            />
            <li className="my-4 list-none flex items-center gap-3">
              <CgWebsite className="mr-1" />
              <a
                className="ml-1 text-[var(--beige)] hover:text-[var(--light-brown)] transform hover:scale-150 transition-all duration-150 ease-in-out"
                href="https://porfolio-rigoberto.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Portafolio
              </a>
            </li>
            <li className="my-4 list-none flex items-center gap-3">
              <FaLinkedinIn className="mr-1" />
              <a
                className="ml-1 text-[var(--beige)] hover:text-[var(--light-brown)] transform hover:scale-150 transition-all duration-150 ease-in-out"
                href="https://www.linkedin.com/in/rigoberto-martinez/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </div>

          <div>
            <li className="text-[22px] list-none font-semibold text-[var(--light-brown)] py-2 uppercase">
              Franco De Vincentis
            </li>
            <img
              className="my-4 rounded-full w-20 h-20 object-cover"
              src="https://res.cloudinary.com/dqh2illb5/image/upload/v1723593004/SPA-Tasks/Franco-perfil_wwmbmu.jpg"
              alt="Franco De Vincentis"
            />
            <li className="my-4 list-none flex items-center gap-3">
              <CgWebsite className="mr-1" />
              <a href="" target="_blank" rel="noreferrer" className="ml-1 text-[var(--beige)] hover:text-[var(--light-brown)] transform hover:scale-150
                             transition-all duration-150 ease-in-out">Portafolio</a>
            </li>
            <li className="my-4 list-none flex items-center gap-3">
              <FaLinkedinIn className="mr-1" />
              <a href="https://www.linkedin.com/in/franco-de-vincentis/" target="_blank" rel="noreferrer" className="ml-1 text-[var(--beige)] hover:text-[var(--light-brown)] transform hover:scale-150
                             transition-all duration-150 ease-in-out">LinkedIn</a>
            </li>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-[22px] font-semibold text-[var(--light-brown)] py-2 uppercase">Contacto</h2>
            <p className="text-[16px] my-4">Correos electrónicos:</p>
            <li className="my-4 list-none flex items-center">rigoberto.developer@tutanota.com</li>
            <li className="my-4 list-none flex items-center">devincentisf35@gmail.com</li>
            <li className="my-4 list-none flex items-center gap-3">
              <FaGithub className="mr-1" />
              <a href="https://github.com/rigobersio/spa_tasks" className="ml-1 text-[var(--beige)] hover:text-[var(--light-brown)] transform hover:scale-150
                             transition-all duration-150 ease-in-out">Repositorio</a>
            </li>
          </div>
        </div>

        <h6 className="text-center">Copyright © 2025 - All right reserved by UnMomentum</h6>
      </div>
    </footer>
  );
};

export default Footer;