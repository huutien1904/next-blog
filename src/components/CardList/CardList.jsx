import React from "react";
import styles from "./cardList.module.css";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

export default function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Pagination />
    </div>
  );
}
