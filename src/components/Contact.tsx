import Link from "next/link";
export default function Contact() {
    return (
        <section id="contact" className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Visítanos</h2>
                <p className="mt-4 text-lg text-gray-500">Descubre nuestro espacio y disfruta de una experiencia única con nosotros. ¡Te esperamos!</p>
            </div>
            <div className="mt-16 lg:mt-20"> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                            <div className="px-6 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Dirección</h3> 
                                <p className="mt-1 text-gray-600">Carrer de Sant Miquel, 26, 08570 Torelló, Barcelona</p>
                            </div>
                            <div className="border-t border-gray-200 px-6 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Horario</h3>
                                <p className="mt-1 text-gray-600">Lunes: Cerrado</p>
                                <p className="mt-1 text-gray-600">Martes: 9am - 2pm</p>
                                <p className="mt-1 text-gray-600">Miercoles: 9am - 2pm</p>
                                <p className="mt-1 text-gray-600">Jueves: 9am - 7pm </p>
                                <p className="mt-1 text-gray-600">Viernes: 9am - 7pm</p>
                                <p className="mt-1 text-gray-600">Sabado: 9am - 2pm</p>
                                <p className="mt-1 text-gray-600">Domingo: Cerrado</p>
                            </div> 
                            <div className="border-t border-gray-200 px-6 py-4 space-y-2">
                                <h3 className="text-lg font-medium text-gray-900">Reservar</h3>
                                <div className="flex items-center space-x-2">
                                    <Link target="_blank" href="https://www.instagram.com/artcabell_perruqueria/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                        <svg className="w-6 h-6 text-red-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                                        </svg>
                                        <p className="mt-1 text-gray-600"> @artcabell_perruqueria</p>
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Link target="_blank" href="tel:+34699940136" className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="w-6 h-6 text-red-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                                    </svg>
                                    <p className="mt-1 text-gray-600"> +34 699 94 01 36</p>
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Link target="_blank" href="https://wa.me/+34699940136" className="flex items-center space-x-3 rtl:space-x-reverse">
                                        <svg className="w-6 h-6 text-red-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
                                            <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                                        </svg>
                                        <p className="mt-1 text-gray-600"> +34 699 94 01 36</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <iframe width="575" height="525" id="gmap_canvas" 
                        src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=Carrer%20de%20Sant%20Miquel,%2026,%2008570%20Torell%C3%B3,%20Barcelona%20Torell%C3%B3+(Art&amp;Cabell%20Perruqueria)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">    
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
