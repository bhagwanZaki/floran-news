import Footer from "@/components/Footer";
import Image from "next/image";
import styles from "../css/page.module.css";
import News_section from "./News_section";
import Recent_news_Section from "./Recent_news_Section";

export default function Home() {
  return (
    <main className={styles.main}>
      <Recent_news_Section styles={styles} />
      <News_section />
      <Footer />
    </main>
  );
}
