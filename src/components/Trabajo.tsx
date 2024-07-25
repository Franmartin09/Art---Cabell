import Image from "next/image";
export default function Trabajo() {
    return (
        <div>
        <section className="px-4 py-24 mx-auto max-w-7xl">
            <div className="mb-16 text-center">
                <h4 className="text-base text-red-200 font-semibold tracking-wide uppercase">Nuestro</h4>
                <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">Trabajo</p>
            </div>
        </section>
      
      <section>
          <div className="max-w-6xl mx-auto duration-1000 delay-300 select-none ease animate-fade-in-view">
            <ul x-ref="gallery" id="gallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5">
              <li>
                <Image
                    src="/images/pe1.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center"
                    width={150}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                src="/images/pe2.png"
                alt="Tahe"
                className="h-full w-full object-cover object-center"
                width={150}
                height={500}
                priority />
            </li>
            <li>
            <Image
                src="/images/pe5.png"
                alt="Tahe"
                className="h-full w-full object-cover object-center"
                width={150}
                height={500}
                priority />
            </li>
            <li>
                <Image
                        src="/images/pe3.png"
                        alt="Tahe"
                        className="h-full w-full object-cover object-center"
                        width={150}
                        height={500}
                        priority />
            </li>
            <li>
                <Image
                    src="/images/pe7.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center"
                    width={150}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                    src="/images/pe4.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center"
                    width={150}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                    src="/images/pe6.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center"
                    width={150}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                    src="/images/pe1.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center"
                    width={150}
                    height={500}
                    priority />
            </li>
            </ul>
          </div>
      
      </section>
      
      </div>
    );
}