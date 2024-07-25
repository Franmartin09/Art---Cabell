import Image from "next/image";
export default function Trabajo2() {
    return (
            <div className="relative overflow-hidden bg-white">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h2 className="font text-xl font-bold tracking-tight text-gray-900 sm:text-xl">Servicio integral</h2>
                            <h1 className="font text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Peluquería y maquillaje para eventos especiales</h1>
                            {/* <p className="mt-4 text-xl text-gray-500">This year, our new svelte signals will shelter you from the harsh
                                elements of a world that doesn&amp;t care if you develop or die.</p> */}
                            <div>
                                <ul className="font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:mt-0 md:border-0">
                                    <li>
                                        <p className="block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:p-0" aria-current="page">Corte</p>
                                    </li>
                                    <li>
                                        <p className="block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:p-0" aria-current="page">Corte</p>
                                    </li>
                                    <li>
                                        <p className="block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:p-0" aria-current="page">Corte</p>
                                    </li>
                                    <li>
                                        <p className="block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:p-0" aria-current="page">Corte</p>
                                    </li>
                                    <li>
                                        <p className="block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:p-0" aria-current="page">Corte</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="mt-10">
                                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <Image
                                                        src="/images/pe1.png"
                                                        alt="Tahe"
                                                        className="h-full w-full object-cover object-center"
                                                        width={150}
                                                        height={500}
                                                        priority />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image
                                                        src="/images/pe2.png"
                                                        alt="Tahe"
                                                        className="h-full w-full object-cover object-center"
                                                        width={150}
                                                        height={500}
                                                        priority />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                        src="/images/pe5.png"
                                                        alt="Tahe"
                                                        className="h-full w-full object-cover object-center"
                                                        width={150}
                                                        height={500}
                                                        priority />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image
                                                        src="/images/pe3.png"
                                                        alt="Tahe"
                                                        className="h-full w-full object-cover object-center"
                                                        width={150}
                                                        height={500}
                                                        priority />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image
                                                        src="/images/pe7.png"
                                                        alt="Tahe"
                                                        className="h-full w-full object-cover object-center"
                                                        width={150}
                                                        height={500}
                                                        priority />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image
                                                        src="/images/pe4.png"
                                                        alt="Tahe"
                                                        className="h-full w-full object-cover object-center"
                                                        width={150}
                                                        height={500}
                                                        priority />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image
                                                        src="/images/pe6.png"
                                                        alt="Tahe"
                                                        className="h-full w-full object-cover object-center"
                                                        width={150}
                                                        height={500}
                                                        priority />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}