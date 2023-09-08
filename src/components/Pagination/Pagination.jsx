"use client";
import React from "react";
import styles from "./pagination.module.css";
// import { useRouter } from "next/router";
export default function Pagination() {
  //   const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        //   disabled={!hasPrev}
        //   onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        //   onClick={() => router.push(`?page=${page + 1}`)}
        //   disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}
