import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Social from "@/components/Social/Social";

const Header = () => {
  return (
    <div className={`${styles["headers"]}`}>
      <div className={`${styles["wrapper_header"]}`}>
        <picture className={`block ${styles["wrapper_logo"]}`}>
          <img src="/assets/logo/thantung2_white.svg" alt="logo" />
        </picture>
        <div className={`${styles["nav_link"]}`}>
          <div className={`${styles["link_wrapper"]}`}>
            <Link href={"#technologies"} className={`color_text`}>
              Home
            </Link>
          </div>
          <div className={`${styles["link_wrapper"]}`}>
            <Link href={"/"} className={`color_text`}>
              Home
            </Link>
          </div>
          <div className={`${styles["link_wrapper"]}`}>
            <Link href={"/"} className={`color_text`}>
              Home
            </Link>
          </div>
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Header;
