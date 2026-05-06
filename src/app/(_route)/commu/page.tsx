import styles from "@/app/(_route)/trip/page.module.css";
import ListTitle from "@/components/ListTitle/ListTitle";

export default function Page() {
  return <section className={styles.trip_main}>
    <article>
      <ListTitle title="공지사항"/>
      <hr/>
    </article>
    <article>
      <ListTitle title="농행후기"/>
      <hr/>
    </article>
    <article>
      <ListTitle title="고객문의"/>
      <hr/>
    </article>
  </section>
}
