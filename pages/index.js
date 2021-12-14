import Head from "next/head";
import styles from "../styles/Home.module.css";
import Police from "../components/Call/17";
import UrgenceEuropéen from "../components/Call/112";
import Bedroom from "../components/Call/115";
import Samu from "../components/Call/15";
import Malentendants from "../components/Call/114";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#db001d"></meta>
      </Head>

      <main className={styles.main}>
        <div className="phlav_grid">
          <div className="div_1">

            <section className={styles.welcome}>
          <h1>Signaler les violences intrafamiliales, sexistes et sexuelles</h1>
              </section>
          <section className={styles.sred}><h1>Urgence</h1></section>

            <Police />
            <UrgenceEuropéen />
            <Bedroom />
            <Samu />
            <Malentendants />
          </div>

          <div className="div_2">collom 2</div>
        </div>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}
