import Header from "@/components/Home/Header";
import Main from "@/components/Home/Main";
import Footer from "@/components/Home/Footer";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
