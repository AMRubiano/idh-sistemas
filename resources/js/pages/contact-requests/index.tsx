import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import type { FormEvent } from 'react';

type CurrentTeam = {
    slug: string;
};

type ContactRequestItem = {
    id: number;
    name: string;
    organization: string | null;
    position: string | null;
    email: string;
    phone: string | null;
    service: string;
    service_label: string;
    message: string;
    status: string;
    status_label: string;
    source: string;
    privacy_accepted_at: string | null;
    responded_at: string | null;
    closed_at: string | null;
    created_at: string | null;
    updated_at: string | null;
};

type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};

type PaginatedContactRequests = {
    data: ContactRequestItem[];
    current_page: number;
    from: number | null;
    last_page: number;
    links: PaginationLink[];
    per_page: number;
    to: number | null;
    total: number;
};

type Filters = {
    search: string;
    status: string;
};

type Summary = {
    total: number;
    new: number;
    pending: number;
    in_progress: number;
    responded: number;
    closed: number;
};

type Props = {
    currentTeam?: CurrentTeam | null;
    contactRequests: PaginatedContactRequests;
    filters: Filters;
    statuses: Record<string, string>;
    summary: Summary;
};

const statusStyles: Record<string, string> = {
    new: 'bg-blue-100 text-blue-900 dark:bg-blue-900/40 dark:text-blue-200',
    pending:
        'bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200',
    in_progress:
        'bg-violet-100 text-violet-900 dark:bg-violet-900/40 dark:text-violet-200',
    responded:
        'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-200',
    closed:
        'bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-100',
};

