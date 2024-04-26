"use client";
import React, { useRef, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import emailjs from "emailjs-com";
import { enqueueSnackbar } from "notistack";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_8d0ycfn",
        "template_jcxendn",
        form.current!,
        "X8CD0ptWfyRwPzdVw"
      )
      .then(
        (result) => {
          setIsSending(false);
          enqueueSnackbar("Message is successfully sent.", {
            variant: "success",
          });
        },
        (error) => {
          setIsSending(false);
          console.log(error.text);
          enqueueSnackbar("Fail to send message. Please try again.", {
            variant: "error",
          });
        }
      );

    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.content}>
        <div className={styles.img__Container}>
          <Image
            src="/contact2.png"
            alt="contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            disabled={isSending}
            className={styles?.input}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            disabled={isSending}
            className={styles?.input}
          />
          <textarea
            cols={30}
            rows={10}
            disabled={isSending}
            name="message"
            placeholder="Message"
            className={styles?.textArea}
          ></textarea>
          <button type="submit" disabled={isSending} className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
