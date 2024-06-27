import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Done1.module.css";

export type Property1Done1Type = {
  className?: string;

  /** Style props */
  property1DonePosition?: CSSProperties["position"];
  property1DoneTop?: CSSProperties["top"];
  property1DoneLeft?: CSSProperties["left"];
};

const Property1Done1: FunctionComponent<Property1Done1Type> = ({
  className = "",
  property1DonePosition,
  property1DoneTop,
  property1DoneLeft,
}) => {
  const property1DoneStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DonePosition,
      top: property1DoneTop,
      left: property1DoneLeft,
    };
  }, [property1DonePosition, property1DoneTop, property1DoneLeft]);

  return (
    <div
      className={[styles.property1done, className].join(" ")}
      style={property1DoneStyle}
    >
      <div className={styles.background} />
      <div className={styles.flight}>
        <div className={styles.info}>
          <div className={styles.reservationInfo}>
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
              <img
                className={styles.destinationChild}
                alt=""
                src="/arrow-1.svg"
              />
            </div>
            <div className={styles.time}>
              <div className={styles.div4}>00:00</div>
              <div className={styles.div5}>00:00</div>
              <img className={styles.timeChild} alt="" src="/arrow-1.svg" />
            </div>
          </div>
        </div>
        <div className={styles.status}>
          <div className={styles.background1} />
          <div className={styles.div6}>Выполнено</div>
        </div>
      </div>
    </div>
  );
};

export default Property1Done1;
