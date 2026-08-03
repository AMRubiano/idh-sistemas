import {
    Building2,
    Factory,
    GraduationCap,
    HardHat,
    HeartPulse,
    Landmark,
    Leaf,
    ShoppingBag,
} from 'lucide-react';

const sectors = [
    {
        name: 'Industria',
        description:
            'Optimización de procesos, gestión de riesgos, calidad, seguridad y mejora continua.',
        icon: Factory,
    },
    {
        name: 'Construcción',
        description:
            'Sistemas de gestión, seguridad laboral, control operativo y cumplimiento de requisitos.',
        icon: HardHat,
    },
    {
        name: 'Salud',
        description:
            'Fortalecimiento de procesos, calidad del servicio, seguridad y gestión organizacional.',
        icon: HeartPulse,
    },
    {
        name: 'Educación',
        description:
            'Mejora institucional, planificación, formación y fortalecimiento de los sistemas internos.',
        icon: GraduationCap,
    },
    {
        name: 'Administración pública',
        description:
            'Acompañamiento técnico, modernización de procesos y mejora de la gestión institucional.',
        icon: Landmark,
    },
    {
        name: 'Comercio y servicios',
        description:
            'Procesos más eficientes, atención de calidad y soluciones adaptadas al crecimiento empresarial.',
        icon: ShoppingBag,
    },
    {
        name: 'Medioambiente',
        description:
            'Gestión ambiental, sostenibilidad, cumplimiento y prevención de impactos.',
        icon: Leaf,
    },
    {
        name: 'Organizaciones',
        description:
            'Consultoría y formación para entidades privadas, asociaciones e instituciones.',
        icon: Building2,
    },
];

export default function Sectors() {
    return (
        <section
            id="sectores"
            className="scroll-mt-24 bg-slate-950 py-20 text-white sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                        Sectores de actividad
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Experiencia adaptada a diferentes organizaciones
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Cada organización tiene necesidades distintas. Por eso,
                        adaptamos nuestros servicios de consultoría, formación
                        y gestión del riesgo a su sector, estructura y realidad
                        operativa.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {sectors.map((sector) => {
                        const Icon = sector.icon;

                        return (
                            <article
                                key={sector.name}
                                className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-700 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-black/20"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-700/15 text-red-400 ring-1 ring-red-700/20 transition duration-300 group-hover:bg-red-700 group-hover:text-white">
                                    <Icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3 className="mt-6 text-xl font-bold">
                                    {sector.name}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-400">
                                    {sector.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-7 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="font-bold text-white">
                            ¿No encuentra su sector?
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            Analizamos las necesidades específicas de cada
                            organización y diseñamos una solución personalizada.
                        </p>
                    </div>

                    <a
                        href="#contacto"
                        className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                        Consultar nuestro caso
                    </a>
                </div>
            </div>
        </section>
    );
}