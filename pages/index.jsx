/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React from "react";
import Bottom from "../components/Bottom";
import Top from "../components/Top";
import styles from "../styles/default.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Top />
      <Bottom />
    </div>
  );
};

export default Home;
