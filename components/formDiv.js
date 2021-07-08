import router, { useRouter } from "next/router";
import { useState } from 'react';
import ReactPlayer from 'react-player';

import styles from '../styles/Form.module.css';
import cover from '../assets/banner-home.jpg';

export default function Form() {
  const [ loading, setLoading ] = useState(false);

  function handleSubmit(){
    setLoading(true);
  }
  
  function sendEmail() {
    const form = document.getElementById('form')

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const name = document.getElementById('name').value
      const phone = document.getElementById('phone').value
      const email = document.getElementById('email').value
      const address = document.getElementById('address').value
      const addressNumber = document.getElementById('addressNumber').value
      const city = document.getElementById('city').value
    
      fetch('/api/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          address: address,
          addressNumber: addressNumber,
          city: city
        })
      }).then((response)=>{        
        console.log(response)        
        // alert('Email enviado com sucesso')
        setLoading(false);
        if (response.status == 200){
          router.push('/obrigado')
        }
      }).catch((error) => {
        console.log(error)
        alert('Ocorreu um erro')
      });
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.formCont}>
        <div className={styles.formVideo}>
          <ReactPlayer
            className='reactPlayer'
            width='100%'
            height='100%'
            controls
            playing
            url='https://guiase.s3.amazonaws.com/wp-content/uploads/sites/1997/2021/07/cdd-video.mp4'
            light='https://i.ibb.co/Vx6LnVp/thumbnail.png'
          />
        </div>
        <form onSubmit={handleSubmit} className={styles.formDiv} id='form'>
          <h1>Informe os dados para consultar a viabilidade na sua região</h1>
          <div className={styles.formContainer}>
            <label htmlFor="name" className={styles.hiddenLabel}>
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Nome (obrigatório)"
              required
            />
            <label htmlFor="phone" className={styles.hiddenLabel}>
              Telefone
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Telefone (obrigatório)"
              required
            />
            <label htmlFor="email" className={styles.hiddenLabel}>
              E-mail
            </label>
            <input
              id="email"
              type="text"
              placeholder="E-mail (obrigatório)"
              required
            />
            <label htmlFor="address" className={styles.hiddenLabel}>
              Endereço
            </label>
            <input
              id="address"
              type="text"
              placeholder="Endereço (obrigatório)"
            />
            <label htmlFor="addressNumber" className={styles.hiddenLabel}>
              Número
            </label>
            <input
              id="addressNumber"
              type="text"
              placeholder="Número (obrigatório)"
              required
            />
            <label htmlFor="city" className={styles.hiddenLabel}>
              Cidade
            </label>
            <input
              id="city"
              type="text"
              placeholder="Cidade (obrigatório)"
              required
            />
          </div>
          <button onClick={sendEmail}>Enviar</button>
          { loading ? (
          <div class="loading">
            <span>Enviando...</span>
            <div class="spinner"></div>
          </div>
          ) : ''}              
        </form>        
      </div>
    </div>    
  )
};