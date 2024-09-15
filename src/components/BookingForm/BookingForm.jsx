import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./BookingForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { selectData } from "../../redux/productSlice";
import { useId } from "react";
import TravelTrucksDatePicker from "../TravelTrucksDatePicker/TravelTrucksDatePicker";
import { setBooking } from "../../redux/bookingSlice";

export default function BookingForm() {
  const bookingDateId = useId();
  const dispatch = useDispatch();
  const product = useSelector(selectData);

  const handleSubmit = (data, { resetForm }) => {
    try {
      dispatch(setBooking({ ...data, product: product.id }));
      toast(`${product.name} was booked successfully for ${data.name}!`);
      resetForm();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required"),
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Book your campervan now</h3>
      <p className={styles.subheading}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
      >
        <Form className={styles.form}>
          <Field
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <ErrorMessage
            name="name"
            render={(msg) => <p className={styles.error}>{msg}</p>}
          />
          <Field
            className={styles.input}
            type="text"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage
            name="email"
            render={(msg) => <p className={styles.error}>{msg}</p>}
          />
          <label htmlFor={bookingDateId}>
            <TravelTrucksDatePicker name="bookingDate" />
            <ErrorMessage
              name="bookingDate"
              render={(msg) => <p className={styles.error}>{msg}</p>}
            />
          </label>
          <Field
            as="textarea"
            className={styles.textarea}
            name="comment"
            placeholder="Comment"
          />
          <ErrorMessage
            name="comment"
            render={(msg) => <p className={styles.error}>{msg}</p>}
          />
          <div>
            <button className={styles.button} type="submit">
              Send
            </button>
          </div>
        </Form>
      </Formik>
      <Toaster position="bottom-right" />
    </div>
  );
}
