import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/slice";
import css from "./SearchBar.module.css";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const getFilter = (event) => {
    const name = event.target.value;
    dispatch(setFilter(name));
  };

  return (
    <div className={css.conte}>
      <label className={css.name}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={filter.name}
        onChange={getFilter}
      />
    </div>
  );
}
