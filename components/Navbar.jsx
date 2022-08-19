/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useState } from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.wrapper}>
      {active && <div className={styles.bg} />}
      <div className={styles.inner}>
        <div className={styles.burger}>
          {active ? (
            <img
              onClick={() => setActive(false)}
              className={styles.close}
              src="/images/icon-close.svg"
              alt=""
            />
          ) : (
            <img
              onClick={() => setActive(true)}
              className={styles.open}
              src="/images/icon-hamburger.svg"
              alt=""
            />
          )}
        </div>
        <div className={styles.logo}>
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <ul className={`${styles.nav_links} ${active ? styles.active : ""}`}>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
