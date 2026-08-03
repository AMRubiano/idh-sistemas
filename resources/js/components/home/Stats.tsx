import { BarChart3, Briefcase, Globe2, ShieldCheck } from "lucide-react";

const stats = [
    {
        icon: Briefcase,
        value: "+500",
        title: "Proyectos",
        description: "Organizaciones acompañadas en procesos de mejora."
    },
    {
        icon: ShieldCheck,
        value: "25+",
        title: "Años",
        description: "Experiencia en sistemas de gestión y consultoría."
    },
    {
        icon: Globe2,
        value: "100%",
        title: "Compromiso",
        description: "Orientados a la calidad, la seguridad y la sostenibilidad."
    },
    {
        icon: BarChart3,
        value: "LatAm",
        title: "Cobertura",
        description: "Presencia y experiencia en Latinoamérica."
    }
];

export default function Stats() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-14 text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                        Nuestra experiencia
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-slate-900">
                        Resultados que generan confianza
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        Durante más de dos décadas hemos acompañado a empresas,
                        instituciones y organizaciones en la implantación de
                        sistemas de gestión, formación especializada y procesos
                        de mejora continua.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {stats.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">

                                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />

                                </div>

                                <h3 className="text-5xl font-extrabold text-slate-900">

                                    {item.value}

                                </h3>

                                <p className="mt-3 text-xl font-semibold text-slate-800">

                                    {item.title}

                                </p>

                                <p className="mt-4 leading-7 text-slate-600">

                                    {item.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}