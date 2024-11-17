import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from '../components/BookingForm';

test('Renderiza el formulario correctamente', () => {
  render(<BookingForm />);
  const button = screen.getByRole('button', { name: /reservar/i });
  expect(button).toBeInTheDocument();
});

test('Valida campos obligatorios', async () => {
  render(<BookingForm />);
  const button = screen.getByRole('button', { name: /reservar/i });
  userEvent.click(button);
  expect(await screen.findByText(/El nombre es obligatorio/i)).toBeInTheDocument();
});
