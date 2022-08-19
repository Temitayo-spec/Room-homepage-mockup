/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import styles from "../styles/top.module.css";
import Navbar from "./Navbar";

const Top = () => {
  const [num, setNum] = useState(0);
  const texts = [
    {
      heading_text: "Discover innovative ways to decorate",
      p_text:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      image: "/images/desktop-image-hero-1.jpg",
    },
    {
      heading_text: "We are available all across the globe",
      p_text:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      image: "/images/desktop-image-hero-2.jpg",
    },
    {
      heading_text: "Manufactured with the best materials",
      p_text:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      image: "/images/desktop-image-hero-3.jpg",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.lhs}>
        <div className={styles.img}>
          <img src={texts[num].image} alt="scroll_images" />
        </div>
        <Navbar />
      </div>
      <div className={styles.rhs}>
        <div className={styles.texts}>
          <h1 className={num === 0 ? styles.active : ""}>{texts[num].heading_text}</h1>
          <p>{texts[num].p_text}</p>

          <div className={styles.shop_now}>
            <h4>
              SHOP NOW
              <span>
                <img src="/images/icon-arrow.svg" alt="arrow" />
              </span>
            </h4>
          </div>
        </div>

        <div className={styles.arrow_ctn}>
          <img
            onClick={() => {
              if (num === 2) {
                setNum(0);
              } else setNum(num + 1);
            }}
            src="/images/icon-angle-left.svg"
            alt=""
          />
          <img
            onClick={() => {
              if (num === 0) {
                setNum(2);
              } else setNum(num - 1);
            }}
            src="/images/icon-angle-right.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Top;
