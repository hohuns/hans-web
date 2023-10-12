import { Fragment } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import axios from "axios";

async function getData(id: number) {
  try {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/posts/${id}`);
    return res?.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log(err);
      return notFound();
    }
  }
}

export async function generateMetadata({
  params,
}: {
  params: {
    id: number;
    title: string;
    desc: string;
    img: string;
    username: string;
    content: string;
  };
}) {
  const post = await getData(params?.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({
  params,
}: {
  params: {
    id: number;
    title: string;
    desc: string;
    img: string;
    username: string;
    content: string;
  };
}) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data?.post?.title}</h1>
          <p className={styles.desc}>{data?.post?.desc}</p>
          <div className={styles?.author}>
            <Image
              src={data?.post?.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>
              {data?.post?.username?.toUpperCase()}
            </span>
          </div>
        </div>
        <div className={styles.img__Container}>
          <Image
            src={data?.post?.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data?.post?.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
