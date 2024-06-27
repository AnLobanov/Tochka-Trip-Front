import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bar from "../components/Bar";
import FlightElement from "../components/FlightElement";
import styles from "./FlightsScreen.module.css";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

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
    }
  ];
}

const FlightsScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const [flights, setFlights] = useState<Flight[]>([]); // Изменено для упрощения структуры состояния

  const onLoadingInfo = useCallback(async () => {
    const makeRequest = async () => {
      return axios.get(`${apiUrl}/booking/get`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('access_token')
        },
      });
    };
  
    try {
      const response = await makeRequest();
      if (response.status !== 200) {
        throw new Error('Ошибка запроса');
      }
      setFlights(response.data); // Обновляем состояние напрямую
      navigate("/flights-screen");
    } catch (error) {
      console.error(error);
      try {
        const refreshResponse = await axios.get(`${apiUrl}/auth/refresh`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('refresh_token')
          },
        });
        if (refreshResponse.status === 200) {
          localStorage.setItem('access_token', refreshResponse.data.access_token);
          const retryResponse = await makeRequest();
          if (retryResponse.status === 200) {
            setFlights(retryResponse.data); // Обновляем состояние напрямую
          }
        } else {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          navigate("/");
        }
      } catch (refreshError) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate("/");
      }
    }
  }, [navigate]);
  
  useEffect(() => {
    onLoadingInfo();
  }, [onLoadingInfo]);

  const onFlightElementBackgroundClick = useCallback((flightData: Flight) => {
    console.log(flightData);
    navigate("/reservation-screen", { state: { flight: flightData } });
  }, [navigate]);

  return (
    <div className={styles.flightsScreen}>
      <Bar />
      <div className={styles.flights}>
        {flights.map((flight, index) => (
          <FlightElement
            key={flight.number} // Уникальный ключ для каждого элемента списка
            prop="000/000"
            arrive={flight.arrival}
            destination={flight.depatrure}
            number={flight.number}
            price={flight.price}
            timeTop={`${111 * index}px`}
            timeTo="02:00" // Эти значения должны быть заменены на динамические, если они доступны
            timeFrom="01:00" // Эти значения должны быть заменены на динамические, если они доступны
            company={flight.plane.company}
            onBackgroundClick={() => onFlightElementBackgroundClick(flight)}
            prop1="Забронировать"
          />
        ))}
      </div>
    </div>
  );
};

export default FlightsScreen;