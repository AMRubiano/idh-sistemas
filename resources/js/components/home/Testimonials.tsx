import {
    BadgeCheck,
    MessageSquareQuote,
    ShieldCheck,
    Sparkles,
} from 'lucide-react';

const testimonialPrinciples = [
    {
        title: 'Testimonios verificados',
        description:
            'Solo publicaremos opiniones correspondientes a experiencias reales con IDH Sistemas de Gestión.',
        icon: BadgeCheck,
    },
    {
        title: 'Publicación autorizada',
        description:
            'Cada testimonio requerirá la autorización expresa de la persona u organización correspondiente.',
        icon: ShieldCheck,
    },
    {
        title: 'Experiencias transparentes',
        description:
            'No utilizaremos opiniones inventadas ni atribuiremos frases a clientes sin su consentimiento.',
        icon: Sparkles,
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonios"
            className="scroll-mt-24 bg-slate-950 py-20 text-white sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                            Testimonios
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            La confianza también se construye con transparencia
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Este espacio quedará preparado para compartir
                            experiencias reales de empresas, instituciones y
                            profesionales que hayan trabajado con IDH Sistemas
                            de Gestión.
                        </p>

                        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-7">
                            <MessageSquareQuote
                                className="h-9 w-9 text-red-400"
                                aria-hidden="true"
                            />

                            <blockquote className="mt-5 text-xl font-semibold leading-8 text-white">
                                Publicaremos únicamente testimonios reales,
                                verificables y autorizados.
                            </blockquote>

                            <p className="mt-4 text-sm leading-6 text-slate-400">
                                Hasta disponer de testimonios confirmados, no
                                mostraremos nombres, empresas, valoraciones ni
                                experiencias ficticias.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        {testimonialPrinciples.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="group rounded-3xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-700 hover:shadow-2xl hover:shadow-black/20"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-700/15 text-red-400 ring-1 ring-red-700/20 transition duration-300 group-hover:bg-red-700 group-hover:text-white">
                                            <Icon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 leading-7 text-slate-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-14 rounded-3xl border border-red-900/50 bg-red-950/30 px-7 py-8 sm:px-10 lg:flex lg:items-center lg:justify-between">
                    <div className="max-w-3xl">
                        <p className="font-bold text-white">
                            ¿Ha trabajado con IDH?
                        </p>

                        <p className="mt-2 leading-7 text-slate-300">
                            En el futuro podremos habilitar un sistema para
                            solicitar, revisar y aprobar testimonios antes de su
                            publicación.
                        </p>
                    </div>

                    <a
                        href="#contacto"
                        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:mt-0 lg:shrink-0"
                    >
                        Contactar con IDH
                    </a>
                </div>
            </div>
        </section>
    );
}