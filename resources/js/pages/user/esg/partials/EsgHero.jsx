import { Link } from '@inertiajs/react';

export default function EsgHero() {
    return (
        <section className="relative overflow-hidden bg-alpha">
            <div className="pointer-events-none absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=70"
                    alt=""
                    className="h-full w-full object-cover opacity-25"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-b from-beta-white/10 via-beta-blue/40 to-alpha/70" />
                <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-beta/20 blur-3xl" />
                <div className="absolute -bottom-32 -right-28 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-18">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-beta-white/10 bg-beta-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-beta-white/80">
                        <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                        Engagement responsable
                    </div>

                    <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-beta-white sm:text-5xl">
                        Engagements &amp; Impact Social
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-beta-white/75 sm:text-base">
                        Une dynamique ESG centrée sur l’humain, la transparence et la
                        durabilité — avec des actions concrètes et mesurables.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                        <Link
                            href="#actions"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-beta px-6 text-sm font-semibold text-beta-white shadow-sm ring-1 ring-beta/25 transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha focus-visible:outline-none"
                        >
                            Découvrir nos actions
                        </Link>
                        <a
                            href="#resources"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-beta-white/5 px-6 text-sm font-semibold text-beta-white/90 shadow-sm ring-1 ring-beta-white/15 backdrop-blur-sm transition hover:bg-beta-white/10 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-alpha focus-visible:outline-none"
                        >
                            Ressources &amp; publications
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

