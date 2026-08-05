import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';

type CurrentTeam = {
    slug: string;
};

type ContactRequest = {
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

type Props = {
    currentTeam?: CurrentTeam | null;
    contactRequest: ContactRequest;
    statuses: Record<string, string>;
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
        dateStyle: 'long',
        timeStyle: 'short',
    }).format(new Date(value));
}

export default function ContactRequestShow({
    currentTeam,
    contactRequest,
    statuses,
}: Props) {
    const statusForm = useForm({
        status: contactRequest.status,
    });

    const baseUrl = currentTeam
        ? `/${currentTeam.slug}/contact-requests`
        : '/';

    const handleStatusSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!currentTeam) {
            return;
        }

        statusForm.patch(
            `/${currentTeam.slug}/contact-requests/${contactRequest.id}/status`,
            {
                preserveScroll: true,
            },
        );
    };

    return (
        <>
            <Head title={`Solicitud #${contactRequest.id}`} />

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Solicitud de contacto
                        </p>

                        <h1 className="mt-1 text-3xl font-bold">
                            Solicitud #{contactRequest.id}
                        </h1>
                    </div>

                    <Link
                        href={baseUrl}
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
                    >
                        Volver a solicitudes
                    </Link>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="rounded-xl border bg-background p-6 lg:col-span-2">
                        <h2 className="text-lg font-semibold">
                            Información del contacto
                        </h2>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Nombre
                                </p>

                                <p className="mt-1 font-semibold">
                                    {contactRequest.name}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Empresa u organización
                                </p>

                                <p className="mt-1">
                                    {contactRequest.organization ?? '—'}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Cargo
                                </p>

                                <p className="mt-1">
                                    {contactRequest.position ?? '—'}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Servicio
                                </p>

                                <p className="mt-1">
                                    {contactRequest.service_label}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Correo electrónico
                                </p>

                                <a
                                    href={`mailto:${contactRequest.email}`}
                                    className="mt-1 inline-block font-medium text-blue-700 hover:underline dark:text-blue-300"
                                >
                                    {contactRequest.email}
                                </a>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Teléfono
                                </p>

                                {contactRequest.phone ? (
                                    <a
                                        href={`tel:${contactRequest.phone}`}
                                        className="mt-1 inline-block font-medium text-blue-700 hover:underline dark:text-blue-300"
                                    >
                                        {contactRequest.phone}
                                    </a>
                                ) : (
                                    <p className="mt-1">—</p>
                                )}
                            </div>
                        </div>

                        <hr className="my-8" />

                        <h2 className="text-lg font-semibold">Mensaje</h2>

                        <div className="mt-4 whitespace-pre-wrap rounded-lg bg-slate-50 p-5 leading-7 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
                            {contactRequest.message}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-xl border bg-background p-6">
                            <div className="flex items-center justify-between gap-4">
                                <h2 className="text-lg font-semibold">
                                    Estado
                                </h2>

                                <span
                                    className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                                        statusStyles[
                                            contactRequest.status
                                        ] ??
                                        'bg-muted text-muted-foreground'
                                    }`}
                                >
                                    {contactRequest.status_label}
                                </span>
                            </div>

                            <form
                                onSubmit={handleStatusSubmit}
                                className="mt-6 space-y-4"
                            >
                                <div>
                                    <label
                                        htmlFor="contact-request-status"
                                        className="text-sm font-medium"
                                    >
                                        Cambiar estado
                                    </label>

                                    <select
                                        id="contact-request-status"
                                        value={statusForm.data.status}
                                        onChange={(event) =>
                                            statusForm.setData(
                                                'status',
                                                event.target.value,
                                            )
                                        }
                                        aria-invalid={Boolean(
                                            statusForm.errors.status,
                                        )}
                                        className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
                                    >
                                        {Object.entries(statuses).map(
                                            ([value, label]) => (
                                                <option
                                                    key={value}
                                                    value={value}
                                                >
                                                    {label}
                                                </option>
                                            ),
                                        )}
                                    </select>

                                    {statusForm.errors.status && (
                                        <p className="mt-2 text-sm text-red-700">
                                            {statusForm.errors.status}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={
                                        statusForm.processing ||
                                        statusForm.data.status ===
                                            contactRequest.status
                                    }
                                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {statusForm.processing
                                        ? 'Guardando...'
                                        : 'Guardar estado'}
                                </button>

                                {statusForm.recentlySuccessful && (
                                    <p
                                        role="status"
                                        className="text-sm font-medium text-emerald-700 dark:text-emerald-300"
                                    >
                                        Estado actualizado correctamente.
                                    </p>
                                )}
                            </form>
                        </div>

                        <div className="rounded-xl border bg-background p-6">
                            <h2 className="text-lg font-semibold">
                                Seguimiento
                            </h2>

                            <dl className="mt-5 space-y-5">
                                <div>
                                    <dt className="text-sm text-muted-foreground">
                                        Fecha de recepción
                                    </dt>

                                    <dd className="mt-1">
                                        {formatDate(
                                            contactRequest.created_at,
                                        )}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm text-muted-foreground">
                                        Fecha de respuesta
                                    </dt>

                                    <dd className="mt-1">
                                        {formatDate(
                                            contactRequest.responded_at,
                                        )}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm text-muted-foreground">
                                        Fecha de cierre
                                    </dt>

                                    <dd className="mt-1">
                                        {formatDate(
                                            contactRequest.closed_at,
                                        )}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="rounded-xl border bg-background p-6">
                            <h2 className="text-lg font-semibold">
                                Acciones
                            </h2>

                            <div className="mt-5 space-y-3">
                                <a
                                    href={`mailto:${contactRequest.email}?subject=${encodeURIComponent(
                                        `Respuesta a su solicitud de información #${contactRequest.id}`,
                                    )}`}
                                    className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
                                >
                                    Responder por correo
                                </a>

                                {contactRequest.phone && (
                                    <a
                                        href={`tel:${contactRequest.phone}`}
                                        className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
                                    >
                                        Llamar al contacto
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="rounded-xl border bg-background p-6">
                            <h2 className="text-lg font-semibold">
                                Próximamente
                            </h2>

                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                <li>• Notas internas</li>
                                <li>• Historial de cambios</li>
                                <li>• Responsable asignado</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

ContactRequestShow.layout = (props: {
    currentTeam?: CurrentTeam | null;
    contactRequest?: ContactRequest;
}) => ({
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: props.currentTeam
                ? `/${props.currentTeam.slug}/dashboard`
                : '/',
        },
        {
            title: 'Solicitudes',
            href: props.currentTeam
                ? `/${props.currentTeam.slug}/contact-requests`
                : '/',
        },
        {
            title: props.contactRequest
                ? `Solicitud #${props.contactRequest.id}`
                : 'Detalle',
            href:
                props.currentTeam && props.contactRequest
                    ? `/${props.currentTeam.slug}/contact-requests/${props.contactRequest.id}`
                    : '#',
        },
    ],
});