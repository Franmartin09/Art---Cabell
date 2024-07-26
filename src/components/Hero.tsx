import Image from "next/image";
import Link from "next/link";
export default function Hero() {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/background2.png"
                    alt="Tahe"
                    className="object-cover object-center w-full h-full"
                    width={1920}
                    height={1080}
                    priority />
                <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
            </div>

            <div className="relative flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-tight mb-4">Art & Cabell</h1>
                <p className="text-lg text-gray-300 mb-8">ELIGE EL ESTILO QUE MUESTRE TU MEJOR VERSIÓN</p>
            </div>
        </div>
    );
}
