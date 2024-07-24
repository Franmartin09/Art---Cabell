import Image from "next/image";
export default function Review() {
    return (
        <div className="text-white pt-8" id="reviews">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-10 space-y-4 px-6 md:px-0">
                    <h2 className="text-center text-2xl font-bold text-black md:text-4xl">
                        ¡Las opiniones importan!
                    </h2>
                </div>
                <div className="mb-10 space-y-4 px-6 md:px-0">
                    <h2 className="text-center text-2xl font-bold text-black md:text-4xl">
                        4,6 / 5
                    </h2>
                </div>
                <div className="mb-10 space-y-4 px-6 md:px-0 flex justify-center">
                    <Image
                        src="/images/rating_stars.png"
                        alt="user avatar"
                        className=" "
                        width={150}
                        height={200}
                        priority />
                </div>
                <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
                    <div
                        className="aspect-auto p-8 border border-red-100 rounded-3xl bg-red-200 shadow-2xl shadow-gray-600/10">
                        <div className="flex gap-4">
                            <Image
                                src="/images/p1.png"
                                alt="user avatar"
                                className="w-12 h-12 rounded-full"
                                width={400}
                                height={400}
                                priority />
                            <div>
                                <h6 className="mt-3 text-lg font-medium text-gray-700 dark:text-white">Eloi Sabater Mata</h6>
                            </div>
                        </div>
                        <p className="mt-8">Una perruqueria que no és pas gens cara. Com a home valoro bastant poder anar 
                            sovint a tallar-me els cabells i no pagar 20 per menys de trenta minuts. Fa temps que conec el negoci 
                            i no tinc queixes. La Sònia és simpàtica i sempre fareu uns riures durant l&apos;estona que estigueu allà.
                        </p>
                    </div>


                    <div
                        className="aspect-auto p-8 border border-red-100 rounded-3xl bg-red-200 shadow-2xl shadow-gray-600/10">
                        <div className="flex gap-4">
                            <Image
                                src="/images/p3.png"
                                alt="user avatar"
                                className="w-12 h-12 rounded-full"
                                width={200}
                                height={200}
                                priority />
                            <div>
                                <h6 className="mt-3 text-lg font-medium text-gray-700 dark:text-white">Jose Espinal</h6>
                            </div>
                        </div>
                        <p className="mt-8">Molt bona gent la Sonia 😀 Serveis i Pentinat</p>
                    </div>


                    <div
                        className="aspect-auto p-8 border border-red-100 rounded-3xl bg-red-200 shadow-2xl shadow-gray-600/10">
                        <div className="flex gap-4">
                            <Image
                                src="/images/p4.png"
                                alt="user avatar"
                                className="w-12 h-12 rounded-full"
                                width={200}
                                height={200}
                                priority />
                            <div>
                                <h6 className="mt-3 text-lg font-medium text-gray-700 dark:text-white">Encarna S.</h6>
                            </div>
                        </div>
                        <p className="mt-8">Totalment recomanable! Un servei de qualitat i molt bé de preu.
                        No fa res que no li diguis...això de &quot;talla&apos;m les puntes&quot; ho fa real. 
                        A més em va fer un recollit per a un casament i vaig quedar encantat, un 10 a la perruquera i al servei.
                        </p>
                    </div>


                    <div
                        className="aspect-auto p-8 border border-red-100 rounded-3xl bg-red-200 shadow-2xl shadow-gray-600/10">
                        <div className="flex gap-4">
                            <Image
                                src="/images/p2.png"
                                alt="user avatar"
                                className="w-12 h-12 rounded-full"
                                width={200}
                                height={200}
                                priority />
                            <div>
                                <h6 className="mt-3 text-lg font-medium text-gray-700 dark:text-white">Joan Monge</h6>
                            </div>
                        </div>
                        <p className="mt-8">Fa uns cortes de cabell impresionants per a noi, sap escoltar el que volem.</p>
                    </div>
                    <div
                        className="aspect-auto p-8 border border-red-100 rounded-3xl bg-red-200 shadow-2xl shadow-gray-600/10">
                        <div className="flex gap-4">
                            <Image
                                src="/images/p5.png"
                                alt="user avatar"
                                className="w-12 h-12 rounded-full"
                                width={200}
                                height={200}
                                priority />
                            <div>
                                <h6 className="mt-3 text-lg font-medium text-gray-700 dark:text-white">Paki Rosa</h6>
                            </div>
                        </div>
                        <p className="mt-8">Boníssima qualitat i professionalitat i un tracte familiar.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}