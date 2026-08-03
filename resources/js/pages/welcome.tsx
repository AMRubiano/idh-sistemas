import { Head } from '@inertiajs/react';
import Header from '@/components/layout/header';
export default function Welcome() {
    return (
        <>
            <Head title="IDH Sistemas de Gestión" />

            <Header />

            <main className="min-h-screen bg-slate-50">
                <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Consultoría y formación
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            IDH Sistemas de Gestión
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                            Acompañamos a organizaciones y profesionales en la
                            implementación, mejora y fortalecimiento de sus
                            sistemas de gestión.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#servicios"
                                className="rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
                            >
                                Conocer servicios
                            </a>

                            <a
                                href="#contacto"
                                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
                            >
                                Contactar
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}