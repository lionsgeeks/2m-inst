export default function Home() {
    return (
        <div className="min-h-screen bg-beta-white">
            {/* Hero */}
            <section className="relative overflow-hidden bg-alpha">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2400&q=70"
                        alt=""
                        className="h-full w-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-alpha/40 via-alpha/70 to-alpha" />
                </div>

                <div className="relative">
                    <div className="mx-auto max-w-7xl px-4 pb-24 pt-14">
                        <div className="max-w-2xl">
                            <div className="h-1 w-16 rounded-full bg-beta" />
                            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-beta-white sm:text-5xl">
                                Groupe audiovisuel public au service de
                                l’information, de la culture et du
                                divertissement.
                            </h1>
                            <p className="mt-6 max-w-xl text-sm leading-6 text-beta-white/70">
                                Une mission de service public portée par des
                                contenus de qualité, accessibles au Maroc et à
                                l’international.
                            </p>
                        </div>
                    </div>

                    {/* Floating stats card */}
                    <div className="mx-auto -mt-12 max-w-7xl px-4 pb-10">
                        <div className="rounded-xl bg-beta-white p-4 shadow-lg md:p-6">
                            <div className="grid gap-4 sm:grid-cols-3">
                                {[
                                    {
                                        label: 'Audience digitale',
                                        value: '25M+',
                                        hint: 'Utilisateurs actifs',
                                        icon: (
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h7v-3.5C24 14.17 19.33 13 16 13Z"
                                                />
                                            </svg>
                                        ),
                                    },
                                    {
                                        label: 'Chaînes',
                                        value: '6',
                                        hint: 'TV & radio',
                                        icon: (
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 14H3V5h18v12Z"
                                                />
                                            </svg>
                                        ),
                                    },
                                    {
                                        label: 'Service',
                                        value: '24/7',
                                        hint: 'Disponibilité',
                                        icon: (
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1Zm1 11.414V6h-2v7.414l4.293 4.293 1.414-1.414Z"
                                                />
                                            </svg>
                                        ),
                                    },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-lg bg-alpha-white p-5"
                                    >
                                        <div className="flex items-center justify-center text-beta">
                                            {stat.icon}
                                        </div>
                                        <div className="mt-2 text-center text-2xl font-extrabold text-alpha">
                                            {stat.value}
                                        </div>
                                        <div className="mt-1 text-center text-[11px] font-semibold text-alpha">
                                            {stat.label}
                                        </div>
                                        <div className="mt-1 text-center text-xs text-so-gray">
                                            {stat.hint}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos Médias */}
            <section className="bg-beta-white">
                <div className="mx-auto max-w-7xl px-4 py-12">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-extrabold text-alpha">
                                Nos Médias
                            </h2>
                            <p className="mt-1 text-sm text-so-gray">
                                Suivez nos chaînes, radios et plateformes
                                digitales.
                            </p>
                        </div>
                        <a
                            href="/medias"
                            className="text-sm font-semibold text-beta hover:opacity-90"
                        >
                            Voir tout (Replays)
                        </a>
                    </div>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: '2M TV',
                                desc: 'Chaîne généraliste',
                                img: 'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1200&q=70',
                            },
                            {
                                title: 'Radio 2M',
                                desc: 'Actualités & musique',
                                img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=70',
                            },
                            {
                                title: '2M.ma',
                                desc: 'Plateforme digitale',
                                img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=70',
                            },
                            {
                                title: '2M Culture',
                                desc: 'Culture & société',
                                img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=70',
                            },
                            {
                                title: '2M Sport',
                                desc: 'Sport & compétitions',
                                img: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=70',
                            },
                            {
                                title: '2M Digital',
                                desc: 'Innovation & expériences',
                                img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=70',
                            },
                        ].map((item) => (
                            <a
                                key={item.title}
                                href="/medias"
                                className="group overflow-hidden rounded-xl border border-border bg-alpha-white shadow-sm transition hover:shadow-md"
                            >
                                <div className="relative h-44">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                        loading="lazy"
                                    />
                                    <div className="absolute left-3 top-3 rounded-md bg-beta-white/90 px-2 py-1 text-xs font-semibold text-alpha shadow-sm">
                                        {item.title}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="text-base font-bold text-alpha">
                                        {item.title}
                                    </div>
                                    <div className="mt-2 text-sm text-so-gray">
                                        {item.desc}
                                    </div>
                                    <div className="mt-4 text-sm font-semibold text-beta">
                                        En savoir plus
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accès Rapides */}
            <section className="bg-alpha-white">
                <div className="mx-auto max-w-7xl px-4 py-12">
                    <h2 className="text-xl font-extrabold text-alpha">
                        Accès Rapides
                    </h2>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { label: 'Gouvernance', href: '/gouvernance' },
                            { label: 'RSE', href: '/rse' },
                            { label: "Appels d’offres", href: '/appels-offres' },
                            { label: 'Carrières', href: '/carrieres' },
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="rounded-xl border border-border bg-beta-white p-6 text-center shadow-sm transition hover:shadow-md"
                            >
                                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-beta-white text-beta shadow-sm">
                                    <span className="text-base font-bold">
                                        {item.label.slice(0, 1)}
                                    </span>
                                </div>
                                <div className="mt-3 text-sm font-semibold text-alpha">
                                    {item.label}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Actualités */}
            <section className="bg-beta-white">
                <div className="mx-auto max-w-7xl px-4 py-12">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-extrabold text-alpha">
                                Actualités Institutionnelles
                            </h2>
                            <p className="mt-1 text-sm text-so-gray">
                                Suivez nos communiqués et temps forts.
                            </p>
                        </div>
                        <a
                            href="/actualites"
                            className="text-sm font-semibold text-beta hover:opacity-90"
                        >
                            Voir les actualités
                        </a>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-3">
                        {[
                            {
                                title: 'SOREAD 2M renforce ses engagements en faveur de la diversité culturelle.',
                                img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=70',
                            },
                            {
                                title: 'Lancement de la plateforme digitale “Building Morocco”.',
                                img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=70',
                            },
                            {
                                title: 'Rapport annuel 2023 : SOREAD 2M, l’action au service du public.',
                                img: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=70',
                            },
                        ].map((news) => (
                            <a
                                key={news.title}
                                href="/actualites"
                                className="group overflow-hidden rounded-xl border border-border bg-beta-white shadow-sm transition hover:shadow-md"
                            >
                                <div className="relative h-44">
                                    <img
                                        src={news.img}
                                        alt=""
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="text-base font-bold text-alpha">
                                        {news.title}
                                    </div>
                                    <div className="mt-3 text-sm font-semibold text-beta">
                                        Lire plus
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}