import { Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Header() {
    const { auth, currentTeam } = usePage().props;
    const dashboardUrl = currentTeam
        ? dashboard(currentTeam.slug)
        : '/';

    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
                <Link href="/" className="flex flex-col">
                    <span className="text-xl font-bold tracking-tight text-slate-950">
                        IDH
                    </span>

                    <span className="text-xs font-medium tracking-wide text-slate-500">
                        Sistemas de Gestión
                    </span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    <a
                        href="#servicios"
                        className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                    >
                        Servicios
                    </a>

                    <a
                        href="#nosotros"
                        className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                    >
                        Nosotros
                    </a>

                    <a
                        href="#contacto"
                        className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                    >
                        Contacto
                    </a>
                </nav>

                <div className="flex items-center gap-3">
                    {auth.user ? (
                        <Link
                            href={dashboardUrl}
                            className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                        >
                            Ir al panel
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={login()}
                                className="hidden text-sm font-semibold text-slate-700 transition hover:text-slate-950 sm:block"
                            >
                                Iniciar sesión
                            </Link>

                            <Link
                                href={register()}
                                className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
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