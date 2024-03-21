import { Fragment } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2024 Hans Sung JAE Joo. All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://m.me/hans.joo.73" target="_blank">
          <Image
            src="/1.png"
            className={styles.icon}
            width={20}
            height={20}
            alt="hans-facebook"
          />
        </Link>
        <Link href="https://github.com/hohuns" target="_blank">
          <Image
            src="/2.png"
            className={styles.icon}
            width={20}
            height={20}
            alt="hans-github"
          />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=85294828013"
          target="_blank"
        >
          <Image
            src="/3.png"
            className={styles.icon}
            width={20}
            height={20}
            alt="hans-whatsapp"
          />
        </Link>
        <Link href="mailto:hohunsjoo11177@gmail.com" target="_blank">
          <Image
            src="/4.png"
            className={styles.icon}
            width={20}
            height={20}
            alt="hans-mail"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sung-jae-joo-40204917a/"
          target="_blank"
        >
          <Image
            src="/5.png"
            className={styles.icon}
            width={20}
            height={20}
            alt="hans-linkedin"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
