const reasons = [
    {
        number: '01',
        title: 'Atención personalizada',
        description:
            'Analizamos las necesidades reales de cada organización para ofrecer soluciones adaptadas a su actividad, estructura y objetivos.',
    },
    {
        number: '02',
        title: 'Experiencia profesional',
        description:
            'Aportamos conocimientos técnicos y metodologías prácticas para mejorar los procesos y fortalecer los sistemas de gestión.',
    },
    {
        number: '03',
        title: 'Gestión preventiva',
        description:
            'Trabajamos desde la identificación temprana de riesgos para prevenir incidencias y facilitar una mejor toma de decisiones.',
    },
    {
        number: '04',
        title: 'Mejora continua',
        description:
            'Diseñamos acciones orientadas a aumentar la eficiencia, la calidad y el desempeño sostenible de las organizaciones.',
    },
    {
        number: '05',
        title: 'Formación especializada',
        description:
            'Ofrecemos formación práctica para que los equipos puedan aplicar los conocimientos adquiridos en su trabajo diario.',
    },
    {
        number: '06',
        title: 'Acompañamiento cercano',
        description:
            'Mantenemos una comunicación directa durante todo el proceso, desde el diagnóstico inicial hasta la implantación y seguimiento.',
    },
];

export default function WhyChooseUs() {
    return (
        <section
            id="ventajas"
            className="scroll-mt-24 bg-slate-950 py-20 text-white sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                            Por qué elegirnos
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Un servicio profesional, cercano y adaptado a cada
                            organización
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            En IDH Sistemas de Gestión combinamos conocimiento
                            técnico, experiencia y acompañamiento personalizado
                            para ofrecer soluciones útiles y aplicables.
                        </p>

                        <a
                            href="#contacto"
                            className="mt-8 inline-flex rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                        >
                            Solicitar información
                        </a>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {reasons.map((reason) => (
                            <article
                                key={reason.number}
                                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-red-700 hover:bg-slate-800"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-lg font-bold text-white">
                                        {reason.title}
                                    </h3>

                                    <span className="text-sm font-bold text-red-500">
                                        {reason.number}
                                    </span>
                                </div>

                                <p className="mt-4 leading-7 text-slate-300">
                                    {reason.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}