import Link from 'next/link';
import styles from '../styles/Plans.module.css';

export const Plans = () => {
  return (
    <div className={styles.plans}>
      <div className={styles.plansContent}>
        <div className={styles.planCard}>
          <h3>Plano Mais</h3>
          <div className={styles.planCard__price}>
            <div className={styles.planCard__priceNumber}>
              <p>R$</p>
              69,90
              <p>/mensal</p>
            </div>
            <p>ou R$ 59,90 pela Conta Web*</p>
          </div>
          <p className={styles.planCard__desc}>Planos Alternativos de Serviço: Mais (PAS nº 48A e nº 68). chamadas locais de fixo para fixo qualquer operadora e fixo para celular Sercomtel, serão ilimitadas e isentas de tarifas, não havendo tarifação para minutos excedentes.</p>
          <Link href="/">
            <a>
              Adquira
            </a>
          </Link>
          <p className={styles.planCard_note}>* Conta Web é quando a cobrança da conta é feita pelo e-mail e não por boleto físico</p>
        </div>
        <div className={styles.planCard}>
          <h3>Fibra 400 Mega</h3>
          <div className={styles.planCard__price}>
            <div className={styles.planCard__priceNumber}>
              <p>R$</p>
              99,90
              <p>/mensal</p>
            </div>
            <p>* nas três primeiras mensalidades</p>
          </div>
          <ul className={styles.planCard__list}>
            <li>- Download: 400Mbps</li>
            <li>- Upload: 200Mbps</li>
            <li>- Fibra ótica</li>
            <li>- IP Randômico</li>
            <li>- Wi-Fi Dual grátis</li>
          </ul>
          <Link href="/">
            <a>
              Adquira
            </a>
          </Link>
          <p className={styles.planCard_note}>Valores mediante contratação da promoção Banda Larga Sercomtel + Wi-Fi Grátis + Plano de Voz com Conta Web</p>
        </div>
        <div className={styles.planCard}>
          <h3>Fibra 500 Mega</h3>
          <div className={styles.planCard__price}>
            <div className={styles.planCard__priceNumber}>
              <p>R$</p>
              214,90
              <p>/mensal</p>
            </div>
            <p></p>
          </div>
          <ul className={styles.planCard__list}>
            <li>- Download: 500Mbps</li>
            <li>- Upload: 200Mbps</li>
            <li>- Fibra ótica</li>
            <li>- IP Randômico</li>
            <li>- Wi-Fi Dual grátis</li>
          </ul>
          <Link href="/">
            <a>
              Adquira
            </a>
          </Link>
          <p className={styles.planCard_note}>Valores mediante contratação da promoção Banda Larga Sercomtel + Wi-Fi Grátis + Plano de Voz com Conta Web</p>
        </div>
      </div>
    </div>
  )
};