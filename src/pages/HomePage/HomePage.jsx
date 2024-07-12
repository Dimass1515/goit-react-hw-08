import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.title}>
      <PageTitle>Contact manager welcome page</PageTitle>
    </div>
  );
}
