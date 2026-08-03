import {
    ArrowRight,
    Award,
    CheckCircle2,
    ShieldCheck,
    TrendingUp,
} from 'lucide-react';

const strengths = [
    'Consultoría especializada',
    'Soluciones adaptadas a cada organización',
    'Acompañamiento durante todo el proceso',
];

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-slate-50">
            {/* Elementos decorativos de fondo */}
            <div
                aria-hidden="true"
                className="absolute -top-40 right-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-red-100/70 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute -bottom-48 -left-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-slate-200/70 blur-3xl"
            />

            <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
                {/* Contenido principal */}
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 shadow-sm">
                        <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                        Consultoría, formación y gestión del riesgo
                    </div>

                    <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                        Fortalecemos organizaciones mediante una gestión{' '}
                        <span className="text-red-700">más sólida y segura</span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                        Acompañamos a empresas, instituciones y profesionales
                        en la implementación, mejora y fortalecimiento de sus
                        sistemas de gestión, procesos y estrategias.
                    </p>

                    <div className="mt-8 space-y-3">
                        {strengths.map((strength) => (
                            <div
                                key={strength}
                                className="flex items-start gap-3 text-slate-700"
                            >
                                <CheckCircle2
                                    className="mt-0.5 h-5 w-5 shrink-0 text-red-700"
                                    aria-hidden="true"
                                />

                                <span className="font-medium">{strength}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#contacto"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
                        >
                            Solicitar asesoramiento
                            <ArrowRight
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </a>

                        <a
                            href="#servicios"
                            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                        >
                            Conocer nuestros servicios
                        </a>
                    </div>

                    <p className="mt-6 text-sm leading-6 text-slate-500">
                        Atención personalizada para organizaciones públicas,
                        privadas y profesionales.
                    </p>
                </div>

                {/* Panel visual */}
                <div className="relative mx-auto w-full max-w-xl">
                    <div
                        aria-hidden="true"
                        className="absolute inset-6 -z-10 rounded-[2.5rem] bg-red-700/10 blur-2xl"
                    />

                    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
                        <div className="border-b border-slate-200 bg-slate-950 px-7 py-6 text-white sm:px-9">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
                                IDH Sistemas de Gestión
                            </p>

                            <p className="mt-3 text-2xl font-bold leading-tight">
                                Soluciones · Innovación · Gestión del Riesgo
                            </p>
                        </div>

                        <div className="p-7 sm:p-9">
                            <div className="flex items-center gap-5 border-b border-slate-200 pb-7">
                                <img
                                    src="/images/logo-rojo.jpg"
                                    alt="Símbolo corporativo de IDH Sistemas de Gestión"
                                    className="h-20 w-20 rounded-2xl object-cover shadow-sm ring-1 ring-slate-200"
                                />

                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
                                        Nuestro propósito
                                    </p>

                                    <p className="mt-2 text-lg font-bold text-slate-950">
                                        Convertir la gestión en una ventaja
                                        para cada organización.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                                    <ShieldCheck
                                        className="h-7 w-7 text-red-700"
                                        aria-hidden="true"
                                    />

                                    <p className="mt-4 font-bold text-slate-950">
                                        Seguridad
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Prevención y control de riesgos.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                                    <TrendingUp
                                        className="h-7 w-7 text-red-700"
                                        aria-hidden="true"
                                    />

                                    <p className="mt-4 font-bold text-slate-950">
                                        Mejora
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Procesos más eficientes y sólidos.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                                    <Award
                                        className="h-7 w-7 text-red-700"
                                        aria-hidden="true"
                                    />

                                    <p className="mt-4 font-bold text-slate-950">
                                        Calidad
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Soluciones con rigor profesional.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta flotante */}
                    <div className="mt-5 rounded-2xl border border-red-200 bg-white p-5 shadow-lg sm:mt-6">
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-700">
                                <CheckCircle2
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <p className="font-bold text-slate-950">
                                    Acompañamiento integral
                                </p>

                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    Desde el diagnóstico inicial hasta la
                                    implantación y mejora continua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}