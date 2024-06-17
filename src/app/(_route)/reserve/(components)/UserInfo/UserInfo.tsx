import styles from "./UserInfo.module.css";
import { userInfoDataType } from "../../(types)/userInfoDataType";

type PropsType = {
  userData: userInfoDataType | undefined;
};

export default function UserInfo({ userData }: PropsType) {
  return (
    <div className={styles.user_info}>
      <p>
        <label>예약자명 :</label>
        <span>{userData?.reservation_person_name}</span>
      </p>
      <p>
        <label>전화번호 :</label>
        <span>{userData?.phone_number}</span>
      </p>
      <p>
        <label>이메일 :</label>
        <span>{userData?.email}</span>
      </p>
      {/* <p>
        <label>보유포인트 :</label>
        <span>{userData?.point}</span>
      </p> */}
    </div>
  );
}
