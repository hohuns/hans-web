import Image from "next/image";
import styles from "./page.module.css";
import img from "public/hero.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.title}>
          Hello,
          <br /> I am JOO SUNG JAE, HANS
        </p>
        <p className={styles.desc}>
          Junior MERN Stack Developer who loves learning and experimenting with
          cutting-edge technologies to stay ahead of the game. Seeking to
          further skills in the MERN stack.
        </p>
        <div className={styles.buttons}>
          <a href="/JOOSUNGJAE_CV.pdf" className={styles.button} download>
            Download CV
          </a>
          <Link className={styles.button} href="/portfolio">
            Check My Works
          </Link>
        </div>
      </div>
      <div className={styles.item}>
        <Image src={img} alt="" className={styles.image} />
      </div>
    </div>
  );
}
