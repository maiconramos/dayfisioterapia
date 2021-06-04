import Head from 'next/head'
import LinkSocial from '../Components/LinkSocial/LinkSocial'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Day Fisioterapia</title>
        <meta name="description" content="Links da empresa Day Fisioterapia, Instagram, Facebook, Site, Google Maps..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <img src="/logo.svg" alt="Day Fisioterapia" width={300} height={150} />
        <p className={styles.title}>@fisioterapiaday</p>

        <LinkSocial link="https://wa.me.com/5519993654693" title="Agendar pelo Whatsapp" image={'/whatsapp.svg'} />
        <LinkSocial link="https://www.facebook.com/day.fisioterapia" title="Página do Facebook" image={'/facebook.svg'} />
        <LinkSocial link="https://instagram.com/fisioterapiaday" title="Acesse o Instagram" image={'/instagram.svg'} /> 
        <LinkSocial link="mailto:contato@dayfisioterapia.com.br" title="Enviar um e-mail" image={'/mail.svg'} /> 
        <LinkSocial link="https://dayfisioterapia.com.br" title="Nosso Site" image={'/web.svg'} />
        <LinkSocial link="https://ul.waze.com/ul?utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location" title="Ir até o local com Waze" image={'/waze.svg'} />
        <LinkSocial link="https://g.page/fisioterapiaday?share" title="Ir com Google Maps" image={'/google-maps.svg'} />
        
      </main>
    </div>
  )
}
