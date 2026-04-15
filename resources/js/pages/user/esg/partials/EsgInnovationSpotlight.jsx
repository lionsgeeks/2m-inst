function Badge({ children }) {
    return (
        <span className="inline-flex items-center rounded-full bg-beta-white/10 px-3 py-1 text-xs font-extrabold tracking-wide text-beta-white ring-1 ring-beta-white/10">
            {children}
        </span>
    );
}

export default function EsgInnovationSpotlight() {
    return (
        <section className="relative overflow-hidden bg-alpha-blue py-14 sm:py-18">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-alpha-blue/40 via-alpha-blue to-alpha-blue" />
                <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-beta/15 blur-3xl" />
                <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
                <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[22px_22px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                    <div className="rounded-2xl bg-beta-white/10 p-6 ring-1 ring-beta-white/10 shadow-2xl shadow-so-black/20 sm:p-8">
                        <div className="flex flex-wrap gap-2">
                            <Badge>Innovation</Badge>
                            <Badge>Créativité</Badge>
                            <Badge>Inclusion</Badge>
                        </div>
                        <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-beta-white sm:text-3xl">
                            Le Lab de l’innovation créative
                        </h2>
                        <p className="mt-4 text-sm leading-6 text-alpha-white/75 sm:text-base">
                            Un espace pour prototyper, expérimenter et accélérer des idées à
                            impact — au service des communautés et de la transformation.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <a
                                href="#"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-beta px-6 text-sm font-semibold text-beta-white shadow-sm ring-1 ring-beta/25 transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha-blue focus-visible:outline-none"
                            >
                                Explorer le Lab
                            </a>
                            <a
                                href="#"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-beta-white/10 px-6 text-sm font-semibold text-beta-white ring-1 ring-beta-white/10 transition hover:bg-beta-white/15 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha-blue focus-visible:outline-none"
                            >
                                Voir nos projets
                            </a>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl ring-1 ring-beta-white/10 shadow-2xl shadow-so-black/25">
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1528460033278-a6ba57020470?auto=format&fit=crop&w=2000&q=70"
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-linear-to-b from-alpha-blue/10 via-alpha-blue/20 to-alpha-blue/85" />
                        </div>

                        <div className="relative grid min-h-[320px] content-end p-6 sm:p-8">
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <div className="text-sm font-extrabold text-beta-white">
                                        Score d’impact
                                    </div>
                                    <div className="mt-2 text-4xl font-extrabold tracking-tight text-beta-white">
                                        94%
                                    </div>
                                    <div className="mt-2 text-sm text-alpha-white/70">
                                        Indicateur interne (engagement + utilité)
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-beta-white/10 p-4 ring-1 ring-beta-white/10 backdrop-blur-sm">
                                    <div className="text-xs font-extrabold tracking-wide text-alpha-white/80">
                                        2026
                                    </div>
                                    <div className="mt-2 text-sm font-extrabold text-beta-white">
                                        12 projets
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

