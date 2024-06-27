import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Waiting1.module.css";

export type Property1Waiting1Type = {
  className?: string;

  /** Style props */
  property1WaitingPosition?: CSSProperties["position"];
  property1WaitingTop?: CSSProperties["top"];
  property1WaitingLeft?: CSSProperties["left"];
};

const Property1Waiting1: FunctionComponent<Property1Waiting1Type> = ({
  className = "",
  property1WaitingPosition,
  property1WaitingTop,
  property1WaitingLeft,
}) => {
  const property1WaitingStyle: CSSProperties = useMemo(() => {
    return {
      position: property1WaitingPosition,
      top: property1WaitingTop,
      left: property1WaitingLeft,
    };
  }, [property1WaitingPosition, property1WaitingTop, property1WaitingLeft]);

  return (
    <div
      className={[styles.property1waiting, className].join(" ")}
      style={property1WaitingStyle}
    >
      <div className={styles.background} />
      <div className={styles.reservation}>
        <div className={styles.info}>
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
        <div className={styles.actions}>
          <div className={styles.status}>
            <div className={styles.background1} />
            <div className={styles.div6}>Ожидает подтверждения</div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.payButton}>
              <div className={styles.background2} />
              <div className={styles.div7}>Отменить</div>
            </div>
            <div className={styles.status1}>
              <div className={styles.background3} />
              <div className={styles.div8}>Подтвердить</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Waiting1;
