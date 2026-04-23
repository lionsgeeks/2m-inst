export default function EditorialModelSection() {
    return (
        <section className="relative overflow-hidden bg-alpha py-14 sm:py-18">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-28 h-72 w-72 rounded-full bg-beta/20 blur-3xl" />
                <div className="absolute -right-28 -bottom-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
                <div className="absolute inset-0 bg-linear-to-b from-alpha/40 via-alpha/80 to-alpha" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-beta-white/15 bg-beta-white/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-beta-white/85">
                            <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                            Engagement & performance
                        </div>
                        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-beta-white sm:text-3xl">
                            Modèle éditorial & impact
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-beta-white/70 sm:text-base">
                            Une stratégie centrée sur la qualité, la proximité
                            et l’innovation, pour répondre aux attentes des
                            audiences.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {[
                                {
                                    label: 'Confiance',
                                    value: '85%',
                                    hint: 'Perception',
                                },
                                {
                                    label: 'Couverture',
                                    value: '100%',
                                    hint: 'Territoire',
                                },
                                {
                                    label: 'Formats',
                                    value: 'Multi',
                                    hint: 'TV · Radio · Web',
                                },
                                {
                                    label: 'Accès',
                                    value: '24/7',
                                    hint: 'Replay & live',
                                },
                            ].map((kpi) => (
                                <div
                                    key={kpi.label}
                                    className="rounded-2xl bg-beta-white/5 p-5 ring-1 ring-beta-white/10"
                                >
                                    <div className="text-2xl font-extrabold text-beta-white">
                                        {kpi.value}
                                    </div>
                                    <div className="mt-1 text-xs font-semibold text-beta-white/70">
                                        {kpi.label}
                                    </div>
                                    <div className="mt-2 text-xs text-beta-white/55">
                                        {kpi.hint}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            {
                                title: 'Qualité éditoriale',
                                description:
                                    'Des contenus vérifiés, contextualisés et accessibles.',
                                icon: (
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 2 3 6v6c0 5 3.8 9.7 9 10 5.2-.3 9-5 9-10V6l-9-4Zm-1 14-4-4 1.4-1.4L11 13.2l4.6-4.6L17 10l-6 6Z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Proximité',
                                description:
                                    'Des formats qui parlent au quotidien des citoyens.',
                                icon: (
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Innovation',
                                description:
                                    'Nouveaux formats, nouvelles expériences et data‑driven.',
                                icon: (
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M9 21h6v-1H9v1Zm3-20a7 7 0 0 0-4 12.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.26A7 7 0 0 0 12 1Zm2 11.59V16h-4v-3.41l-.26-.19A5 5 0 1 1 14.26 12.4l-.26.19Z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Accessibilité',
                                description:
                                    'Multi‑plateforme, multi‑écrans, pour tous les publics.',
                                icon: (
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm5 18a1.5 1.5 0 1 0-1.5-1.5A1.5 1.5 0 0 0 12 20Z"
                                        />
                                    </svg>
                                ),
                            },
                        ].map((card) => (
                            <div
                                key={card.title}
                                className="rounded-2xl bg-beta-white/5 p-6 ring-1 ring-beta-white/10 transition hover:bg-beta-white/10"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-beta/20 text-beta-white ring-1 ring-beta/25">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <div className="text-base font-extrabold tracking-tight text-beta-white">
                                            {card.title}
                                        </div>
                                        <div className="mt-1 text-sm leading-6 text-beta-white/70">
                                            {card.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
