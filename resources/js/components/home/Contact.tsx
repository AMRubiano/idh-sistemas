import { useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type ContactFormData = {
    name: string;
    organization: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    privacy_accepted: boolean;
    website: string;
};

export default function Contact() {
    const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        clearErrors,
    } = useForm<ContactFormData>({
        name: '',
        organization: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        privacy_accepted: false,
        website: '',
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSubmittedSuccessfully(false);
        clearErrors();

        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setSubmittedSuccessfully(true);
            },
        });
    };

    const inputClassName = (hasError: boolean) =>
        [
            'mt-2 w-full rounded-lg border bg-white px-4 py-3 text-slate-900',
            'outline-none transition placeholder:text-slate-400',
            'focus:ring-2',
            hasError
                ? 'border-red-600 focus:border-red-700 focus:ring-red-100'
                : 'border-slate-300 focus:border-red-700 focus:ring-red-100',
        ].join(' ');

    return (
        <section
            id="contacto"
            className="scroll-mt-24 bg-white py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                            Contacto
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Hablemos sobre las necesidades de su organización
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Cuéntenos qué necesita y estudiaremos la mejor forma
                            de ayudarle mediante nuestros servicios de
                            consultoría, formación, auditoría y gestión del
                            riesgo.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                                    Correo electrónico
                                </p>

                                <a
                                    href="mailto:info@idhsistemasdegestion.com"
                                    className="mt-2 block text-lg font-semibold text-slate-900 transition hover:text-red-700"
                                >
                                    info@idhsistemasdegestion.com
                                </a>
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                                    Teléfono
                                </p>

                                <p className="mt-2 text-lg font-semibold text-slate-900">
                                    Próximamente
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                                    Atención
                                </p>

                                <p className="mt-2 leading-7 text-slate-600">
                                    Atención personalizada a empresas,
                                    organizaciones y profesionales.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-slate-50 p-7 shadow-sm ring-1 ring-slate-200 sm:p-10">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Solicitar información
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                            Complete el formulario y nos pondremos en contacto
                            con usted.
                        </p>

                        {submittedSuccessfully && (
                            <div
                                role="status"
                                aria-live="polite"
                                className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm leading-6 text-emerald-900"
                            >
                                <p className="font-semibold">
                                    Solicitud enviada correctamente.
                                </p>

                                <p className="mt-1">
                                    Hemos recibido su consulta. El equipo de IDH
                                    se pondrá en contacto con usted.
                                </p>
                            </div>
                        )}

                        <form
                            className="mt-8 space-y-6"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="block text-sm font-semibold text-slate-900"
                                    >
                                        Nombre{' '}
                                        <span
                                            className="text-red-700"
                                            aria-hidden="true"
                                        >
                                            *
                                        </span>
                                    </label>

                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        minLength={2}
                                        maxLength={120}
                                        value={data.name}
                                        onChange={(event) =>
                                            setData('name', event.target.value)
                                        }
                                        aria-invalid={Boolean(errors.name)}
                                        aria-describedby={
                                            errors.name
                                                ? 'contact-name-error'
                                                : undefined
                                        }
                                        className={inputClassName(
                                            Boolean(errors.name),
                                        )}
                                        placeholder="Su nombre"
                                    />

                                    {errors.name && (
                                        <p
                                            id="contact-name-error"
                                            className="mt-2 text-sm text-red-700"
                                        >
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-organization"
                                        className="block text-sm font-semibold text-slate-900"
                                    >
                                        Empresa u organización
                                    </label>

                                    <input
                                        id="contact-organization"
                                        name="organization"
                                        type="text"
                                        autoComplete="organization"
                                        maxLength={160}
                                        value={data.organization}
                                        onChange={(event) =>
                                            setData(
                                                'organization',
                                                event.target.value,
                                            )
                                        }
                                        aria-invalid={Boolean(
                                            errors.organization,
                                        )}
                                        aria-describedby={
                                            errors.organization
                                                ? 'contact-organization-error'
                                                : undefined
                                        }
                                        className={inputClassName(
                                            Boolean(errors.organization),
                                        )}
                                        placeholder="Nombre de la organización"
                                    />

                                    {errors.organization && (
                                        <p
                                            id="contact-organization-error"
                                            className="mt-2 text-sm text-red-700"
                                        >
                                            {errors.organization}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="block text-sm font-semibold text-slate-900"
                                    >
                                        Correo electrónico{' '}
                                        <span
                                            className="text-red-700"
                                            aria-hidden="true"
                                        >
                                            *
                                        </span>
                                    </label>

                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        inputMode="email"
                                        required
                                        maxLength={254}
                                        value={data.email}
                                        onChange={(event) =>
                                            setData('email', event.target.value)
                                        }
                                        aria-invalid={Boolean(errors.email)}
                                        aria-describedby={
                                            errors.email
                                                ? 'contact-email-error'
                                                : undefined
                                        }
                                        className={inputClassName(
                                            Boolean(errors.email),
                                        )}
                                        placeholder="correo@empresa.com"
                                    />

                                    {errors.email && (
                                        <p
                                            id="contact-email-error"
                                            className="mt-2 text-sm text-red-700"
                                        >
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-phone"
                                        className="block text-sm font-semibold text-slate-900"
                                    >
                                        Teléfono
                                    </label>

                                    <input
                                        id="contact-phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        inputMode="tel"
                                        maxLength={40}
                                        value={data.phone}
                                        onChange={(event) =>
                                            setData('phone', event.target.value)
                                        }
                                        aria-invalid={Boolean(errors.phone)}
                                        aria-describedby={
                                            errors.phone
                                                ? 'contact-phone-error'
                                                : undefined
                                        }
                                        className={inputClassName(
                                            Boolean(errors.phone),
                                        )}
                                        placeholder="Número de contacto"
                                    />

                                    {errors.phone && (
                                        <p
                                            id="contact-phone-error"
                                            className="mt-2 text-sm text-red-700"
                                        >
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-service"
                                    className="block text-sm font-semibold text-slate-900"
                                >
                                    Servicio de interés{' '}
                                    <span
                                        className="text-red-700"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>

                                <select
                                    id="contact-service"
                                    name="service"
                                    required
                                    value={data.service}
                                    onChange={(event) =>
                                        setData('service', event.target.value)
                                    }
                                    aria-invalid={Boolean(errors.service)}
                                    aria-describedby={
                                        errors.service
                                            ? 'contact-service-error'
                                            : undefined
                                    }
                                    className={inputClassName(
                                        Boolean(errors.service),
                                    )}
                                >
                                    <option value="" disabled>
                                        Seleccione una opción
                                    </option>

                                    <option value="management-systems">
                                        Sistemas de gestión
                                    </option>

                                    <option value="risk-management">
                                        Gestión del riesgo
                                    </option>

                                    <option value="consulting">
                                        Consultoría
                                    </option>

                                    <option value="training">
                                        Formación
                                    </option>

                                    <option value="audits">
                                        Auditoría y evaluación
                                    </option>

                                    <option value="other">
                                        Otro servicio
                                    </option>
                                </select>

                                {errors.service && (
                                    <p
                                        id="contact-service-error"
                                        className="mt-2 text-sm text-red-700"
                                    >
                                        {errors.service}
                                    </p>
                                )}
                            </div>

                            <div>
                                <div className="flex items-center justify-between gap-4">
                                    <label
                                        htmlFor="contact-message"
                                        className="block text-sm font-semibold text-slate-900"
                                    >
                                        Mensaje{' '}
                                        <span
                                            className="text-red-700"
                                            aria-hidden="true"
                                        >
                                            *
                                        </span>
                                    </label>

                                    <span className="text-xs text-slate-500">
                                        {data.message.length}/2000
                                    </span>
                                </div>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={6}
                                    required
                                    minLength={10}
                                    maxLength={2000}
                                    value={data.message}
                                    onChange={(event) =>
                                        setData('message', event.target.value)
                                    }
                                    aria-invalid={Boolean(errors.message)}
                                    aria-describedby={
                                        errors.message
                                            ? 'contact-message-error'
                                            : 'contact-message-help'
                                    }
                                    className={`${inputClassName(
                                        Boolean(errors.message),
                                    )} resize-y`}
                                    placeholder="Explique brevemente qué necesita"
                                />

                                {errors.message ? (
                                    <p
                                        id="contact-message-error"
                                        className="mt-2 text-sm text-red-700"
                                    >
                                        {errors.message}
                                    </p>
                                ) : (
                                    <p
                                        id="contact-message-help"
                                        className="mt-2 text-sm text-slate-500"
                                    >
                                        Incluya únicamente la información
                                        necesaria para atender su consulta.
                                    </p>
                                )}
                            </div>

                            <div
                                className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                                aria-hidden="true"
                            >
                                <label htmlFor="contact-website">
                                    No complete este campo
                                </label>

                                <input
                                    id="contact-website"
                                    name="website"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={data.website}
                                    onChange={(event) =>
                                        setData('website', event.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <div className="flex items-start gap-3">
                                    <input
                                        id="contact-privacy"
                                        name="privacy_accepted"
                                        type="checkbox"
                                        required
                                        checked={data.privacy_accepted}
                                        onChange={(event) =>
                                            setData(
                                                'privacy_accepted',
                                                event.target.checked,
                                            )
                                        }
                                        aria-invalid={Boolean(
                                            errors.privacy_accepted,
                                        )}
                                        aria-describedby={
                                            errors.privacy_accepted
                                                ? 'contact-privacy-error'
                                                : undefined
                                        }
                                        className="mt-1 h-4 w-4 rounded border-slate-300 text-red-700 focus:ring-red-700"
                                    />

                                    <label
                                        htmlFor="contact-privacy"
                                        className="text-sm leading-6 text-slate-600"
                                    >
                                        He leído y acepto la{' '}
                                        <a
                                            href="#"
                                            className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:text-red-700"
                                        >
                                            política de privacidad
                                        </a>
                                        .
                                    </label>
                                </div>

                                {errors.privacy_accepted && (
                                    <p
                                        id="contact-privacy-error"
                                        className="mt-2 text-sm text-red-700"
                                    >
                                        {errors.privacy_accepted}
                                    </p>
                                )}
                            </div>

                            {errors.website && (
                                <p
                                    role="alert"
                                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                                >
                                    {errors.website}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                            >
                                {processing
                                    ? 'Enviando solicitud...'
                                    : 'Enviar solicitud'}
                            </button>

                            <p className="text-xs leading-5 text-slate-500">
                                Los campos marcados con * son obligatorios.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}