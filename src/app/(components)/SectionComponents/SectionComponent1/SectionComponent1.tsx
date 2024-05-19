import Image from "next/image";
import Link from "next/link";
import styles from "./SectionComponent1.module.css"
import section1_bg from "img/bg/home_bg1.png";
import More_nonghang_Ic from "icon/more_nonghaeng_white.svg";

function SectionComponent1(){
    return <div className={styles.section1}>
        <Image src={section1_bg} alt="section1_bg" priority={true}></Image>
        <h1>
            똑같은 여행은 지루해...
            <br/>
            농행동행이 도와드릴게요!
        </h1>
        <h2>
            테마별 숨은 명소를 모두 모아
            <br/>더 편안한 여행계획을 만드는 똑똑한 플랫폼
        </h2>
        <Link href="/intro/nonghaeng">
            농행동행 알아보기
            <More_nonghang_Ic/>
        </Link>
    </div>;
}

export default SectionComponent1;