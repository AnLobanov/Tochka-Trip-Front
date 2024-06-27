import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReservationElement1 from "../components/ReservationElement1";
import ReservationElement from "../components/ReservationElement";
import FlightElement from "../components/FlightElement";
import Property1Active from "../components/Property1Active";
import Property1Default2 from "../components/Property1Default2";
import QuitButton from "../components/QuitButton";
import styles from "./ReservationsScreen.module.css";

const ReservationsScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFlightsButtonContainerClick = useCallback(() => {
    navigate("/flights-screen");
  }, [navigate]);

  return (
    <div className={styles.reservationsScreen}>
      <div className={styles.flights}>
        <ReservationElement1 prop="Ожидает подтверждения" />
        <ReservationElement prop="Оплатить" prop1="Ожидает оплаты" />
        <ReservationElement
          prop="Отменить"
          prop1="Оплачено"
          backgroundTop="111px"
          propBackgroundColor="#7ad76b"
        />
        <ReservationElement
          prop="Отменить"
          prop1="Оплачено"
          backgroundTop="333px"
          propBackgroundColor="#7ad76b"
        />
        <ReservationElement
          prop="Отменить"
          prop1="Оплачено"
          backgroundTop="444px"
          propBackgroundColor="#7ad76b"
        />
        <FlightElement
          prop="000 мест"
          prop1="Выполнено"
          timeTop="555px"
          timeLeft="calc(50% - 925px)"
          divTop="25.3%"
          divBottom="24.1%"
          arrowIconTop="14.29%"
          arrowIconBottom="19.05%"
          propWidth="34.47%"
          propLeft="65.53%"
          propBackgroundColor="#7ad76b"
          propWidth1="34.45%"
          propLeft1="32.8%"
        />
        <ReservationElement1
          prop="Отменено"
          flightTop="666px"
          propBackgroundColor="#ffadad"
          propWidth="34.45%"
          propLeft="32.8%"
        />
        <FlightElement
          prop="000 мест"
          prop1="Выполнено"
          timeTop="777px"
          timeLeft="calc(50% - 925px)"
          divTop="25.3%"
          divBottom="24.1%"
          arrowIconTop="14.29%"
          arrowIconBottom="19.05%"
          propWidth="34.47%"
          propLeft="65.53%"
          propBackgroundColor="#7ad76b"
          propWidth1="34.45%"
          propLeft1="32.8%"
        />
      </div>
      <div className={styles.bar}>
        <div className={styles.trip}>Trip</div>
        <div className={styles.buttons}>
          <Property1Active
            property1ActivePosition="absolute"
            property1ActiveTop="0px"
            property1ActiveLeft="0px"
            backgroundBackgroundColor="#000"
            divColor="#fff"
            onFlightsButtonContainerClick={onFlightsButtonContainerClick}
          />
          <Property1Default2
            property1DefaultPosition="absolute"
            property1DefaultTop="0px"
            property1DefaultLeft="308px"
            backgroundBackgroundColor="#d9d9d9"
            divColor="#000"
          />
        </div>
        <QuitButton
          quitButtonIconWidth="79px"
          quitButtonIconHeight="79px"
          quitButtonIconPosition="absolute"
          quitButtonIconTop="49px"
          quitButtonIconRight="unset"
          quitButtonIconBottom="unset"
          quitButtonIconLeft="1768px"
          quitButtonIconMaxHeight="unset"
        />
      </div>
    </div>
  );
};

export default ReservationsScreen;
