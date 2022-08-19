/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import styles from "../styles/bottom.module.css"

const Bottom = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <img src="/images/image-about-dark.jpg" alt="dark_image" />
        <div className={styles.about_ctn}>
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <img src="/images/image-about-light.jpg" alt="light_image" />
      </div>
    </div>
  );
}

export default Bottom;
