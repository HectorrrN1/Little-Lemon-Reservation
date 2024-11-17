import { useFormik } from 'formik';
import * as Yup from 'yup';
import './components/BookingForm.css';

function BookingForm() {
  const formik = useFormik({
    initialValues: { name: '', date: '', guests: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es obligatorio'),
      date: Yup.date().required('La fecha es obligatoria'),
      guests: Yup.number().min(1, 'Debe haber al menos un invitado').required('El número de invitados es obligatorio'),
    }),
    onSubmit: values => alert('Reserva realizada: ' + JSON.stringify(values, null, 2)),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input name="name" onChange={formik.handleChange} placeholder="Nombre" />
      {formik.errors.name && <div>{formik.errors.name}</div>}

      <input name="date" type="date" onChange={formik.handleChange} />
      {formik.errors.date && <div>{formik.errors.date}</div>}

      <input name="guests" type="number" onChange={formik.handleChange} placeholder="Número de invitados" />
      {formik.errors.guests && <div>{formik.errors.guests}</div>}

      <button type="submit">Reservar</button>
    </form>
  );
}

export default BookingForm;
