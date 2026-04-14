export default function HeroSection() {
    return (
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
                            l’information, de la culture et du divertissement.
                        </h1>
                        <p className="mt-6 max-w-xl text-sm leading-6 text-beta-white/70">
                            Une mission de service public portée par des
                            contenus de qualité, accessibles au Maroc et à
                            l’international.
                        </p>
                    </div>
                </div>

                <div className="mx-auto -mt-12 max-w-7xl px-4 absolute -bottom-10 left-0 right-0 shadow-lg">
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
    );
}

