import React, { useState } from 'react';
import '../styles/components/BookingForm.css'; // Correcta

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva confirmada: ${JSON.stringify(formData)}`);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="guests"
        placeholder="Número de personas"
        value={formData.guests}
        onChange={handleChange}
        required
      />
      <button type="submit">Reservar</button>
    </form>
  );
};

export default BookingForm;
