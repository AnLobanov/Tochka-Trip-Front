import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ReservationElement.module.css";

export type ReservationElementType = {
  className?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  backgroundTop?: CSSProperties["top"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const ReservationElement: FunctionComponent<ReservationElementType> = ({
  className = "",
  prop,
  prop1,
  backgroundTop,
  propBackgroundColor,
}) => {
  const reservationElement1Style: CSSProperties = useMemo(() => {
    return {
      top: backgroundTop,
    };
  }, [backgroundTop]);

  const background5Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={[styles.reservationElement, className].join(" ")}
      style={reservationElement1Style}
    >
      <div className={styles.background} />
      <div className={styles.flight}>
        <div className={styles.info}>
          <div className={styles.div}>0000000000</div>
          <div className={styles.uralAirlines}>Ural Airlines</div>
          <div className={styles.div1}>000 мест</div>
          <div className={styles.div2}>00 000 ₽</div>
          <div className={styles.destination}>
            <div className={styles.svx}>SVX</div>
            <div className={styles.svo}>SVO</div>
            <img
              className={styles.destinationChild}
              alt=""
              src="/arrow-1.svg"
            />
          </div>
          <div className={styles.time}>
            <div className={styles.div3}>00:00</div>
            <div className={styles.div4}>00:00</div>
            <img className={styles.timeChild} alt="" src="/arrow-1.svg" />
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.payButton}>
            <div className={styles.background1} />
            <div className={styles.div5}>{prop}</div>
          </div>
          <div className={styles.status}>
            <div className={styles.background2} style={background5Style} />
            <div className={styles.div6}>{prop1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationElement;
