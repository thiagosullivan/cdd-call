import styles from '../styles/Map.module.css';

export const Map = () => {
  return (
    <div className={styles.mapCont}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.1413404617338!2d-51.16048088502691!3d-23.31063008480796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb449fde58799b%3A0xbd9796dc627557d9!2sR.%20Maranh%C3%A3o%2C%2065%20-%20Centro%2C%20Londrina%20-%20PR%2C%2086010-410!5e0!3m2!1spt-BR!2sbr!4v1625661184113!5m2!1spt-BR!2sbr" width={1900} height={350} style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
    </div>
  )
}