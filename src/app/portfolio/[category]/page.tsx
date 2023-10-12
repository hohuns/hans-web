import React, { useContext } from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "../data";
import { notFound } from "next/navigation";

const getData = (cat: string) => {
  const data = (items as any)[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }: { params: { category: string } }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.cat__Title}>{params.category.toUpperCase()}</h1>
      {data.map(
        (item: {
          id: number;
          title: string;
          desc: string;
          image: string;
          link: string;
          type: string;
        }) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <div className={styles.title__Container}>
                <h1 className={styles.title}>{item.title} &nbsp;</h1>
                {item.type === "React" && (
                  <Image
                    src="/react.png"
                    alt="logo"
                    width={30}
                    height={30}
                    className={styles.image}
                  />
                )}
                {item.type === "Next" && (
                  <Image
                    src="/nextjs.png"
                    alt="logo"
                    width={30}
                    height={30}
                    className={styles.image}
                  />
                )}
                {item.type === "Java" && (
                  <Image
                    src="/java.png"
                    alt="logo"
                    width={30}
                    height={30}
                    className={styles.image}
                  />
                )}
              </div>
              <p className={styles.desc}>{item.desc}</p>
              <Button
                text="See More Details"
                url={item?.link}
                isTarget={true}
              />
            </div>
            <div className={styles.img__Container}>
              <Image
                className={styles.image}
                fill={true}
                src={item.image}
                alt=""
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Category;
