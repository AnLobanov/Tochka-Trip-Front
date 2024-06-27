import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuitButton.module.css";

export type QuitButtonType = {
  className?: string;

  /** Style props */
  quitButtonIconWidth?: CSSProperties["width"];
  quitButtonIconHeight?: CSSProperties["height"];
  quitButtonIconPosition?: CSSProperties["position"];
  quitButtonIconTop?: CSSProperties["top"];
  quitButtonIconRight?: CSSProperties["right"];
  quitButtonIconBottom?: CSSProperties["bottom"];
  quitButtonIconLeft?: CSSProperties["left"];
  quitButtonIconMaxHeight?: CSSProperties["maxHeight"];
};

const QuitButton: FunctionComponent<QuitButtonType> = ({
  className = "",
  quitButtonIconWidth,
  quitButtonIconHeight,
  quitButtonIconPosition,
  quitButtonIconTop,
  quitButtonIconRight,
  quitButtonIconBottom,
  quitButtonIconLeft,
  quitButtonIconMaxHeight,
}) => {
  const quitButtonIconStyle: CSSProperties = useMemo(() => {
    return {
      width: quitButtonIconWidth,
      height: quitButtonIconHeight,
      position: quitButtonIconPosition,
      top: quitButtonIconTop,
      right: quitButtonIconRight,
      bottom: quitButtonIconBottom,
      left: quitButtonIconLeft,
      maxHeight: quitButtonIconMaxHeight,
    };
  }, [
    quitButtonIconWidth,
    quitButtonIconHeight,
    quitButtonIconPosition,
    quitButtonIconTop,
    quitButtonIconRight,
    quitButtonIconBottom,
    quitButtonIconLeft,
    quitButtonIconMaxHeight,
  ]);

  const navigate = useNavigate();

  const onQuitButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <img
      className={[styles.quitButtonIcon, className].join(" ")}
      alt=""
      src="/quit-button.svg"
      onClick={onQuitButtonClick}
      style={quitButtonIconStyle}
    />
  );
};

export default QuitButton;
