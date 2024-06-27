import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ReservationElement1.module.css";

export type ReservationElement1Type = {
  className?: string;
  prop?: string;

  /** Style props */
  flightTop?: CSSProperties["top"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
};

const ReservationElement1: FunctionComponent<ReservationElement1Type> = ({
  className = "",
  prop,
  flightTop,
  propBackgroundColor,
  propWidth,
  propLeft,
}) => {
  const reservationElementStyle: CSSProperties = useMemo(() => {
    return {
      top: flightTop,
    };
  }, [flightTop]);

  const background4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const div6Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      left: propLeft,
    };
  }, [propWidth, propLeft]);

  return (
    <div
      className={[styles.reservationElement, className].join(" ")}
      style={reservationElementStyle}
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
        <div className={styles.status}>
          <div className={styles.background1} style={background4Style} />
          <div className={styles.div5} style={div6Style}>
            {prop}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationElement1;
