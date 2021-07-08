import Image from 'next/image';
import Link from 'next/link';

import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import CDDlogo from '../public/cdd-logo.svg';

import styles from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Image src={CDDlogo} alt="Logo CDD" width={252} height={45} />
        <nav className={styles.footerNav}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/#company">
            <a>A Empresa</a>
          </Link>
          <Link href="/#plans">
            <a>Assinaturas</a>
          </Link>
          <Link href="/#form">
            <a>Contato</a>
          </Link>
        </nav>
        <div className={styles.footerSocial}>
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
        <div className={styles.footerContact}>
          <div className={styles.footerAddress}>
            <FaMapMarkerAlt />
            <p>Rua Maranhão, 65 - 7º andar - Centro - Londrina/PR - CEP 86010-410</p>
          </div>
          <div className={styles.footerHour}>
            <FaClock />
            <p>Seg à Sex 09:00 às 18:00</p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        © 2021 <strong>CDD Call Tecnologia</strong> - Desenvolvido por <strong><Link href="https://centro.londrinaguiase.com.br/" target="_blank" rel="noopener">Guia-se Marketing Digital</Link></strong>.
      </div>
    </footer>
  )
};