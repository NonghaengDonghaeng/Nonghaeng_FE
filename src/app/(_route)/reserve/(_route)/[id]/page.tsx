"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { checkReserveApi } from "../../(api)/checkReserveApi";

function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    checkReserveApi({ id: params.id }).then((res) => {
      if (res?.status == 200) {
        setData(res?.data);
        setVisible(true);
      }
    });
  }, []);

  return (
    <section
      className={`${styles.reserve_check} ${
        visible ? "isvisible" : "isinvisible"
      }`}
    >
      <div>
        <span>{data ? "예약이 취소되었습니다." : "예약이 완료되었습니다"}</span>
      </div>
    </section>
  );
}

export default Page;
