import { Fragment } from "react";
import styles from "./pages.module.css";
import Image from "next/image";
import { Metadata } from "next/types";
import { BsPatchCheckFill } from "react-icons/bs";

export const metadata: Metadata = {
  title: "HANS - About",
  description: "This is introduction of my self.😇",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img__Container}>
        <Image
          src="/about-me.jpg"
          fill={true}
          alt="me"
          className={styles.img}
        />
        <div className={styles.img__Text}>
          <h1 className={styles.img__Title}>
            JOO SUNG JAE, HANS - Junior MERN Stack Developer
          </h1>
        </div>
      </div>
      <div className={styles.text__Container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>
            An aspiring Junior MERN Stack developer with 2 years of experience
            developing production-ready application with
            Next/React.js/Typescript, MUI5, tailwind, Sass and more in frontend
            side that always targeting for writing clean, tested, and
            maintainable code.
            <br />
            <br />
            Furthermore, Mongodb, firebase, node.js, prisma and express.js for
            backend side as well for well round coding experience. And also
            experienced in collaborating in an Agile environment leveraging
            Jira.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What Can I do?</h1>
          <div className={styles.experience__container}>
            <div className={styles.experience__frontend}>
              <h3>Frontend Developement</h3>
              <div className={styles.experience__content}>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>HTML</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>CSS</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Sass</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Tailwind CSS</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>JavaScript</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>TypeScript</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>React.js</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Next.js</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>React-Native</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Redux</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>React-Query</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>MUI 5</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Native Base</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Bootstrap</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Java</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
              </div>
            </div>
            <div className={styles.experience__backend}>
              <h3>Backend Developement</h3>
              <div className={styles.experience__content}>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Node.js</h4>
                    <small>Experienced</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Express.js</h4>
                    <small>Experienced</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>MongoDB</h4>
                    <small>Experienced</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Mongoose</h4>
                    <small>Experienced</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>MySQL</h4>
                    <small>Experienced</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Strapi</h4>
                    <small>Experienced</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Firebase</h4>
                    <small>Experienced</small>
                  </div>
                </article>
                <article className={styles.experience__details}>
                  <BsPatchCheckFill
                    className={styles.experience__details_icon}
                  />
                  <div>
                    <h4>Prisma</h4>
                    <small>Experienced</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
