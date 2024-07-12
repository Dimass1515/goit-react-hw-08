import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handlSubmit = (values, actions) => {
    dispatch(logIn(values))
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
          email: "",
          password: "",
        }}
        onSubmit={handlSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" />
          </label>
          <button className={css.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
