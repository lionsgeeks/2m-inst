function ActionCard({ title, subtitle, icon }) {
    return (
        <div className="rounded-2xl bg-beta-white p-6 shadow-sm ring-1 ring-alpha/10">
            <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-beta-blue/50 text-alpha ring-1 ring-alpha/10">
                    {icon}
                </div>
                <div className="min-w-0">
                    <div className="text-sm font-extrabold tracking-tight text-alpha">
                        {title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-so-gray">
                        {subtitle}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function EsgSocialActions() {
    const actions = [
        {
            title: 'Solidarité',
            subtitle:
                'Programmes dédiés à l’appui des initiatives locales et à l’accompagnement des publics vulnérables.',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M12 21s-7-4.35-9.33-8.36C.5 9.06 2.24 5.5 6.2 5.5c1.9 0 3.3 1 3.8 1.7.5-.7 1.9-1.7 3.8-1.7 3.96 0 5.7 3.56 3.53 7.14C19 16.65 12 21 12 21Z"
                    />
                </svg>
            ),
        },
        {
            title: 'Éducation & Culture',
            subtitle:
                'Accès renforcé aux contenus, à la formation et à la valorisation de la création.',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 9.75L5.5 9 12 5.25 18.5 9 12 12.75Z"
                    />
                </svg>
            ),
        },
        {
            title: 'Environnement',
            subtitle:
                'Actions de sensibilisation et d’optimisation de nos pratiques pour réduire l’empreinte.',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M12 2C8.13 2 5 5.13 5 9c0 4.25 3.5 8.5 7 13 3.5-4.5 7-8.75 7-13 0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5Z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section id="actions" className="py-10 sm:py-14">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex items-end justify-between gap-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                            Actions &amp; impact social
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-so-gray sm:text-base">
                            Une sélection d’actions structurantes, alignées avec nos valeurs
                            et notre mission.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="hidden rounded-full bg-alpha px-4 py-2 text-sm font-extrabold text-beta-white shadow-sm ring-1 ring-alpha/10 transition hover:bg-alpha/90 sm:inline-flex"
                    >
                        Tout voir
                    </a>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {actions.map((action) => (
                        <ActionCard key={action.title} {...action} />
                    ))}
                </div>
            </div>
        </section>
    );
}

