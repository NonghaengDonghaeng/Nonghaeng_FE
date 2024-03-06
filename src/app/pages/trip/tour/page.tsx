import Nav from "@/components/layout/nav/nav";
import { tripHref } from "@/storage/href";

export default function page() {
  return (
    <>
      <Nav href={tripHref} />
      <main id="main">농촌여행_농촌관광 메인</main>
    </>
  );
}
