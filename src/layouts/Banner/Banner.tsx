import React from "react";
import styles from "./Banner.module.scss";
import CVButton from "@/components/CVButton/CVButton";

const Banner = () => {
  return (
    <div className={`${styles["banner"]}`}>
      <div className={`${styles["wrapper_banner"]} flex`}>
        <div className={`${styles["left_banner"]}`}>
          <div className={`${styles["title"]}`}>
            <p className={`color_text ${styles["text_hello"]}`}>Hi there!</p>
            <div className={`color_text flex ${styles["text_introduce"]}`}>
              <p>I am </p>
              <p className={`color_text ${styles["text_name"]}`}>
                Pham Thanh Tung
              </p>
            </div>
          </div>
          <p className={`color_text ${styles["description"]}`}>
            I am a front-end developer with one year experience
          </p>
          <CVButton className={`mt-6 p-6`} />
        </div>
        <picture className={`${styles["right_banner"]} block`}>
          <img src="/assets/images/developer_banner.svg" alt="developer" />
        </picture>
      </div>
    </div>
  );
};

export default Banner;
