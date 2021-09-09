// styles
import styles from "styles/components/Loader.module.scss";

type Props = {};

const Loader = ({}: Props) => {
  return (
    <>
      <div className={styles.loader}></div>
    </>
  );
};

export default Loader;
