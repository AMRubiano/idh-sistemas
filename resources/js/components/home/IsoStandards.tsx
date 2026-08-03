import {
    BadgeCheck,
    ShieldCheck,
    Leaf,
    Lock,
    AlertTriangle,
    Factory,
    HeartHandshake,
    ClipboardCheck,
} from "lucide-react";

const standards = [
    {
        title: "ISO 9001",
        subtitle: "Gestión de Calidad",
        icon: BadgeCheck,
    },
    {
        title: "ISO 14001",
        subtitle: "Gestión Ambiental",
        icon: Leaf,
    },
    {
        title: "ISO 45001",
        subtitle: "Seguridad y Salud en el Trabajo",
        icon: ShieldCheck,
    },
    {
        title: "ISO 27001",
        subtitle: "Seguridad de la Información",
        icon: Lock,
    },
    {
        title: "ISO 31000",
        subtitle: "Gestión del Riesgo",
        icon: AlertTriangle,
    },
    {
        title: "HSEQ",
        subtitle: "Sistemas Integrados",
        icon: Factory,
    },
    {
        title: "BASC",
        subtitle: "Comercio Internacional Seguro",
        icon: ClipboardCheck,
    },
    {
        title: "SG-SST",
        subtitle: "Seguridad y Salud Laboral",
        icon: HeartHandshake,
    },
];

export default function IsoStandards() {
    return (
        <section
            id="normas"
            className="bg-white py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                        Normas internacionales
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                        Especialistas en sistemas de gestión
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Acompañamos organizaciones públicas y privadas en la
                        implementación, auditoría, mantenimiento y mejora de
                        los principales estándares internacionales.
                    </p>

                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {standards.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-xl"
                            >

                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-700 transition group-hover:bg-red-700 group-hover:text-white">

                                    <Icon className="h-7 w-7" />

                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-2 leading-7 text-slate-600">
                                    {item.subtitle}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}
