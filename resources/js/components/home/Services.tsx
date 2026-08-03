const services = [
    {
        title: 'Sistemas de gestión',
        description:
            'Diseño, implementación y mejora de sistemas de gestión adaptados a las necesidades de cada organización.',
    },
    {
        title: 'Gestión del riesgo',
        description:
            'Identificación, análisis y tratamiento de riesgos para fortalecer la toma de decisiones y la continuidad de los procesos.',
    },
    {
        title: 'Consultoría',
        description:
            'Acompañamiento profesional para optimizar procesos, definir estrategias y mejorar el desempeño organizacional.',
    },
    {
        title: 'Formación',
        description:
            'Programas formativos dirigidos a empresas, profesionales y equipos de trabajo en materia de gestión y prevención.',
    },
    {
        title: 'Auditoría y evaluación',
        description:
            'Revisión de procesos y sistemas para detectar oportunidades de mejora y comprobar el cumplimiento de los requisitos establecidos.',
    },
    {
        title: 'Mejora continua',
        description:
            'Desarrollo de herramientas y planes de acción orientados a conseguir organizaciones más eficientes, seguras y sostenibles.',
    },
];

export default function Services() {
    return (
        <section
            id="servicios"
            className="scroll-mt-24 bg-white py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                        Nuestros servicios
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Soluciones para mejorar la gestión de su organización
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        Ofrecemos acompañamiento especializado para fortalecer
                        los procesos, reducir riesgos y mejorar el desempeño de
                        empresas y profesionales.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <article
                            key={service.title}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                        >
                            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-lg font-bold text-red-700">
                                IDH
                            </div>

                            <h3 className="text-xl font-bold text-slate-900">
                                {service.title}
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                {service.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}