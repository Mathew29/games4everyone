import React from "react";
import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Games4Everyone</title>
      </Head>
      <header className={styles.header}>header</header>

      
      <nav className={styles.nav}>nav</nav>


      <main className={styles.main}>{children}</main>

      
      <aside className={styles.aside}>aside</aside>


      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default Layout;
