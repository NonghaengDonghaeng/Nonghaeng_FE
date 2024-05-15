import {
  expRoundListType,
  expRoundType,
  setExpRoundType,
} from "../../(types)/expRoundType";
import styles from "./ExpRoundList.module.css";

type PropsType = {
  roundResData: expRoundListType | undefined;
  selectedRound: expRoundType | undefined;
  setSelectedRound: setExpRoundType;
};

export default function ExpRoundList({
  roundResData,
  selectedRound,
  setSelectedRound,
}: PropsType) {
  const roundList = roundResData?.content.map((item, index) => (
    <li
      key={index}
      onClick={() => {
        setSelectedRound(item);
      }}
      className={selectedRound == item ? styles.on : styles.off}
    >
      <label>
        {item.start_time} - {item.end_time}
      </label>
      <label>잔여 : {item.remain_participant}</label>
    </li>
  ));
  return (
    <div className={styles.exp_round_list}>
      <ul>{roundList}</ul>
    </div>
  );
}
