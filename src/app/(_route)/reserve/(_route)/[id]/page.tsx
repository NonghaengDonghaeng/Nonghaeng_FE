import styles from "./page.module.css";

function Page({ params }: { params: { id: string } }) {
  return (
    <section className={styles.reserve_check}>
      {params.id}예약이 취소 또는 완료되었습니다.
    </section>
  );
}

export default Page;
