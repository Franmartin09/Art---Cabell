export default function Visit() { 
    return (
        <section className="bg-white">
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
                                    <p className="mt-1 text-gray-600">Martes - Sabado: 9am - 2pm</p>
                                    <p className="mt-1 text-gray-600">Jueves y Viernes: 2pm - 7pm</p>
                                    <p className="mt-1 text-gray-600">Domingo y Lunes: Cerrado</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Contacto</h3>
                                    <p className="mt-1 text-gray-600">Instagram: @artcabell_perruqueria</p>
                                    <p className="mt-1 text-gray-600">Telefono: +34 699 94 01 36</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <iframe width="523" height="403" id="gmap_canvas" 
                            src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=Carrer%20de%20Sant%20Miquel,%2026,%2008570%20Torell%C3%B3,%20Barcelona%20Torell%C3%B3+(Art&amp;Cabell%20Perruqueria)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">    
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
