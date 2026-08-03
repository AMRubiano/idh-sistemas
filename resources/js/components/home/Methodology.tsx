import {
    CheckCircle2,
    ClipboardCheck,
    Lightbulb,
    Rocket,
} from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Diagnóstico',
        description:
            'Analizamos la situación actual, los procesos, los riesgos y las necesidades de la organización.',
        icon: ClipboardCheck,
    },
    {
        number: '02',
        title: 'Diseño de la solución',
        description:
            'Definimos una propuesta adaptada, con objetivos claros, prioridades y un plan de trabajo realista.',
        icon: Lightbulb,
    },
    {
        number: '03',
        title: 'Implementación',
        description:
            'Acompañamos la puesta en marcha de las acciones, herramientas y sistemas definidos.',
        icon: Rocket,
    },
    {
        number: '04',
        title: 'Seguimiento y mejora',
        description:
            'Evaluamos resultados, corregimos desviaciones y fortalecemos la mejora continua.',
        icon: CheckCircle2,
    },
];

export default function Methodology() {
    return (
        <section
            id="metodologia"
            className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                        Nuestra metodología
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                        Un proceso claro, cercano y orientado a resultados
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Trabajamos de forma estructurada, acompañando a cada
                        organización desde el análisis inicial hasta la
                        implantación y mejora continua.
                    </p>
                </div>

                <div className="relative mt-16">
                    <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-8 hidden h-px w-[75%] -translate-x-1/2 bg-slate-300 lg:block"
                    />

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <article
                                    key={step.number}
                                    className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                                >
                                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-700 text-white shadow-lg shadow-red-700/20">
                                        <Icon
                                            className="h-8 w-8"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <p className="mt-7 text-sm font-bold tracking-[0.2em] text-red-700">
                                        PASO {step.number}
                                    </p>

                                    <h3 className="mt-3 text-2xl font-bold text-slate-950">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {step.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-14 rounded-3xl bg-slate-950 px-7 py-8 text-white sm:px-10 sm:py-10 lg:flex lg:items-center lg:justify-between">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                            Soluciones personalizadas
                        </p>

                        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                            Cada organización requiere un enfoque diferente
                        </h3>

                        <p className="mt-4 leading-7 text-slate-300">
                            Adaptamos la metodología, los tiempos y el alcance
                            del proyecto a la realidad de cada empresa,
                            institución o profesional.
                        </p>
                    </div>

                    <a
                        href="#contacto"
                        className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:mt-0 lg:shrink-0"
                    >
                        Solicitar una valoración
                    </a>
                </div>
            </div>
        </section>
    );
}