import Image from "next/image";
import Navbar from "../components/Navbar";
import Brandscroll from "../components/Brandscroll";
import Visit from "../components/Visit"; 
import Footer from "../components/Footer";
import Review from "../components/Review";
import Trabajo from "../components/Trabajo";
import Xec from "../components/Xec";
import Service from "../components/Service";
import Contact from "../components/Contact";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>   
      <Navbar />
      {/* <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${styles.background}`}> */}
        {/* <div className={styles.overlay}></div>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenidos a</h1>
          <h2 className="text-4xl font-semibold mb-6">Art & Cabell</h2>
          <p className="text-xl mb-4">
            Descubre el equilibrio perfecto, descubre un gran equipo de expertos a tu disposición en todos nuestros centros y siempre con la máxima garantía y seguridad.
          </p>
          <p className="text-xl">
            Los salones de belleza OD te esperan.
          </p>
        </div> */}
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
                src="/images/background2.png"
                alt="Tahe"
                className="object-cover object-center w-full h-full"
                width={150}
                height={500}
                priority />
            {/* <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" class="object-cover object-center w-full h-full" /> */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
            <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
            <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
          </div>
        </div>
      {/* </main> */}
      <Service />
      <Review />
      <Trabajo />
      <Brandscroll />
      <Xec />
      <Contact />
      <Visit />
      <Footer />
    </>
  );
}
