import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Active.module.css";

export type Property1ActiveType = {
  className?: string;

  /** Style props */
  property1ActivePosition?: CSSProperties["position"];
  property1ActiveTop?: CSSProperties["top"];
  property1ActiveLeft?: CSSProperties["left"];
  backgroundBackgroundColor?: CSSProperties["backgroundColor"];
  divColor?: CSSProperties["color"];

  /** Action props */
  onFlightsButtonContainerClick?: () => void;
};

const Property1Active: FunctionComponent<Property1ActiveType> = ({
  className = "",
  property1ActivePosition,
  property1ActiveTop,
  property1ActiveLeft,
  backgroundBackgroundColor,
  divColor,
  onFlightsButtonContainerClick,
}) => {
  const property1ActiveStyle: CSSProperties = useMemo(() => {
    return {
      position: property1ActivePosition,
      top: property1ActiveTop,
      left: property1ActiveLeft,
    };
  }, [property1ActivePosition, property1ActiveTop, property1ActiveLeft]);

  const backgroundStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: backgroundBackgroundColor,
    };
  }, [backgroundBackgroundColor]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  return (
    <div
      className={[styles.property1active, className].join(" ")}
      style={property1ActiveStyle}
      onClick={onFlightsButtonContainerClick}
    >
      <div className={styles.background} style={backgroundStyle} />
      <div className={styles.div} style={divStyle}>
        Рейсы
      </div>
    </div>
  );
};

export default Property1Active;
