import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";
import React from "react";
import styles from "./blogPage.module.css";
export default function blogPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
