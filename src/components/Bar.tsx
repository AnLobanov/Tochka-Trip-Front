import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Active from "./Property1Active";
import Property1Default2 from "./Property1Default2";
import QuitButton from "./QuitButton";
import styles from "./Bar.module.css";

export type BarType = {
  className?: string;
};

const Bar: FunctionComponent<BarType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMyReservationsButtonClick = useCallback(() => {
    navigate("/reservations-screen");
  }, [navigate]);

  return (
    <div className={[styles.bar, className].join(" ")}>
      <div className={styles.trip}>Trip</div>
      <div className={styles.buttons}>
        <Property1Active
          property1ActivePosition="absolute"
          property1ActiveTop="0px"
          property1ActiveLeft="0px"
          backgroundBackgroundColor="#d9d9d9"
          divColor="#000"
        />
        <Property1Default2
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="308px"
          backgroundBackgroundColor="#000"
          divColor="#fff"
          __PH1__={onMyReservationsButtonClick}
        />
      </div>
      <QuitButton
        quitButtonIconWidth="4.28%"
        quitButtonIconHeight="56.83%"
        quitButtonIconPosition="absolute"
        quitButtonIconTop="35.25%"
        quitButtonIconRight="0%"
        quitButtonIconBottom="7.91%"
        quitButtonIconLeft="95.72%"
        quitButtonIconMaxHeight="100%"
      />
    </div>
  );
};

export default Bar;
