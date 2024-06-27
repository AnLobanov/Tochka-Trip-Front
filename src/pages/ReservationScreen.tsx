import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReserveButtonReserve from "../components/ReserveButtonReserve";
import Property1Default3 from "../components/Property1Default3";
import Row from "../components/Row";
import Bar from "../components/Bar";
import styles from "./ReservationScreen.module.css";

interface Flight {
  arrival: string;
  depatrure: string;
  number: string;
  price: string;
  arrivalTime: string;
  depatrureTime: string;
  plane: {
    company: string;
    id: string;
    vendor: string;
    number: string;
    model: string;
  };
  places: [
    {
      id: string;
      row: string;
      place: string;
      status: 'free' | 'occupied' | 'selected';
    }
  ];
}

interface Rows {
  [key: string]: {
    id: string;
    row: string;
    place: string;
    status: 'free' | 'occupied' | 'selected';
  }[];
}

const ReservationScreen: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const flight = location.state?.flight as Flight; // Получаем данные о рейсе из состояния маршрутизации

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const onReserveButtonReserveContainerClick = useCallback(() => {
    navigate("/reservations-screen");
  }, [navigate]);

  useEffect(() => {
    if (!flight) {
      navigate("/"); // Если данные о рейсе отсутствуют, перенаправляем на главную страницу
    }
  }, [flight, navigate]);

  // Группировка мест по рядам
  const rows = flight?.places.reduce<Rows>((acc, place) => {
    if (!acc[place.row]) {
      acc[place.row] = [];
    }
    acc[place.row].push(place);
    return acc;
  }, {});

  const handleSeatSelection = (seatId: string) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((id) => id !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  return (
    <div className={styles.reservationScreen}>
      <div className={styles.reservation}>
        <div className={styles.background} />
        <div className={styles.info}>
          <div className={styles.time}>
            <div className={styles.div}>{flight?.depatrureTime}</div>
            <div className={styles.div1}>{flight?.arrivalTime}</div>
            <img className={styles.timeChild} alt="" src="/arrow-1.svg" />
          </div>
          <div className={styles.destination}>
            <div className={styles.svx}>{flight?.depatrure}</div>
            <div className={styles.svo}>{flight?.arrival}</div>
            <img
              className={styles.destinationChild}
              alt=""
              src="/arrow-1.svg"
            />
          </div>
          <div className={styles.div2}>{flight?.price} ₽</div>
          <div className={styles.div3}>{flight?.plane.number}</div>
          <div className={styles.uralAirlines}>{flight?.plane.company}</div>
          <div className={styles.div4}>{flight?.number}</div>
        </div>
        <div className={styles.div5}>Выбор мест</div>
        <div className={styles.places}>
          {Object.entries(rows).map(([rowNumber, seats]) => (
            <Row
              key={rowNumber}
              seats={seats.map(seat => ({
                ...seat,
                status: selectedSeats.includes(seat.id) ? 'selected' : seat.status,
              }))}
              background="/background.svg"
              background1="/background1.svg"
              background2="/background2.svg"
            />
          ))}
        </div>
        <ReserveButtonReserve
          reserveButtonReservePosition="absolute"
          reserveButtonReserveRight="37px"
          reserveButtonReserveBottom="30px"
          onReserveButtonReserveContainerClick={
            onReserveButtonReserveContainerClick
          }
        />
        <Property1Default3
          property1DefaultPosition="absolute"
          property1DefaultRight="391px"
          property1DefaultBottom="30px"
        />
      </div>
      <Bar />
    </div>
  );
};

export default ReservationScreen;