import { Fragment } from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({
  text,
  url,
  isTarget,
}: {
  text?: string;
  url?: string;
  isTarget?: boolean;
}) => {
  return (
    <Link href={url ? url : "#"} target={isTarget ? "_blank" : "#"}>
      <button className={styles?.container}>{text}</button>
    </Link>
  );
};

export default Button;
