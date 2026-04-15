function PillarCard({ title, description, imageUrl, tone = 'light', cta }) {
    const containerClass =
        tone === 'dark'
            ? 'bg-alpha-blue text-beta-white ring-beta-white/10'
            : 'bg-beta-white text-alpha ring-alpha/10';

    return (
        <div
            className={[
                'group overflow-hidden rounded-2xl shadow-sm ring-1 transition hover:-translate-y-0.5 hover:shadow-md',
                containerClass,
            ].join(' ')}
        >
            <div className="relative aspect-16/10">
                <img
                    src={imageUrl}
                    alt=""
                    loading="lazy"
                    className={[
                        'h-full w-full object-cover transition',
                        tone === 'dark' ? 'opacity-60' : 'opacity-95',
                    ].join(' ')}
                />
                <div
                    className={[
                        'absolute inset-0',
                        tone === 'dark'
                            ? 'bg-linear-to-b from-alpha-blue/10 via-alpha-blue/45 to-alpha-blue/90'
                            : 'bg-linear-to-b from-transparent via-transparent to-beta-white/85',
                    ].join(' ')}
                />
                <div className="absolute bottom-4 left-4 right-4">
                    <div
                        className={[
                            'text-sm font-extrabold tracking-tight',
                            tone === 'dark' ? 'text-beta-white' : 'text-alpha',
                        ].join(' ')}
                    >
                        {title}
                    </div>
                    <div
                        className={[
                            'mt-2 text-sm leading-6',
                            tone === 'dark' ? 'text-alpha-white/75' : 'text-so-gray',
                        ].join(' ')}
                    >
                        {description}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between gap-3 px-5 py-4">
                <div
                    className={[
                        'inline-flex items-center gap-2 text-sm font-extrabold',
                        tone === 'dark' ? 'text-beta-white' : 'text-beta',
                    ].join(' ')}
                >
                    {cta}
                    <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
                <div
                    className={[
                        'h-9 w-9 rounded-xl ring-1',
                        tone === 'dark'
                            ? 'bg-beta-white/10 ring-beta-white/10'
                            : 'bg-beta-blue/50 ring-alpha/10',
                    ].join(' ')}
                />
            </div>
        </div>
    );
}

export default function EsgPillars() {
    const items = [
        {
            title: 'Le pilier de l’ESG',
            description:
                'Des initiatives structurées autour des axes environnement, social et gouvernance.',
            imageUrl:
                'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=70',
            tone: 'light',
            cta: 'Découvrir',
        },
        {
            title: 'Impact social & inclusion',
            description:
                'Programmes pour favoriser l’égalité des chances, l’accès à la culture et l’engagement citoyen.',
            imageUrl:
                'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=70',
            tone: 'dark',
            cta: 'Voir les actions',
        },
    ];

    return (
        <section className="py-10 sm:py-14">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex items-end justify-between gap-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                            Nos piliers
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-so-gray sm:text-base">
                            Une stratégie ESG déclinée en programmes concrets, mesurables et
                            évolutifs.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    {items.map((item) => (
                        <PillarCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

