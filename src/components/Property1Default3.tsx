import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Default3.module.css";

export type Property1Default3Type = {
  className?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultRight?: CSSProperties["right"];
  property1DefaultBottom?: CSSProperties["bottom"];
};

const Property1Default3: FunctionComponent<Property1Default3Type> = ({
  className = "",
  property1DefaultPosition,
  property1DefaultRight,
  property1DefaultBottom,
}) => {
  const property1Default2Style: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      right: property1DefaultRight,
      bottom: property1DefaultBottom,
    };
  }, [property1DefaultPosition, property1DefaultRight, property1DefaultBottom]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={property1Default2Style}
    >
      <div className={styles.background} />
      <div className={styles.div}>Подписаться</div>
    </div>
  );
};

export default Property1Default3;
