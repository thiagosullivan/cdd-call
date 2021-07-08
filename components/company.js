import Image from 'next/image';
import companyBgOne from '../assets/company-bg1.jpg';
import companyBgTwo from '../assets/company-bg2.jpg';
import companyImg from '../assets/company-img.jpg';

import styles from '../styles/Company.module.css';

export const Company = () => {
  return (
    <div className={styles.company} id="company">
      <div className={styles.companyCont}>
        <div className={styles.companyTxtOne}>
          <h2>A CDD Call<br></br> Tecnologia</h2>
          <p className={styles.companyPOne}>Uma empresa Londrinense totalmente focada na busca por soluções tecnológicas que levam maior agilidade e confiabilidade aos nossos clientes e parceiros comerciais. Temos diversas soluções para diferentes necessidades, pois tecnologia é o nosso negócio.</p>
        </div>
        <p className={styles.companyPTwo}>Nossa parceria com a Sercomtel é baseada na entrega de qualidade que a empresa oferece. No mercado londrinense a Sercomtel tem apresentado a maior agilidade de instalação, estabilidade de sinal e velocidade real através da fibra mais moderna do mercado. Não tivemos dúvidas e estamos orgulhosos dessa parceria que já é um sucesso!</p>
        <div className={styles.companyBgOne}>
          <Image src={companyBgOne} alt="" />
        </div>
        <div className={styles.companyBgTwo}>
          <Image src={companyBgTwo} alt="" />
        </div>
        <div className={styles.companyImg}>
          <Image src={companyImg} alt="" />
        </div>
      </div>
    </div>
  )
};