import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Off.module.css";

export type Property1OffType = {
  className?: string;

  /** Style props */
  property1OffPosition?: CSSProperties["position"];
  property1OffTop?: CSSProperties["top"];
  property1OffLeft?: CSSProperties["left"];
};

const Property1Off: FunctionComponent<Property1OffType> = ({
  className = "",
  property1OffPosition,
  property1OffTop,
  property1OffLeft,
}) => {
  const property1OffStyle: CSSProperties = useMemo(() => {
    return {
      position: property1OffPosition,
      top: property1OffTop,
      left: property1OffLeft,
    };
  }, [property1OffPosition, property1OffTop, property1OffLeft]);

  return (
    <div
      className={[styles.property1off, className].join(" ")}
      style={property1OffStyle}
    >
      <div className={styles.background} />
      <div className={styles.div}>Автоподтверждение выключено</div>
    </div>
  );
};

export default Property1Off;
