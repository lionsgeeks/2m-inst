function StatCard({ label, value, note }) {
    return (
        <div className="rounded-2xl bg-beta-white p-5 shadow-sm ring-1 ring-alpha/10">
            <div className="text-xs font-extrabold uppercase tracking-wide text-so-gray">
                {label}
            </div>
            <div className="mt-3 text-3xl font-extrabold tracking-tight text-alpha">
                {value}
            </div>
            {note ? (
                <div className="mt-2 text-sm leading-6 text-so-gray">{note}</div>
            ) : null}
        </div>
    );
}

export default function EsgStats() {
    return (
        <section className="relative py-10 sm:py-14">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl bg-beta-white p-6 shadow-sm ring-1 ring-alpha/10 sm:p-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-beta-blue/50 px-3 py-1 text-xs font-extrabold tracking-wide text-alpha ring-1 ring-alpha/10">
                                <span className="h-1.5 w-1.5 rounded-full bg-beta" />
                                Notre transformation
                            </div>
                            <h2 className="mt-4 text-xl font-extrabold tracking-tight text-alpha sm:text-2xl">
                                Une transformation positive au cœur de nos métiers
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-so-gray sm:text-base">
                                Nous développons des initiatives ESG qui renforcent
                                l’inclusion, la responsabilité et la performance durable.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    'Impact social',
                                    'Innovation',
                                    'Inclusion',
                                    'Durabilité',
                                ].map((chip) => (
                                    <span
                                        key={chip}
                                        className="inline-flex items-center rounded-full bg-so-gray/5 px-3 py-1 text-xs font-extrabold tracking-wide text-alpha ring-1 ring-alpha/10"
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                            <StatCard
                                label="Projets soutenus"
                                value="50/50"
                                note="Programmes et actions à impact"
                            />
                            <StatCard
                                label="Bénéficiaires"
                                value="250K"
                                note="Personnes touchées"
                            />
                            <StatCard
                                label="Croissance"
                                value="+22%"
                                note="Engagement et participation"
                            />
                            <div className="rounded-2xl bg-linear-to-br from-beta-blue/70 via-beta-white to-beta-white p-5 shadow-sm ring-1 ring-alpha/10">
                                <div className="text-xs font-extrabold uppercase tracking-wide text-so-gray">
                                    Indice d’impact
                                </div>
                                <div className="mt-3 flex items-end justify-between">
                                    <div className="text-3xl font-extrabold tracking-tight text-alpha">
                                        84%
                                    </div>
                                    <div className="text-xs font-semibold text-so-gray">
                                        2026
                                    </div>
                                </div>
                                <div className="mt-3 h-2 w-full rounded-full bg-beta-white ring-1 ring-alpha/10">
                                    <div className="h-2 w-[84%] rounded-full bg-beta" />
                                </div>
                                <div className="mt-3 text-sm leading-6 text-so-gray">
                                    Mesure synthétique basée sur nos indicateurs clés.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

