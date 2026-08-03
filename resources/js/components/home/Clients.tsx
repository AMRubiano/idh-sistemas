import { Building2, Landmark, School, Stethoscope } from 'lucide-react';

const clientTypes = [
    {
        title: 'Empresas privadas',
        description:
            'Organizaciones que buscan fortalecer sus procesos, sistemas de gestión y estrategias.',
        icon: Building2,
    },
    {
        title: 'Instituciones públicas',
        description:
            'Entidades que requieren modernización, mejora institucional y acompañamiento técnico.',
        icon: Landmark,
    },
    {
        title: 'Sector educativo',
        description:
            'Centros e instituciones interesados en planificación, formación y mejora organizacional.',
        icon: School,
    },
    {
        title: 'Sector salud',
        description:
            'Organizaciones orientadas a mejorar la calidad, la seguridad y la gestión del servicio.',
        icon: Stethoscope,
    },
];

export default function Clients() {
    return (
        <section
            id="clientes"
            className="scroll-mt-24 bg-white py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                        Confianza y experiencia
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                        Acompañamos organizaciones de distintos sectores
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Trabajamos con empresas, instituciones y profesionales
                        que buscan mejorar su gestión, reducir riesgos y
                        fortalecer sus procesos.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {clientTypes.map((client) => {
                        const Icon = client.icon;

                        return (
                            <article
                                key={client.title}
                                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-red-700 shadow-sm ring-1 ring-slate-200 transition duration-300 group-hover:bg-red-700 group-hover:text-white">
                                    <Icon
                                        className="h-8 w-8"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-slate-950">
                                    {client.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {client.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-14 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-7 py-10 text-center sm:px-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                        Próximamente
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-slate-950">
                        Organizaciones que han confiado en IDH
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                        Este espacio quedará preparado para incorporar los
                        logotipos reales de clientes y organizaciones cuando
                        dispongamos de su autorización.
                    </p>
                </div>
            </div>
        </section>
    );
}