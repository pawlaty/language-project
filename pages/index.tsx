import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LangApp from './lang-components/lang-app'
import { CSSProperties } from 'react'

const Home: NextPage = () => {

  const styll:{[key:string]:CSSProperties}={
    spam_paw:{margin:"0 .3rem ",border:"1px solid #000"},
    textcentr:{textAlign:"center"}
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Language-Project</title>
        <meta name="description" content="Language Project by Player" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="icon" href="vercel.svg" />
      </Head>

      <main className={styles.main}>
        <LangApp />
      </main>

      <footer className={styles.footer}>
        <span style={styll.textcentr}>
        Created by {' '}<span style={styll.spam_paw}> <i> Pawlaty</i>{' '}&#x1F44C;</span>{' '}in NextJS<br></br>
        Jelenia Góra 2021</span>
      </footer>
    </div>
  )
}

export default Home
