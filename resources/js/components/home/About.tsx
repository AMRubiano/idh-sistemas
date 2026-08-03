export default function About() {
    return (
        <section
            id="nosotros"
            className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                            Sobre IDH
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Soluciones, innovación y gestión del riesgo
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            IDH Sistemas de Gestión acompaña a empresas,
                            organizaciones y profesionales en la mejora de sus
                            procesos, el fortalecimiento de sus sistemas de
                            gestión y la prevención de riesgos.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600">
                            Nuestro trabajo se desarrolla mediante servicios de
                            consultoría, formación, auditoría y acompañamiento
                            técnico, adaptados a las necesidades y
                            características de cada organización.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600">
                            Buscamos ofrecer soluciones prácticas que permitan
                            mejorar el desempeño, facilitar la toma de
                            decisiones y promover una cultura de mejora
                            continua.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
                        <div className="grid gap-8 sm:grid-cols-2">
                            <div>
                                <p className="text-3xl font-bold text-red-700">
                                    IDH
                                </p>

                                <p className="mt-2 font-semibold text-slate-900">
                                    Sistemas de Gestión
                                </p>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Acompañamiento especializado para fortalecer
                                    organizaciones y profesionales.
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
                                    Nuestro enfoque
                                </p>

                                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-700" />
                                        Soluciones adaptadas a cada organización.
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-700" />
                                        Prevención y gestión de riesgos.
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-700" />
                                        Innovación y mejora continua.
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-700" />
                                        Formación y acompañamiento profesional.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}