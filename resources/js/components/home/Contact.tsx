export default function Contact() {
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

                                <a
                                    href="tel:+000000000000"
                                    className="mt-2 block text-lg font-semibold text-slate-900 transition hover:text-red-700"
                                >
                                    Añadir teléfono
                                </a>
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

                        <form className="mt-8 space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-slate-900"
                                    >
                                        Nombre
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-700 focus:ring-2 focus:ring-red-100"
                                        placeholder="Su nombre"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-semibold text-slate-900"
                                    >
                                        Empresa
                                    </label>

                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        autoComplete="organization"
                                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-700 focus:ring-2 focus:ring-red-100"
                                        placeholder="Nombre de la empresa"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-slate-900"
                                    >
                                        Correo electrónico
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-700 focus:ring-2 focus:ring-red-100"
                                        placeholder="correo@empresa.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-semibold text-slate-900"
                                    >
                                        Teléfono
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-700 focus:ring-2 focus:ring-red-100"
                                        placeholder="Número de contacto"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="service"
                                    className="block text-sm font-semibold text-slate-900"
                                >
                                    Servicio de interés
                                </label>

                                <select
                                    id="service"
                                    name="service"
                                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Seleccione una opción
                                    </option>
                                    <option value="sistemas-gestion">
                                        Sistemas de gestión
                                    </option>
                                    <option value="gestion-riesgo">
                                        Gestión del riesgo
                                    </option>
                                    <option value="consultoria">
                                        Consultoría
                                    </option>
                                    <option value="formacion">
                                        Formación
                                    </option>
                                    <option value="auditoria">
                                        Auditoría y evaluación
                                    </option>
                                    <option value="otro">
                                        Otro servicio
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-slate-900"
                                >
                                    Mensaje
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-700 focus:ring-2 focus:ring-red-100"
                                    placeholder="Explique brevemente qué necesita"
                                />
                            </div>

                            <div className="flex items-start gap-3">
                                <input
                                    id="privacy"
                                    name="privacy"
                                    type="checkbox"
                                    required
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-red-700 focus:ring-red-700"
                                />

                                <label
                                    htmlFor="privacy"
                                    className="text-sm leading-6 text-slate-600"
                                >
                                    He leído y acepto la política de privacidad.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800 sm:w-auto"
                            >
                                Enviar solicitud
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}