import css from "./Loading.module.css";
import { DNA } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className={css.box}>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}
