"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  function login() {
    localStorage.setItem("isLogin", "isLogin");
    router.push("/");
  }

  return (
    <main id="main">
      <section className={styles.login_section}>
        <button onClick={login}>로그인</button>
      </section>
    </main>
  );
}
