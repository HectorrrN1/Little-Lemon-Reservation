import React from 'react';
import BookingForm from '../components/BookingForm';
import '../styles/pages/BookingPage.css'; // Correcta

const BookingPage = () => {
  return (
    <main className="booking-page">
      <h1>Haz tu reserva</h1>
      <BookingForm />
    </main>
  );
};

export default BookingPage;

