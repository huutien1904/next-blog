import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
export default function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {/* {data?.map((item) => ( */}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
          // key={item._id}
        >
          {
            // item.img
            true && <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          }
          {/* {item.title} */}
          Check
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
          // key={item._id}
        >
          {
            // item.img
            true && <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          }
          {/* {item.title} */}
          Check
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
          // key={item._id}
        >
          {
            // item.img
            true && <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          }
          {/* {item.title} */}
          Check
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
          // key={item._id}
        >
          {
            // item.img
            true && <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          }
          {/* {item.title} */}
          Check
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
          // key={item._id}
        >
          {
            // item.img
            true && <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          }
          {/* {item.title} */}
          Check
        </Link>

        {/* ))} */}
      </div>
    </div>
  );
}
