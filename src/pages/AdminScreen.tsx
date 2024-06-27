import { FunctionComponent } from "react";
import QuitButton from "../components/QuitButton";
import Property1Off from "../components/Property1Off";
import Property1Waiting1 from "../components/Property1Waiting1";
import Property1NoPaid1 from "../components/Property1NoPaid1";
import Property1Done1 from "../components/Property1Done1";
import styles from "./AdminScreen.module.css";

const AdminScreen: FunctionComponent = () => {
  return (
    <div className={styles.adminScreen}>
      <div className={styles.bar}>
        <div className={styles.trip}>Trip</div>
        <QuitButton
          quitButtonIconWidth="79px"
          quitButtonIconHeight="79px"
          quitButtonIconPosition="absolute"
          quitButtonIconTop="49px"
          quitButtonIconRight="0px"
          quitButtonIconBottom="unset"
          quitButtonIconLeft="unset"
          quitButtonIconMaxHeight="unset"
        />
        <Property1Off
          property1OffPosition="absolute"
          property1OffTop="53px"
          property1OffLeft="297px"
        />
      </div>
      <div className={styles.reservations}>
        <Property1Waiting1
          property1WaitingPosition="absolute"
          property1WaitingTop="0px"
          property1WaitingLeft="calc(50% - 925px)"
        />
        <Property1NoPaid1
          prop="0000000000"
          antonioBanderras="Antonio Banderras"
          prop1="Ожидает оплаты"
          prop2="Отменить"
          property1NoPaidPosition="absolute"
          property1NoPaidTop="188px"
          property1NoPaidLeft="calc(50% - 925px)"
          reservationHeight="70.78%"
          reservationBottom="15.58%"
          infoHeight="88.99%"
          infoTop="5.5%"
          infoBottom="5.5%"
          divWidth="42.45%"
          divLeft="0%"
          antonioBanderrasWidth="51.89%"
          antonioBanderrasLeft="48.11%"
          statusHeight="38.53%"
          statusBottom="61.47%"
          backgroundBackgroundColor="#d4d76b"
          cancelButtonHeight="38.53%"
          cancelButtonTop="61.47%"
          divWidth1="41.79%"
          divLeft1="28.93%"
          divTop="28.57%"
        />
        <Property1NoPaid1
          prop="Antonio Banderras"
          antonioBanderras="0000000000"
          prop1="Оплачено"
          prop2="Отменить"
          property1NoPaidPosition="absolute"
          property1NoPaidTop="376px"
          property1NoPaidLeft="calc(50% - 925px)"
          reservationHeight="70.78%"
          reservationBottom="15.58%"
          infoHeight="88.99%"
          infoTop="5.5%"
          infoBottom="5.5%"
          divWidth="51.89%"
          divLeft="48.11%"
          antonioBanderrasWidth="42.45%"
          antonioBanderrasLeft="0%"
          statusHeight="38.53%"
          statusBottom="61.47%"
          backgroundBackgroundColor="#7ad76b"
          cancelButtonHeight="38.53%"
          cancelButtonTop="61.47%"
          divWidth1="41.76%"
          divLeft1="28.96%"
          divTop="28.57%"
        />
        <Property1Done1
          property1DonePosition="absolute"
          property1DoneTop="564px"
          property1DoneLeft="calc(50% - 925px)"
        />
        <Property1NoPaid1
          prop="0000000000"
          antonioBanderras="Antonio Banderras"
          prop1="Отменено"
          prop2="Подтвердить"
          property1NoPaidPosition="absolute"
          property1NoPaidTop="752px"
          property1NoPaidLeft="calc(50% - 925px)"
          reservationHeight="71.43%"
          reservationBottom="14.94%"
          infoHeight="88.18%"
          infoTop="5.45%"
          infoBottom="6.36%"
          divWidth="42.45%"
          divLeft="0%"
          antonioBanderrasWidth="51.89%"
          antonioBanderrasLeft="48.11%"
          statusHeight="38.18%"
          statusBottom="61.82%"
          backgroundBackgroundColor="#ffadad"
          cancelButtonHeight="38.18%"
          cancelButtonTop="61.82%"
          divWidth1="71.04%"
          divLeft1="14.24%"
          divTop="26.19%"
        />
      </div>
    </div>
  );
};

export default AdminScreen;
