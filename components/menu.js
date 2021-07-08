import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import CDDlogo from '../public/cdd-logo.svg';

import styles from '../styles/Menu.module.css';

export const Menu = () => {
  const [ open, setOpen ] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  }
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
            <a className={styles.logoHeader}>
              <Image src={CDDlogo} alt="CDD Logo" width={252} height={45}/>
            </a>
        </Link>
        <nav className={`${styles.nav} ${open !== true ? '' : 'mobileactive'}`}>
          <Link href="/">
            <a onClick={handleMenu}>
              Home
            </a>
          </Link>
          <Link href="/#company">
            <a onClick={handleMenu}>
              A Empresa
            </a>
          </Link>
          <Link href="/#plans">
            <a onClick={handleMenu}>
              Assinaturas
            </a>
          </Link>
          <Link href="/#form">
            <a onClick={handleMenu}>
              Contato
            </a>
          </Link>
        </nav>
        <div className={styles.headerSocialmedia}>
          <Link href="https://www.facebook.com/cddcall/">
            <a target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </Link>
          <Link href="https://www.instagram.com/cddcall/">
            <a target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </Link>
          <Link href="https://web.whatsapp.com/send?phone=554333429000">
            <a target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </Link>
        </div>
        <div className={`${styles.burger} ${open !== true ? '' : 'menuAnimation'}`} onClick={handleMenu}>
          <div className={`${styles.lines} line1`}></div>
          <div className={`${styles.lines} line2`}></div>
          <div className={`${styles.lines} line3`}></div>
        </div>
      </div>
    </header>
  )
};