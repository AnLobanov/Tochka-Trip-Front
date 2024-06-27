import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Default2.module.css";

export type Property1Default2Type = {
  className?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
  backgroundBackgroundColor?: CSSProperties["backgroundColor"];
  divColor?: CSSProperties["color"];

  /** Action props */
  __PH1__?: () => void;
};

const Property1Default2: FunctionComponent<Property1Default2Type> = ({
  className = "",
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  backgroundBackgroundColor,
  divColor,
  __PH1__,
}) => {
  const property1Default1Style: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  const background1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: backgroundBackgroundColor,
    };
  }, [backgroundBackgroundColor]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={property1Default1Style}
      onClick={__PH1__}
    >
      <div className={styles.background} style={background1Style} />
      <div className={styles.div} style={div1Style}>
        Мои брони
      </div>
    </div>
  );
};

export default Property1Default2;
