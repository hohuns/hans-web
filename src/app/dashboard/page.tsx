"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  useQueryFetchGet,
  useQueryPostMutation,
  useQueryDeleteMutation,
} from "@/hooks/useReactQuery";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSnackbar } from "notistack";
import Loader from "@/components/Loader";

interface IFormInput {
  title: string;
  desc: string;
  img: string;
  content: string;
}

const Dashboard = () => {
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm<IFormInput>();
  const [selectedId, setSelectedId] = useState<string>("");
  //React Query
  const { status, data, isFetching, refetch, isError } = useQueryFetchGet(
    `/api/posts?username=${
      session?.data?.user?.name ? session?.data?.user?.name : undefined
    }`,
    ["posts"]
  );
  const { mutate: mutatePost } = useQueryPostMutation(
    `/api/posts`,
    ["posts"],
    refetch
  );
  const { mutate: mutateDelete } = useQueryDeleteMutation(
    `/api/posts/${selectedId}`,
    ["posts"],
    refetch
  );

  useEffect(() => {
    if (session.status === "authenticated") {
      refetch();
    }
  }, [refetch, session.status]);

  if (session.status === "loading") {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleDelete = async (id: string) => {
    setSelectedId(id);
    setTimeout(() => {
      mutateDelete();
    }, 100);
  };

  const submitHandler: SubmitHandler<IFormInput> = (data: IFormInput) => {
    const requestBody = {
      title: data?.title,
      desc: data?.desc,
      img: data?.img,
      content: data?.content,
      username: session?.data?.user?.name,
    };
    mutatePost(requestBody);
  };

  if (
    session.status === "authenticated" &&
    session?.data?.user?.name === "HANS JOO"
  ) {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isFetching ? (
            <Loader />
          ) : (
            data?.posts?.map(
              (post: { _id: string; img: string; title: string }) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.img__Container}>
                    <Image src={post.img} alt="" fill={true} />
                  </div>
                  <h2 className={styles.post__Title}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    🗑️
                  </span>
                </div>
              )
            )
          )}
        </div>
        <form
          className={styles.new}
          noValidate
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1>Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className={styles.input}
            {...register("title", { required: true })}
          />
          <input
            type="text"
            placeholder="Desc"
            className={styles.input}
            {...register("desc", { required: true })}
          />
          <input
            type="text"
            placeholder="Image"
            className={styles.input}
            {...register("img", { required: true })}
          />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols={30}
            rows={10}
            {...register("content", { required: true })}
          ></textarea>
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    );
  } else if (session.status === "authenticated") {
    enqueueSnackbar("This function is only for admin.", {
      variant: "error",
      preventDuplicate: true,
    });
    setTimeout(() => {
      signOut({
        callbackUrl: `${window.location.origin}`,
      });
    }, 1500);
  }
};

export default Dashboard;