function formatDate(value: string | null): string {
    if (!value) {
        return '—';
    }

    return new Intl.DateTimeFormat('es-ES', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(new Date(value));
}

function truncateMessage(message: string, maximumLength = 110): string {
    if (message.length <= maximumLength) {
        return message;
    }

    return `${message.slice(0, maximumLength).trim()}…`;
}

export default function ContactRequestsIndex({
    currentTeam,
    contactRequests,
    filters,
    statuses,
    summary,
}: Props) {
    const [search, setSearch] = useState(filters.search);
    const [status, setStatus] = useState(filters.status);

    const baseUrl = currentTeam
        ? `/${currentTeam.slug}/contact-requests`
        : '/';

    const applyFilters = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.get(
            baseUrl,
            {
                search: search || undefined,
                status: status || undefined,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
    };

    const clearFilters = () => {
        setSearch('');
        setStatus('');

        router.get(
            baseUrl,
            {},
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
    };

    const summaryCards = [
        {
            label: 'Total',
            value: summary.total,
        },
        {
            label: 'Nuevas',
            value: summary.new,
        },
        {
            label: 'Pendientes',
            value: summary.pending,
        },
        {
            label: 'En proceso',
            value: summary.in_progress,
        },
        {
            label: 'Respondidas',
            value: summary.responded,
        },
        {
            label: 'Cerradas',
            value: summary.closed,
        },
    ];

    return (
        <>
            <Head title="Solicitudes de contacto" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                <section>
                    <p className="text-sm font-medium text-muted-foreground">
                        CRM
                    </p>

                    <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">
                                Solicitudes de contacto
                            </h1>

                            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                                Consulte y gestione las solicitudes recibidas
                                desde el formulario público de IDH.
                            </p>
                        </div>

                        <p className="text-sm text-muted-foreground">
                            {contactRequests.total === 1
                                ? '1 solicitud registrada'
                                : `${contactRequests.total} solicitudes registradas`}
                        </p>
                    </div>
                </section>

                <section
                    aria-label="Resumen de solicitudes"
                    className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6"
                >
                    {summaryCards.map((card) => (
                        <div
                            key={card.label}
                            className="rounded-xl border border-sidebar-border/70 bg-background p-4 dark:border-sidebar-border"
                        >
                            <p className="text-sm text-muted-foreground">
                                {card.label}
                            </p>

                            <p className="mt-2 text-2xl font-bold">
                                {card.value}
                            </p>
                        </div>
                    ))}
                </section>

                <section className="rounded-xl border border-sidebar-border/70 bg-background p-4 dark:border-sidebar-border">
                    <form
                        onSubmit={applyFilters}
                        className="grid gap-4 md:grid-cols-[1fr_240px_auto]"
                    >
                        <div>
                            <label
                                htmlFor="contact-search"
                                className="text-sm font-medium"
                            >
                                Buscar
                            </label>

                            <input
                                id="contact-search"
                                type="search"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Nombre, empresa, correo, teléfono o mensaje"
                                className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="contact-status"
                                className="text-sm font-medium"
                            >
                                Estado
                            </label>

                            <select
                                id="contact-status"
                                value={status}
                                onChange={(event) =>
                                    setStatus(event.target.value)
                                }
                                className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
                            >
                                <option value="">Todos los estados</option>

                                {Object.entries(statuses).map(
                                    ([value, label]) => (
                                        <option key={value} value={value}>
                                            {label}
                                        </option>
                                    ),
                                )}
                            </select>
                        </div>

                        <div className="flex items-end gap-2">
                            <button
                                type="submit"
                                className="h-10 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                            >
                                Filtrar
                            </button>

                            <button
                                type="button"
                                onClick={clearFilters}
                                className="h-10 rounded-md border border-input bg-background px-4 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
                            >
                                Limpiar
                            </button>
                        </div>
                    </form>
                </section>

                <section className="overflow-hidden rounded-xl border border-sidebar-border/70 bg-background dark:border-sidebar-border">
                    {contactRequests.data.length === 0 ? (
                        <div className="px-6 py-16 text-center">
                            <h2 className="text-lg font-semibold">
                                No hay solicitudes
                            </h2>

                            <p className="mt-2 text-sm text-muted-foreground">
                                No se encontraron solicitudes con los filtros
                                seleccionados.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1180px] text-left text-sm">
                                <thead className="border-b bg-muted/40">
                                    <tr>
                                        <th className="px-5 py-3 font-semibold">
                                            Contacto
                                        </th>

                                        <th className="px-5 py-3 font-semibold">
                                            Organización
                                        </th>

                                        <th className="px-5 py-3 font-semibold">
                                            Servicio
                                        </th>

                                        <th className="px-5 py-3 font-semibold">
                                            Mensaje
                                        </th>

                                        <th className="px-5 py-3 font-semibold">
                                            Estado
                                        </th>

                                        <th className="px-5 py-3 font-semibold">
                                            Fecha

                                        <th className="px-5 py-3 text-right font-semibold">
                                            Acciones
                                        </th>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y">
                                    {contactRequests.data.map(
                                        (contactRequest) => (
                                            <tr
                                                key={contactRequest.id}
                                                className="align-top transition hover:bg-muted/30"
                                            >
                                                <td className="px-5 py-4">
                                                    <p className="font-semibold">
                                                        {contactRequest.name}
                                                    </p>

                                                    <a
                                                        href={`mailto:${contactRequest.email}`}
                                                        className="mt-1 block text-sm text-muted-foreground hover:underline"
                                                    >
                                                        {contactRequest.email}
                                                    </a>

                                                    {contactRequest.phone && (
                                                        <a
                                                            href={`tel:${contactRequest.phone}`}
                                                            className="mt-1 block text-sm text-muted-foreground hover:underline"
                                                        >
                                                            {
                                                                contactRequest.phone
                                                            }
                                                        </a>
                                                    )}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <p>
                                                        {contactRequest.organization ??
                                                            '—'}
                                                    </p>

                                                    {contactRequest.position && (
                                                        <p className="mt-1 text-muted-foreground">
                                                            {
                                                                contactRequest.position
                                                            }
                                                        </p>
                                                    )}
                                                </td>

                                                <td className="px-5 py-4">
                                                    {
                                                        contactRequest.service_label
                                                    }
                                                </td>

                                                <td className="max-w-sm px-5 py-4 leading-6 text-muted-foreground">
                                                    {truncateMessage(
                                                        contactRequest.message,
                                                    )}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span
                                                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                            statusStyles[
                                                                contactRequest
                                                                    .status
                                                            ] ??
                                                            'bg-muted text-muted-foreground'
                                                        }`}
                                                    >
                                                        {
                                                            contactRequest.status_label
                                                        }
                                                    </span>
                                                </td>

                                                <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">
                                                    {formatDate(
                                                        contactRequest.created_at,
                                                    )}
                                                </td>

                                                <td className="whitespace-nowrap px-5 py-4 text-right">
                                                     <Link
                                                        href={currentTeam? `/${currentTeam.slug}/contact-requests/${contactRequest.id}`: '/'}
                                                        className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                                    >
                                                        Ver solicitud
                                                     </Link>
                                                </td>
                                            </tr>
                                        ),
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>

                {contactRequests.last_page > 1 && (
                    <nav
                        aria-label="Paginación de solicitudes"
                        className="flex flex-wrap items-center justify-between gap-4"
                    >
                        <p className="text-sm text-muted-foreground">
                            Mostrando {contactRequests.from ?? 0}–{contactRequests.to ?? 0}{' '}
                            de {contactRequests.total}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {contactRequests.links.map((link, index) =>
                                link.url ? (
                                    <Link
                                        key={`${link.label}-${index}`}
                                        href={link.url}
                                        preserveScroll
                                        className={`rounded-md border px-3 py-2 text-sm transition ${
                                            link.active
                                                ? 'border-primary bg-primary text-primary-foreground'
                                                : 'border-input bg-background hover:bg-accent'
                                        }`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ) : (
                                    <span
                                        key={`${link.label}-${index}`}
                                        className="cursor-not-allowed rounded-md border border-input px-3 py-2 text-sm text-muted-foreground opacity-50"
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ),
                            )}
                        </div>
                    </nav>
                )}
            </div>
        </>
    );
}

ContactRequestsIndex.layout = (props: {
    currentTeam?: CurrentTeam | null;
}) => ({
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: props.currentTeam
                ? `/${props.currentTeam.slug}/dashboard`
                : '/',
        },
        {
            title: 'Solicitudes de contacto',
            href: props.currentTeam
                ? `/${props.currentTeam.slug}/contact-requests`
                : '/',
        },
    ],
});