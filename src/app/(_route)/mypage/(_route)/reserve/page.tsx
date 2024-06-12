import resData from "@/db/reserve/reserveListData.json";
import { useEffect, useState } from "react";

export default function Page() {
  const [resData, setResData] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setResData(resData);
    setVisible(true);
  }, []);

  return <section></section>;
}
