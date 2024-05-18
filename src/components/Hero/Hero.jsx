import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3>Hello, I am</h3>
        <h1 className={styles.title}>Sabareeswar Senthilvel</h1>
        
        <p className={styles.description}>
          Recent Graduate from Arizona State University looking for full time opportunities in Software Engineering.
        </p>
        
      </div>
      <img
        src={getImageUrl("hero/sab.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
