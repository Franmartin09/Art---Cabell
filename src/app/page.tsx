import Navbar from "../components/Navbar";
import Brandscroll from "../components/Brandscroll";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Trabajo from "../components/Trabajo";
import Xec from "../components/Xec";
import Service from "../components/Service";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
// import styles from '../styles/Home.module.css'; 

export default function Home() {
  return (
    <>   
      <Navbar />
      <Hero />
      <Service />
      <Review />
      <Trabajo />
      <Brandscroll />
      <Xec />
      <Contact />
      <Footer />
    </>
  );
}
