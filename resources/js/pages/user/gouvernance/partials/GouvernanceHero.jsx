import { Link } from '@inertiajs/react';

export default function GouvernanceHero() {
    return (
        <section className="relative overflow-hidden bg-alpha-blue">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-alpha-blue/40 via-alpha-blue to-alpha-blue" />
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-beta/15 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
                <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[22px_22px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-18">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-beta-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-beta-white ring-1 ring-beta-white/15">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                            Gouvernance
                        </div>
                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-beta-white sm:text-4xl">
                            Gouvernance &amp; Transparence
                        </h1>
                        <p className="mt-4 text-sm leading-6 text-alpha-white/75 sm:text-base">
                            Engagement envers la redevabilité, la transparence et la qualité
                            de la gouvernance au service de l’intérêt général et de la
                            performance.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2 text-xs font-extrabold tracking-wide">
                            {[
                                { label: 'Transparence', tone: 'bg-beta-white/10' },
                                { label: 'Conformité', tone: 'bg-beta-white/10' },
                                { label: 'Contrôle', tone: 'bg-beta-white/10' },
                                { label: 'Éthique', tone: 'bg-gold/30 ring-gold/30' },
                            ].map((chip) => (
                                <span
                                    key={chip.label}
                                    className={[
                                        'inline-flex items-center rounded-full px-3 py-1 text-alpha-white ring-1 ring-beta-white/15',
                                        chip.tone,
                                    ].join(' ')}
                                >
                                    {chip.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="shrink-0">
                        <Link
                            href="#instances"
                            className="inline-flex items-center justify-center rounded-full bg-beta px-5 py-2.5 text-sm font-extrabold text-beta-white shadow-sm ring-1 ring-beta-white/10 transition hover:bg-beta/90"
                        >
                            En savoir plus
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

