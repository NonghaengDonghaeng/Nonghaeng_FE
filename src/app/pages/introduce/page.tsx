import Nav from "@/components/layout/nav/nav";
import { introduceHref } from "../../../../public/href/href";

export default function page() {
  return (
    <>
      <Nav href={introduceHref} />
      <main id="main">농행동행 메인</main>
    </>
  );
}
