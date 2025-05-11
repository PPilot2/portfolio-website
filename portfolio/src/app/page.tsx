import styles from "./page.module.css";
import Header from "./components/header";
import Nav from "./components/nav";
import TerminalBox from "./components/terminalBox";
import Projects from "./components/Projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Header />
      <TerminalBox />
      <Projects />
      <Footer />
    </div>
  );
}
