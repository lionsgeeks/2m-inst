function PolicyCard({ title, subtitle }) {
    return (
        <a
            href="#"
            className="group block rounded-2xl bg-beta-white p-6 text-center shadow-sm ring-1 ring-alpha/10 transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-beta-blue/60 text-alpha ring-1 ring-alpha/10">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM8 12h8v-2H8v2Zm0 4h8v-2H8v2Z"
                    />
                </svg>
            </div>

            <div className="mt-4 text-sm font-extrabold tracking-tight text-alpha">
                {title}
            </div>
            <div className="mt-2 text-xs leading-5 text-so-gray">{subtitle}</div>

            <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-beta">
                Consulter
                <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
        </a>
    );
}

export default function InternalPoliciesSection() {
    const policies = [
        {
            title: 'Règlement intérieur',
            subtitle: 'Organisation interne et règles de fonctionnement.',
        },
        {
            title: 'Charte de déontologie',
            subtitle: 'Principes éthiques, impartialité et intégrité.',
        },
        {
            title: 'Charte IT & Sécurité',
            subtitle: 'Bonnes pratiques numériques et protection des données.',
        },
    ];

    return (
        <section className="pb-14 pt-2 sm:pb-18">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                        Politiques Internes
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-so-gray sm:text-base">
                        Des documents de référence pour cadrer nos pratiques, nos valeurs
                        et notre conformité.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {policies.map((policy) => (
                        <PolicyCard key={policy.title} {...policy} />
                    ))}
                </div>

                <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-linear-to-br from-beta-blue/60 via-beta-white to-beta-white p-6 text-center ring-1 ring-alpha/10 shadow-sm">
                    <div className="text-sm font-extrabold tracking-tight text-alpha">
                        Besoin d’une politique spécifique ?
                    </div>
                    <p className="mt-2 text-sm leading-6 text-so-gray">
                        Contactez-nous pour accéder à d’autres documents ou obtenir des
                        précisions sur notre dispositif de conformité.
                    </p>
                    <a
                        href="#"
                        className="mt-5 inline-flex items-center justify-center rounded-full bg-beta px-5 py-2.5 text-sm font-extrabold text-beta-white shadow-sm ring-1 ring-alpha/10 transition hover:bg-beta/90"
                    >
                        Nous contacter
                    </a>
                </div>
            </div>
        </section>
    );
}

