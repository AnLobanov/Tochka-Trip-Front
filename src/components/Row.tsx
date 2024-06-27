import React, { useState, CSSProperties } from 'react';
import styles from './Row.module.css';

interface Seat {
  id: string;
  status: 'free' | 'occupied' | 'selected';
}

interface RowProps {
  seats: Seat[];
  background: string;
  background1: string;
  background2: string;
}

const Row: React.FC<RowProps> = ({ seats, background, background1, background2 }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seatId: string) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((id) => id !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  const getBackgroundImage = (seat: Seat) => {
    if (selectedSeats.includes(seat.id)) return background1;
    if (seat.status === 'occupied') return background2;
    return background;
  };

  return (
    <div className={styles.row}>
      {seats.map((seat, index) => (
        <div
          key={seat.id}
          className={styles.seat}
          style={{
            backgroundImage: `url(${getBackgroundImage(seat)})`,
            left: `${index * 50}px`, // Adjust the spacing between seats as needed
            position: 'absolute',
            top: '0',
            cursor: seat.status === 'occupied' ? 'not-allowed' : 'pointer',
          }}
          onClick={() => seat.status !== 'occupied' && handleSeatClick(seat.id)}
        />
      ))}
    </div>
  );
};

export default Row;