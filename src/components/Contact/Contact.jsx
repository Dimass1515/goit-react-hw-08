import { FaUserAlt } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const handledDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.contData}>
        <p className={css.page}>
          <FaUserAlt className={css.iconUser} size="20" />
          {name}
        </p>
        <p className={css.page}>
          <ImPhone className={css.iconPhone} size="20" />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={handledDelete}>
        Delete
      </button>
    </div>
  );
}
