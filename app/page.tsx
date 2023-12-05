import Footer from "@/components/footer/page";
import styles from "./page.module.css";
import Header from "@/components/header/page";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Hello world</h1>
      </main>
      <Footer />
    </>
  );
}
