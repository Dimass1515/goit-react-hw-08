import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/slice";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.cont}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.link}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
