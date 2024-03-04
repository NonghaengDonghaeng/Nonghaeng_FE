import Nav from "@/components/layout/nav/nav";
import { introduceHref } from "@/storage/href";

export default function page() {
  return (
    <>
      <Nav href={introduceHref} />
      <main id="main"></main>
    </>
  );
}
