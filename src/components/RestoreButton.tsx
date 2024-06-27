import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./RestoreButton.module.css";

export type RestoreButtonType = {
  className?: string;

  /** Style props */
  restoreButtonWidth?: CSSProperties["width"];
  restoreButtonPosition?: CSSProperties["position"];
  restoreButtonTop?: CSSProperties["top"];
  restoreButtonLeft?: CSSProperties["left"];

  /** Action props */
  onRestoreButtonContainerClick?: () => void;
};

const RestoreButton: FunctionComponent<RestoreButtonType> = ({
  className = "",
  restoreButtonWidth,
  restoreButtonPosition,
  restoreButtonTop,
  restoreButtonLeft,
  onRestoreButtonContainerClick,
}) => {
  const restoreButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: restoreButtonWidth,
      position: restoreButtonPosition,
      top: restoreButtonTop,
      left: restoreButtonLeft,
    };
  }, [
    restoreButtonWidth,
    restoreButtonPosition,
    restoreButtonTop,
    restoreButtonLeft,
  ]);

  return (
    <div
      className={[styles.restoreButton, className].join(" ")}
      style={restoreButtonStyle}
      onClick={onRestoreButtonContainerClick}
    >
      <div className={styles.field} />
      <div className={styles.div}>Восстановить пароль</div>
    </div>
  );
};

export default RestoreButton;
