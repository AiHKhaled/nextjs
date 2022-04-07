import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h2 className={styles.title}>Homepage</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam
        totam expedita eligendi iure. Quia qui vitae, maiores culpa accusamus
        voluptates dicta fuga blanditiis molestias.
      </p>
      <Link href={"/lists"}>
        <a className={styles.btn}>lists</a>
      </Link>
    </div>
  );
}
