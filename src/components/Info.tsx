import { FunctionComponent } from "react";
import styles from "./Info.module.css";

export type InfoType = {
  className?: string;
};

const Info: FunctionComponent<InfoType> = ({ className = "" }) => {
  return (
    <div className={[styles.info, className].join(" ")}>
      <div className={styles.reservationsInfo}>
        <div className={styles.div}>0000000000</div>
        <div className={styles.antonioBanderras}>Antonio Banderras</div>
      </div>
      <div className={styles.flightInfo}>
        <div className={styles.div1}>0000000000</div>
        <div className={styles.uralAirlines}>Ural Airlines</div>
        <div className={styles.div2}>000 мест</div>
        <div className={styles.div3}>00 000 ₽</div>
        <div className={styles.destination}>
          <div className={styles.svx}>SVX</div>
          <div className={styles.svo}>SVO</div>
          <img className={styles.destinationChild} alt="" src="/arrow-1.svg" />
        </div>
        <div className={styles.time}>
          <div className={styles.div4}>00:00</div>
          <div className={styles.div5}>00:00</div>
          <img className={styles.timeChild} alt="" src="/arrow-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Info;
