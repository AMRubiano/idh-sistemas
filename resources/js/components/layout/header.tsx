import { Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Header() {
    const { auth, currentTeam } = usePage().props;

    const dashboardUrl = currentTeam
        ? dashboard(currentTeam.slug)
        : '/';

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="flex min-w-0 items-center gap-3"
                >
                    <img
                        src="/images/logo-rojo.jpg"
                        alt="IDH Sistemas de Gestión"
                        className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
                    />

                    <div className="min-w-0">
                        <span className="block text-base font-bold leading-tight tracking-tight text-slate-950 sm:text-xl">
                            IDH Sistemas de Gestión
                        </span>

                        <span className="mt-1 hidden text-xs font-medium leading-4 text-slate-500 sm:block">
                            Soluciones · Innovación · Gestión del Riesgo
                        </span>
                    </div>
                </Link>

                <nav className="hidden items-center gap-7 lg:flex">
                    <a
                        href="#servicios"
                        className="text-sm font-medium text-slate-600 transition hover:text-red-700"
                    >
                        Servicios
                    </a>

                    <a
                        href="#nosotros"
                        className="text-sm font-medium text-slate-600 transition hover:text-red-700"
                    >
                        Nosotros
                    </a>

                    <a
                        href="#contacto"
                        className="text-sm font-medium text-slate-600 transition hover:text-red-700"
                    >
                        Contacto
                    </a>
                </nav>

                <div className="flex shrink-0 items-center gap-3">
                    {auth.user ? (
                        <Link
                            href={dashboardUrl}
                            className="rounded-lg bg-slate-950 px-3 py-2 text-sm font-semibold whitespace-nowrap text-white transition hover:bg-slate-700 sm:px-4"
                        >
                            Ir al panel
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={login()}
                                className="hidden text-sm font-semibold whitespace-nowrap text-slate-700 transition hover:text-slate-950 md:block"
                            >
                                Iniciar sesión
                            </Link>

                            <Link
                                href={register()}
                                className="rounded-lg bg-slate-950 px-3 py-2 text-sm font-semibold whitespace-nowrap text-white transition hover:bg-slate-700 sm:px-4"
                            >
                                Registrarse
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}