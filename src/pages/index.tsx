import Head from 'next/head'
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
      <img src="/logo.svg" alt="Day Fisioterapia" width={300} height={200} />
        <h1 className={styles.title}>@fisioterapiaday</h1>

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
