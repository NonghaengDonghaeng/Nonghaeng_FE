import styles from './MainSection.module.css';
import SectionComponent1 from "@/app/(components)/SectionComponents/SectionComponent1/SectionComponent1";
import SectionComponent2 from "@/app/(components)/SectionComponents/SectionComponent2/SectionComponent2";
import SectionComponent3 from "@/app/(components)/SectionComponents/SectionComponent3/SectionComponent3";
import {useState} from "react";
import BackIc from "icon/back_stone.svg"
import FrontIc from "icon/front_stone.svg"
import StopIc from "icon/stop_stone.svg"


function MainSection() {

    const sectionMap: any = {
        1: <SectionComponent1/>, 2: <SectionComponent2/>, 3: <SectionComponent3/>,
    };

    const [sectionNumber, setSectionNumber] = useState<number>(1);
    const [isNumbering, setIsNumbering] = useState(true);

    // 매초 1씩 카운트

    setInterval(() => {
        if (isNumbering) {
            increaseNumber()
        }
    }, 5000);


    const increaseNumber = () => {
        if (sectionNumber < Object.keys(sectionMap).length) {
            setSectionNumber(sectionNumber + 1);
        } else {
            setSectionNumber(1);
        }
    }

    const decreaseNumber = () => {
        if (sectionNumber > 1) {
            setSectionNumber(sectionNumber - 1);
        } else {
            setSectionNumber(Object.keys(sectionMap).length);
        }
    }

    return <section className={styles.main_section}>
        <div>{sectionMap[sectionNumber]}</div>

        <div>
            <button onClick={() => setIsNumbering(!isNumbering)}>{isNumbering ? <StopIc/> : <FrontIc/>}</button>
            <div>
                <button onClick={() => decreaseNumber()}><BackIc/></button>
                {`${sectionNumber}`}{" / "}{"3"}
                <button onClick={() => increaseNumber()}><FrontIc/></button>
            </div>
        </div>
    </section>;
}

export default MainSection;