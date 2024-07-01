import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const items = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = items.filter((item) =>
    item.name.toLowerCase().includes(nameFilter)
  );

  return (
    <ul className={css.menuList}>
      {filteredContacts.map((item) => (
        <li className={css.item} key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
}
