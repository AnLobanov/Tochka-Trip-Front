import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Free1.module.css";

export type Property1Free1Type = {
  className?: string;
  background?: string;

  /** Style props */
  property1FreePosition?: CSSProperties["position"];
  property1FreeTop?: CSSProperties["top"];
  property1FreeLeft?: CSSProperties["left"];
  divColor?: CSSProperties["color"];
};

const Property1Free1: FunctionComponent<Property1Free1Type> = ({
  className = "",
  background,
  property1FreePosition,
  property1FreeTop,
  property1FreeLeft,
  divColor,
}) => {
  const property1FreeStyle: CSSProperties = useMemo(() => {
    return {
      position: property1FreePosition,
      top: property1FreeTop,
      left: property1FreeLeft,
    };
  }, [property1FreePosition, property1FreeTop, property1FreeLeft]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  return (
    <div
      className={[styles.property1free, className].join(" ")}
      style={property1FreeStyle}
    >
      <img className={styles.backgroundIcon} alt="" src={background} />
      <div className={styles.div} style={div2Style}>
        000
      </div>
    </div>
  );
};

export default Property1Free1;
