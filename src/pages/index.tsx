import Head from 'next/head'
import LinkSocial from '../Components/LinkSocial/LinkSocial'
import styles from '../styles/Home.module.css'


export default function Home() {
  const GTM_ID = 'GTM-M9WD4HW';
  return (
    <div className={styles.container}>
      <Head>
        <title>Day Fisioterapia</title>
        <meta name="description" content="Links da empresa Day Fisioterapia, Instagram, Facebook, Site, Google Maps..." />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Tag Manager */}
        <script
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${GTM_ID}');`,
                }}
            />
            {/* End Google Tag Manager */}
            {/* Google Tag Manager (noscript) */}
            <noscript
                dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}
            />
            {/* End Google Tag Manager (noscript) */}
      </Head>

      <main className={styles.main}>
      <img src="/logo.svg" alt="Day Fisioterapia" width={200} height={88} />
        <p className={styles.title}>@fisioterapiaday</p>
        <LinkSocial link="https://wa.me/5519993654693" id="whatsapp" title="Agendar pelo Whatsapp" image={'/whatsapp.svg'} />
        <LinkSocial link="https://www.facebook.com/day.fisioterapia" id="facebook" title="Página do Facebook" image={'/facebook.svg'} />
        <LinkSocial link="https://instagram.com/fisioterapiaday" id="instagram" title="Acesse o Instagram" image={'/instagram.svg'} /> 
        <LinkSocial link="mailto:contato@dayfisioterapia.com.br" id="email" title="Enviar um e-mail" image={'/mail.svg'} /> 
        <LinkSocial link="https://ul.waze.com/ul?ll=-22.79976258%2C-47.21721053&navigate=yes&zoom=17&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location" id="waze" title="Ir até o local com Waze" image={'/waze.svg'} />
        <LinkSocial link="https://g.page/fisioterapiaday?share" id="google" title="Ir com Google Maps" image={'/google-maps.svg'} />
      </main>
    </div>
  )
}
