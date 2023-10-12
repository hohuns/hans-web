import { Fragment } from "react";
import styles from "./pages.module.css";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next/types";
import axios from "axios";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "HANS - Blog",
  description: "This is my article pages.😇",
};

async function getData() {
  try {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/posts`);
    return res?.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log(err);
      return notFound();
    }
  }
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.main__Container}>
      <h1 className={styles?.main__Title}>My Posts</h1>
      {data?.posts?.map(
        (item: {
          _id: string;
          id: string;
          img: string;
          title: string;
          desc: string;
        }) => (
          <Link
            href={`/blog/${item._id}`}
            className={styles.container}
            key={item.id}
          >
            <div className={styles.img__Container}>
              <Image
                className={styles.image}
                src={item.img}
                alt="img"
                fill={true}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default Blog;
