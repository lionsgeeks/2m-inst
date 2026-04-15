export default function HeroSection() {
    return (
        <section className="relative h-screen overflow-hidden bg-alpha">
            <div className="pointer-events-none absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2400&q=70"
                    alt=""
                    className="h-full w-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-linear-to-b from-beta-white/10 via-beta-blue/40 to-alpha/70" />
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-beta/20 blur-3xl" />
                <div className="absolute -right-24 -bottom-28 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            </div>

            <div className="relative flex min-h-svh flex-col">
                <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pt-14 pb-32 sm:pt-18 sm:pb-36">
                    <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-beta-white/10 bg-beta-white/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-beta-white/80">
                                <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                                Média public · Maroc & international
                            </div>

                            <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight text-beta-white sm:text-5xl lg:text-6xl">
                                L’audiovisuel public au service de{' '}
                                <span className="text-beta">l’information</span>
                                , de la culture et du divertissement.
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-7 text-beta-white/75 sm:text-lg">
                                Des contenus de qualité, accessibles partout,
                                pour accompagner le quotidien, informer avec
                                rigueur et mettre en valeur la création.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                                <a
                                    href="#"
                                    className="inline-flex w-full items-center justify-center rounded-lg bg-beta px-5 py-3 text-sm font-semibold text-beta-white shadow-sm ring-1 ring-beta/20 transition hover:bg-beta/90 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha focus-visible:outline-none sm:w-auto"
                                >
                                    Découvrir nos contenus
                                    <svg
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                        className="ml-2 h-4 w-4"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M11.2 4.2a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l3.3-3.3H3a1 1 0 1 1 0-2h11.1l-3.0-3.0a1 1 0 0 1 0-1.4Z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex w-full items-center justify-center rounded-lg border border-beta-white/15 bg-beta-white/5 px-5 py-3 text-sm font-semibold text-beta-white/90 shadow-sm transition hover:bg-beta-white/10 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha focus-visible:outline-none sm:w-auto"
                                >
                                    Voir les chaînes
                                </a>
                            </div>

                            {/* <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
                                {[
                                    { label: 'Fiabilité', value: 'Éditoriale' },
                                    { label: 'Couverture', value: 'Nationale' },
                                    { label: 'Accès', value: 'Multi‑plateforme' },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-xl border border-beta-white/10 bg-beta-white/5 p-4"
                                    >
                                        <div className="text-sm font-semibold text-beta-white">
                                            {item.value}
                                        </div>
                                        <div className="mt-1 text-xs text-beta-white/65">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl border border-beta-white/10 bg-beta-white/5 p-4 shadow-2xl shadow-so-black/20 sm:p-6">
                                <div className="overflow-hidden rounded-xl border border-beta-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=70"
                                        alt="Studio audiovisuel"
                                        className="h-56 w-full object-cover sm:h-64"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {[
                                        {
                                            title: 'Actualités & direct',
                                            description:
                                                'Suivez l’information en temps réel et les temps forts.',
                                        },
                                        {
                                            title: 'Culture & création',
                                            description:
                                                'Des programmes qui valorisent les talents et le patrimoine.',
                                        },
                                    ].map((card) => (
                                        <div
                                            key={card.title}
                                            className="rounded-xl bg-alpha/40 p-4 ring-1 ring-beta-white/10"
                                        >
                                            <div className="text-sm font-semibold text-beta-white">
                                                {card.title}
                                            </div>
                                            <div className="mt-1 text-sm leading-6 text-beta-white/70">
                                                {card.description}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pointer-events-none absolute -top-10 -right-10 hidden h-32 w-32 rounded-full bg-beta/15 blur-2xl lg:block" />
                        </div>
                    </div>
                </div>

                {/* <div className="absolute inset-x-0 -bottom-12">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="rounded-2xl border border-beta-white/10 bg-beta-white p-4 shadow-xl shadow-so-black/15 md:p-6">
                            <div className="grid gap-4 sm:grid-cols-3"> */}
                {/* {[
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
                                ].map((stat) => ( */}
                {/* <div
                                        key={stat.label}
                                        className="group rounded-xl bg-alpha-white p-5 ring-1 ring-alpha/5 transition hover:ring-beta/20"
                                    >
                                        <div className="flex items-center justify-center text-beta">
                                            {stat.icon}
                                        </div>
                                        <div className="mt-2 text-center text-2xl font-extrabold text-alpha">
                                            {stat.value}
                                        </div>
                                        <div className="mt-1 text-center text-xs font-semibold text-alpha">
                                            {stat.label}
                                        </div>
                                        <div className="mt-1 text-center text-xs text-so-gray">
                                            {stat.hint}
                                        </div>
                                    </div> */}
                {/* ))} */}
                {/* </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
