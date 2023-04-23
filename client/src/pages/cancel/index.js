import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.text__indispo}>
      <p>Votre commande n'a pas été validé 🙁</p>
    </div>
  );
}
