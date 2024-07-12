import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggenIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Toaster position="top-center" reverseOrder={false} />
      <Navigation />
      {isLoggenIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
