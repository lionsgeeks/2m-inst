const timelineItems = [
    {
        year: '1989',
        title: 'Création',
        description:
            'Lancement d’une vision moderne de l’audiovisuel au service du public.',
    },
    {
        year: '2007',
        title: 'Expansion',
        description:
            'Développement de l’offre et montée en puissance des formats et des talents.',
    },
    {
        year: '2016',
        title: 'Transformation digitale',
        description:
            'Accélération sur le numérique, engagement communautaire et nouveaux usages.',
    },
    {
        year: '2025',
        title: 'Cap stratégique',
        description:
            'Renforcer l’impact, l’accessibilité et l’innovation éditoriale multi‑plateforme.',
    },
];

export default function GroupTimelineSection() {
    return (
        <section className="bg-beta-white py-14 sm:py-18">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-alpha/10 bg-alpha-white px-3 py-1 text-[11px] font-semibold tracking-wide text-alpha">
                        <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                        Repères
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                        Notre Histoire
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-so-gray sm:text-base">
                        Les étapes clés qui ont façonné l’identité du groupe.
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-4xl">
                    <div className="relative">
                        <div className="absolute left-5 top-0 h-full w-px bg-alpha/10 sm:left-1/2 sm:-ml-px" />

                        <div className="space-y-6">
                            {timelineItems.map((item, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <div
                                        key={item.year}
                                        className={[
                                            'relative grid gap-4 sm:grid-cols-2 sm:gap-8',
                                            isLeft
                                                ? 'sm:[&>*:first-child]:order-1 sm:[&>*:last-child]:order-2'
                                                : 'sm:[&>*:first-child]:order-2 sm:[&>*:last-child]:order-1',
                                        ].join(' ')}
                                    >
                                        <div
                                            className={[
                                                'rounded-2xl bg-beta-white p-6 shadow-sm ring-1 ring-alpha/10',
                                                isLeft
                                                    ? 'sm:ml-auto'
                                                    : 'sm:mr-auto',
                                            ].join(' ')}
                                        >
                                            <div className="flex items-center justify-between gap-4">
                                                <div className="text-sm font-semibold text-so-gray">
                                                    {item.year}
                                                </div>
                                                <div className="inline-flex items-center gap-2 rounded-full bg-beta-blue/60 px-3 py-1 text-[11px] font-semibold text-beta ring-1 ring-beta/10">
                                                    {item.title}
                                                </div>
                                            </div>
                                            <div className="mt-3 text-sm leading-6 text-alpha">
                                                {item.description}
                                            </div>
                                        </div>

                                        <div className="hidden sm:block" />

                                        <div className="absolute left-5 top-7 -ml-2 h-4 w-4 rounded-full bg-beta ring-4 ring-beta-white sm:left-1/2 sm:-ml-2" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

