"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "@/components/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={25}
          height={25}
          className={styles.image}
        />
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={() => signOut()}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
