import styles from "./.module.css";
import exp_detail from "@/db/expdata/detail.json";

export default function page() {
  const imgList = exp_detail.sub_img_url.map((item, index) => (
    <li key={index}>
      <img src={item} />
    </li>
  ));
  return (
    <main id="main">
      <section className={styles.section1}>
        <article>
          <img src={exp_detail.main_img_url} />
          <ul>{imgList}</ul>
        </article>
        <article>
          <h1></h1>
        </article>
      </section>
      <section className={styles.section2}></section>
    </main>
  );
}
