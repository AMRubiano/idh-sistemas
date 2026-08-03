import {
    ArrowUp,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Youtube,
} from 'lucide-react';

const quickLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Normas', href: '#normas' },
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
];

const serviceLinks = [
    'Sistemas de gestión',
    'Gestión del riesgo',
    'Consultoría',
    'Formación',
    'Auditoría y evaluación',
    'Mejora continua',
];

const socialLinks = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/idhdesarrollosostenible/',
        icon: Facebook,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jorge-a-morales-r-b1a57043',
        icon: Linkedin,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/idhsistemasdegestion',
        icon: Instagram,
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/@idhsistemasdegestion1822',
        icon: Youtube,
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.2fr]">
                    <div>
                        <a
                            href="#"
                            className="inline-flex items-center gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                            aria-label="Ir al inicio de IDH Sistemas de Gestión"
                        >
                            <img
                                src="/images/logo-rojo.jpg"
                                alt=""
                                className="h-16 w-16 rounded-2xl bg-white object-contain p-1"
                            />

                            <div>
                                <p className="text-xl font-bold">
                                    IDH Sistemas de Gestión
                                </p>

                                <p className="mt-1 text-sm text-slate-400">
                                    Soluciones · Innovación · Gestión del Riesgo
                                </p>
                            </div>
                        </a>

                        <p className="mt-6 max-w-md leading-7 text-slate-400">
                            Acompañamos a empresas, instituciones y
                            profesionales en el diseño, implementación y mejora
                            de sus sistemas de gestión, procesos y estrategias.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visitar ${social.label} de IDH`}
                                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-red-700 hover:bg-red-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                                    >
                                        <Icon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </a>
                                );
                            })}

                            <a
                                href="https://www.tiktok.com/@jorge.a346"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visitar TikTok de IDH"
                                className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 px-3 text-sm font-bold text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-red-700 hover:bg-red-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                            >
                                TikTok
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                            Navegación
                        </h2>

                        <ul className="mt-6 space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-400 transition hover:text-red-400 focus-visible:outline-none focus-visible:text-red-400"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                            Servicios
                        </h2>

                        <ul className="mt-6 space-y-4">
                            {serviceLinks.map((service) => (
                                <li
                                    key={service}
                                    className="text-sm text-slate-400"
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                            Contacto
                        </h2>

                        <div className="mt-6 space-y-5">
                            <a
                                href="mailto:idhcalidad@gmail.com"
                                className="group flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                            >
                                <Mail
                                    className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                                    aria-hidden="true"
                                />

                                <span>idhcalidad@gmail.com</span>
                            </a>

                            <a
                                href="tel:+573222180755"
                                className="group flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                            >
                                <Phone
                                    className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                                    aria-hidden="true"
                                />

                                <span>+57 322 218 0755</span>
                            </a>

                            <a
                                href="tel:+573208470086"
                                className="group flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                            >
                                <Phone
                                    className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                                    aria-hidden="true"
                                />

                                <span>+57 320 847 0086</span>
                            </a>

                            <a
                                href="tel:+5717537547"
                                className="group flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                            >
                                <Phone
                                    className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                                    aria-hidden="true"
                                />

                                <span>+57 1 753 7547</span>
                            </a>

                            <div className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                                <MapPin
                                    className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                                    aria-hidden="true"
                                />

                                <address className="not-italic">
                                    Calle 25 No. 12-27, piso 3
                                    <br />
                                    Centro Internacional
                                    <br />
                                    Bogotá D. C., Colombia
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 border-t border-slate-800 pt-8">
                    <div className="flex flex-col gap-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
                        <p>
                            © {currentYear} IDH Sistemas de Gestión. Todos los
                            derechos reservados.
                        </p>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <a
                                href="#"
                                className="transition hover:text-white"
                            >
                                Aviso legal
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-white"
                            >
                                Política de privacidad
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-white"
                            >
                                Política de cookies
                            </a>

                            <a
                                href="#"
                                aria-label="Volver al principio de la página"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-red-700 hover:bg-red-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                            >
                                <ArrowUp
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}