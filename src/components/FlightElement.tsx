import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FlightElement.module.css";

export type FlightElementType = {
  className?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  timeTop?: CSSProperties["top"];
  timeLeft?: CSSProperties["left"];
  divTop?: CSSProperties["top"];
  divBottom?: CSSProperties["bottom"];
  arrowIconTop?: CSSProperties["top"];
  arrowIconBottom?: CSSProperties["bottom"];
  propWidth?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth1?: CSSProperties["width"];
  propLeft1?: CSSProperties["left"];

  /** Action props */
  arrive?: string;
  destination?: string;
  company?: string;
  number?: string;
  timeFrom?: string;
  timeTo?: string;
  places?: string;
  price?: string;
  onBackgroundClick?: () => void;
};

const FlightElement: FunctionComponent<FlightElementType> = ({
  arrive,
  destination,
  company,
  number,
  timeFrom,
  timeTo,
  places,
  price,
  className = "",
  prop,
  prop1,
  timeTop,
  timeLeft,
  divTop,
  divBottom,
  arrowIconTop,
  arrowIconBottom,
  propWidth,
  propLeft,
  propBackgroundColor,
  propWidth1,
  propLeft1,
  onBackgroundClick,
}) => {
  const flightElementStyle: CSSProperties = useMemo(() => {
    return {
      top: timeTop,
      left: "calc(50% - 926.5px)",
    };
  }, [timeTop, timeLeft]);

  const flightStyle: CSSProperties = useMemo(() => {
    return {
      top: "24.1%",
      bottom: "25.3%",
    };
  }, [divTop, divBottom]);

  const info1Style: CSSProperties = useMemo(() => {
    return {
      top: "16.67%",
      bottom: "16.67%",
    };
  }, [arrowIconTop, arrowIconBottom]);

  const reserveButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: "33.98%",
      left: "66.02%",
    };
  }, [propWidth, propLeft]);

  const background3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const div5Style: CSSProperties = useMemo(() => {
    return {
      width: "32.63%",
      left: "33.6%",
    };
  }, [propWidth1, propLeft1]);

  return (
    <div
      className={[styles.flightElement, className].join(" ")}
      style={flightElementStyle}
    >
      <div className={styles.background} />
      <div className={styles.flight} style={flightStyle}>
        <div className={styles.info} style={info1Style}>
          <div className={styles.div}>{number}</div>
          <div className={styles.uralAirlines}>{company}</div>
          <div className={styles.div1}>{prop}</div>
          <div className={styles.div2}>{price} ₽</div>
          <div className={styles.destination}>
            <div className={styles.svx}>{arrive}</div>
            <div className={styles.svo}>{destination}</div>
            <img
              className={styles.destinationChild}
              alt=""
              src="/arrow-1.svg"
            />
          </div>
          <div className={styles.time}>
            <div className={styles.div3}>{timeFrom}</div>
            <div className={styles.div4}>{timeTo}</div>
            <img className={styles.timeChild} alt="" src="/arrow-1.svg" />
          </div>
        </div>
        <div className={styles.reserveButton} style={reserveButtonStyle} onClick={onBackgroundClick}>
          <div
            className={styles.background1}
            style={background3Style}
            
          />
          <div className={styles.div5} style={div5Style}>
            {prop1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightElement;
