import Image from "next/image";

export default function Brandscroll() {
    return (
        <main className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                <div className="text-center">

                    <div
                        x-data="{}"
                        x-init="$nextTick(() => {
                         let ul = $refs.logos;
                         ul.insertAdjacentHTML('afterend', ul.outerHTML);
                         ul.nextSibling.setAttribute('aria-hidden', 'true');
                     })"
                        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                    >
                        <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
                            <li>
                                <Image
                                    src="/images/tahe_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={300}
                                    priority />
                            </li>
                            <li>
                                <Image
                                    src="/images/ghd_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={500}
                                    priority />
                            </li>
                            <li>
                                <Image
                                    src="/images/loreal_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={500}
                                    priority />
                            </li>
                            <li>
                                <Image
                                    src="/images/lendan_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={500}
                                    priority />
                            </li>
                            <li>
                                <Image
                                    src="/images/wella_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={500}
                                    priority />
                            </li>
                            <li>
                                <Image
                                    src="/images/tigi_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={500}
                                    priority />
                            </li>
                        </ul>
                        <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
                            <li>
                                <Image
                                    src="/images/tahe_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={300}
                                    priority />
                            </li>
                            <li>
                                <Image
                                    src="/images/ghd_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={500}
                                    priority />
                            </li>
                            <li>
                                <Image
                                    src="/images/loreal_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={500}
                                    priority />
                            </li>
                            <li>
                                <Image
                                    src="/images/lendan_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={500}
                                    priority />
                            </li>
                            <li>
                                <Image
                                    src="/images/wella_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={500}
                                    priority />
                            </li>
                            <li>
                                <Image
                                    src="/images/tigi_logo.png"
                                    alt="Tahe"
                                    className="h-30"
                                    width={150}
                                    height={500}
                                    priority />
                            </li>
                        </ul>
                        
                    </div>

                </div>

            </div>
        </main>
    );
}