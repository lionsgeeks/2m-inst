function InstanceCard({ title, description, tag, icon, href = '#' }) {
    return (
        <a
            href={href}
            className="group block overflow-hidden rounded-2xl bg-beta-white shadow-sm ring-1 ring-alpha/10 transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <div className="relative h-44">
                <div className="absolute inset-0 bg-linear-to-br from-beta-blue/80 via-beta-white to-beta-white" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(2,6,23,0.08)_1px,transparent_0)] bg-size-[22px_22px] opacity-60" />
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-beta/10 blur-2xl" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-beta-white/85 px-3 py-1 text-[11px] font-extrabold tracking-wide text-alpha ring-1 ring-alpha/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-beta" />
                    {tag}
                </div>
                <div className="absolute bottom-5 left-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-alpha-blue text-beta-white shadow-sm ring-1 ring-beta-white/10">
                    {icon}
                </div>
            </div>

            <div className="p-5">
                <div className="text-base font-extrabold tracking-tight text-alpha">
                    {title}
                </div>
                <p className="mt-2 text-sm leading-6 text-so-gray">
                    {description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-beta">
                    Voir les détails
                    <span className="transition group-hover:translate-x-0.5">
                        →
                    </span>
                </div>
            </div>
        </a>
    );
}

export default function GovernanceInstancesSection() {
    const items = [
        {
            tag: 'INSTANCE',
            title: 'Conseil d’Administration',
            description:
                'Organe stratégique définissant les orientations, validant les priorités et assurant le suivi de la performance.',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M7 11h10V9H7v2Zm0 4h10v-2H7v2Zm-2 6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5Zm0-2h14V5H5v14Z"
                    />
                </svg>
            ),
        },
        {
            tag: 'COMITÉ',
            title: 'Comité Social',
            description:
                'Instance dédiée au suivi des engagements sociaux, au dialogue interne et à l’amélioration continue du cadre de travail.',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h7v-3.5C24 14.17 19.33 13 16 13Z"
                    />
                </svg>
            ),
        },
        {
            tag: 'COMITÉ',
            title: 'Comité de Vigilance',
            description:
                'Dispositif de contrôle visant à prévenir les risques, assurer la conformité et renforcer la transparence.',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M12 2 4 5v6c0 5.55 3.84 10.74 8 11 4.16-.26 8-5.45 8-11V5l-8-3Zm0 18c-2.82-.78-6-4.86-6-9V6.3L12 4l6 2.3V11c0 4.14-3.18 8.22-6 9Zm1-13h-2v5h2V7Zm0 7h-2v2h2v-2Z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section id="instances" className="py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                        Instances de Gouvernance
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-so-gray sm:text-base">
                        Les organes de gouvernance assurent la stratégie, la
                        supervision et la conformité, dans un cadre clair et
                        transparent.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {items.map((item) => (
                        <InstanceCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
