import styles from "./layout.module.css";
import LeftNav from "./_component/leftNav";
import RightSection from "./_component/rightSection";

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

      <RightSection />

      {modal}
    </div>
  );
}
