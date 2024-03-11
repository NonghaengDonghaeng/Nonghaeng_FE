import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/layout/nav/nav";
import TourList from "@/components/common/tourlist/tourlist";
import ExpList from "@/components/common/explist/explist";
import styles from "./.module.css";
import { tripHref } from "@/storage/href";
import tour_list from "@/db/tourdata/list.json";
import exp_list from "@/db/expdata/list.json";
import more_green from "img/main/more_green.png";

export default function page() {
  return (
    <>
      <Nav href={tripHref} />
      <main id="main">
        <section className={styles.trip_main}>
          <article>
            <h1>
              농촌관광
              <Link href="trip/tour">
                더 많은 농촌관광 보러가기
                <Image src={more_green} alt="more_green" />
              </Link>
            </h1>
            <hr />
            <TourList content={tour_list.content} />
          </article>
          <article>
            <h1>
              농촌체험
              <Link href="trip/exp">
                더 많은 농촌체험 보러가기
                <Image src={more_green} alt="more_green" />
              </Link>
            </h1>
            <hr />
            <ExpList content={exp_list.content} />
          </article>
        </section>
      </main>
    </>
  );
}
