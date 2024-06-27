import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ReserveButtonReserve.module.css";

export type ReserveButtonReserveType = {
  className?: string;

  /** Style props */
  reserveButtonReservePosition?: CSSProperties["position"];
  reserveButtonReserveRight?: CSSProperties["right"];
  reserveButtonReserveBottom?: CSSProperties["bottom"];

  /** Action props */
  onReserveButtonReserveContainerClick?: () => void;
};

const ReserveButtonReserve: FunctionComponent<ReserveButtonReserveType> = ({
  className = "",
  reserveButtonReservePosition,
  reserveButtonReserveRight,
  reserveButtonReserveBottom,
  onReserveButtonReserveContainerClick,
}) => {
  const reserveButtonReserveStyle: CSSProperties = useMemo(() => {
    return {
      position: reserveButtonReservePosition,
      right: reserveButtonReserveRight,
      bottom: reserveButtonReserveBottom,
    };
  }, [
    reserveButtonReservePosition,
    reserveButtonReserveRight,
    reserveButtonReserveBottom,
  ]);

  return (
    <div
      className={[styles.reserveButtonreserve, className].join(" ")}
      style={reserveButtonReserveStyle}
      onClick={onReserveButtonReserveContainerClick}
    >
      <div className={styles.reserveButtonreserveChild} />
      <div className={styles.div}>Забронировать</div>
    </div>
  );
};

export default ReserveButtonReserve;
