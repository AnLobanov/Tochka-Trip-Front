import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1NoPaid1.module.css";

export type Property1NoPaid1Type = {
  className?: string;
  prop?: string;
  antonioBanderras?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  property1NoPaidPosition?: CSSProperties["position"];
  property1NoPaidTop?: CSSProperties["top"];
  property1NoPaidLeft?: CSSProperties["left"];
  reservationHeight?: CSSProperties["height"];
  reservationBottom?: CSSProperties["bottom"];
  infoHeight?: CSSProperties["height"];
  infoTop?: CSSProperties["top"];
  infoBottom?: CSSProperties["bottom"];
  divWidth?: CSSProperties["width"];
  divLeft?: CSSProperties["left"];
  antonioBanderrasWidth?: CSSProperties["width"];
  antonioBanderrasLeft?: CSSProperties["left"];
  statusHeight?: CSSProperties["height"];
  statusBottom?: CSSProperties["bottom"];
  backgroundBackgroundColor?: CSSProperties["backgroundColor"];
  cancelButtonHeight?: CSSProperties["height"];
  cancelButtonTop?: CSSProperties["top"];
  divWidth1?: CSSProperties["width"];
  divLeft1?: CSSProperties["left"];
  divTop?: CSSProperties["top"];
};

const Property1NoPaid1: FunctionComponent<Property1NoPaid1Type> = ({
  className = "",
  prop,
  antonioBanderras,
  prop1,
  prop2,
  property1NoPaidPosition,
  property1NoPaidTop,
  property1NoPaidLeft,
  reservationHeight,
  reservationBottom,
  infoHeight,
  infoTop,
  infoBottom,
  divWidth,
  divLeft,
  antonioBanderrasWidth,
  antonioBanderrasLeft,
  statusHeight,
  statusBottom,
  backgroundBackgroundColor,
  cancelButtonHeight,
  cancelButtonTop,
  divWidth1,
  divLeft1,
  divTop,
}) => {
  const property1NoPaidStyle: CSSProperties = useMemo(() => {
    return {
      position: property1NoPaidPosition,
      top: property1NoPaidTop,
      left: property1NoPaidLeft,
    };
  }, [property1NoPaidPosition, property1NoPaidTop, property1NoPaidLeft]);

  const reservationStyle: CSSProperties = useMemo(() => {
    return {
      height: reservationHeight,
      bottom: reservationBottom,
    };
  }, [reservationHeight, reservationBottom]);

  const infoStyle: CSSProperties = useMemo(() => {
    return {
      height: infoHeight,
      top: infoTop,
      bottom: infoBottom,
    };
  }, [infoHeight, infoTop, infoBottom]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      width: divWidth,
      left: divLeft,
    };
  }, [divWidth, divLeft]);

  const antonioBanderrasStyle: CSSProperties = useMemo(() => {
    return {
      width: antonioBanderrasWidth,
      left: antonioBanderrasLeft,
    };
  }, [antonioBanderrasWidth, antonioBanderrasLeft]);

  const statusStyle: CSSProperties = useMemo(() => {
    return {
      height: statusHeight,
      bottom: statusBottom,
    };
  }, [statusHeight, statusBottom]);

  const background2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: backgroundBackgroundColor,
    };
  }, [backgroundBackgroundColor]);

  const cancelButtonStyle: CSSProperties = useMemo(() => {
    return {
      height: cancelButtonHeight,
      top: cancelButtonTop,
    };
  }, [cancelButtonHeight, cancelButtonTop]);

  const div4Style: CSSProperties = useMemo(() => {
    return {
      width: divWidth1,
      left: divLeft1,
      top: divTop,
    };
  }, [divWidth1, divLeft1, divTop]);

  return (
    <div
      className={[styles.property1noPaid, className].join(" ")}
      style={property1NoPaidStyle}
    >
      <div className={styles.background} />
      <div className={styles.reservation} style={reservationStyle}>
        <div className={styles.info} style={infoStyle}>
          <div className={styles.reservationInfo}>
            <div className={styles.div} style={div3Style}>
              {prop}
            </div>
            <div
              className={styles.antonioBanderras}
              style={antonioBanderrasStyle}
            >
              {antonioBanderras}
            </div>
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
          <div className={styles.status} style={statusStyle}>
            <div className={styles.background1} style={background2Style} />
            <div className={styles.div6}>{prop1}</div>
          </div>
          <div className={styles.cancelButton} style={cancelButtonStyle}>
            <div className={styles.background2} />
            <div className={styles.div7} style={div4Style}>
              {prop2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1NoPaid1;
