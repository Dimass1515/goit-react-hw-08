import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handlSubmit = (value, actions) => {
    dispatch(register(value))
      .unwrap()
      .then(() => {})
      .catch((err) => {
        console.log(err);
        toast.error("This didn't work.");
      });
    actions.resetForm();
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handlSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Username
            <Field className={css.input} type="text" name="name" />
          </label>
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" />
          </label>
          <button className={css.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
