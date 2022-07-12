import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function SearchMovies({ list }) {
  const [searchText, setSearchText] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Cine</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <link rel="icon" href="/favicon.ico" />

      <main className={styles.main}>
        <h1 className={styles.title}>Search</h1>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span>Movie searched: {searchText} </span>
      </main>
    </div>
  );
}
