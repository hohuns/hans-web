import { Fragment } from "react";
import styles from "./page.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className={styles?.main__Title}>My Works</h1>
      {children}
    </div>
  );
};

export default Layout;
