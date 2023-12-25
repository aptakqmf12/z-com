import styles from "./layout.module.css";
import LeftNav from "./_component/leftNav";

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      <nav className={styles.left}>
        <div className={styles.leftInner}>
          <LeftNav />
        </div>
      </nav>

      <section className={styles.center}>{children}</section>

      <div className={styles.right}>
        <div className={styles.rightInner}>
          <form className={styles.rightSearch}>
            <input />
          </form>

          <div className={styles.rightContnet}>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </div>
        </div>
      </div>

      {modal}
    </div>
  );
}
