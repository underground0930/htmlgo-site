type Props = {
  children?: React.ReactNode;
};

// style
import styles from "styles/components/Title.module.scss";

const Title = ({ children }: Props) => {
  return (
    <>
      <h2 className={styles.title}>{children}</h2>
    </>
  );
};

export default Title;
