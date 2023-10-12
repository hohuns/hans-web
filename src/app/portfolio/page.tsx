import { Fragment } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "HANS - Portfolio",
  description: "These are my works..😌",
};

const Portfolio = () => {
  return (
    <div className={styles?.container}>
      <div className={styles?.select__Title}>Choose a theme</div>
      <div className={styles?.items}>
        <Link href="/portfolio/websites" className={styles?.item}>
          <div className={styles?.flipcard}>
            <div className={styles?.flipcard__inner}>
              <div className={styles?.flipcard__front}>
                <Image
                  className={styles?.img}
                  src="/websites.jpg"
                  alt="web"
                  fill={true}
                />
                <span className={styles?.title}>Websites</span>
              </div>
              <div className={styles?.flipcard__back}>
                <h1>Websites has </h1>
                <h1>17 Projects</h1>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/portfolio/applications" className={styles?.item}>
          <div className={styles?.flipcard}>
            <div className={styles?.flipcard__inner}>
              <div className={styles?.flipcard__front}>
                <Image
                  className={styles?.img}
                  src="/apps.jpg"
                  alt="app"
                  fill={true}
                />
                <span className={styles?.title}>Applications</span>
              </div>
              <div className={styles?.flipcard__back}>
                <h1>Applications has</h1>
                <h1>5 Projects</h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
