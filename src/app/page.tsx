import Image from "next/image";
import Navbar from "../components/Navbar";
import Brandscroll from "../components/Brandscroll";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${styles.background}`}>
        <div className={styles.overlay}></div>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenidos a</h1>
          <h2 className="text-4xl font-semibold mb-6">OD Beauty Salon</h2>
          <p className="text-xl mb-4">
            Descubre el equilibrio perfecto, descubre un gran equipo de expertos a tu disposición en todos nuestros centros y siempre con la máxima garantía y seguridad.
          </p>
          <p className="text-xl">
            Los salones de belleza OD te esperan.
          </p>
        </div>
      </main>
      <Brandscroll />
    </>
  );
}
