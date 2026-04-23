export default function EsgFeaturedProject() {
    return (
        <section className="py-10 sm:py-14">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
                    <div className="lg:col-span-7">
                        <div className="group relative overflow-hidden rounded-2xl bg-beta-white shadow-sm ring-1 ring-alpha/10">
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2000&q=70"
                                    alt=""
                                    loading="lazy"
                                    className="h-full w-full object-cover opacity-90 transition group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-alpha/10 via-alpha/10 to-alpha/75" />
                            </div>

                            <div className="relative grid min-h-[320px] content-end p-6 sm:p-8">
                                <div className="inline-flex items-center gap-2 rounded-full bg-beta-white/10 px-3 py-1 text-xs font-extrabold tracking-wide text-beta-white ring-1 ring-beta-white/10 backdrop-blur-sm">
                                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                                    Environnement
                                </div>
                                <div className="mt-4 text-2xl font-extrabold tracking-tight text-beta-white sm:text-3xl">
                                    Vers une production durable
                                </div>
                                <p className="mt-3 max-w-xl text-sm leading-6 text-alpha-white/75 sm:text-base">
                                    Optimisation énergétique, réduction des
                                    déchets et amélioration continue de nos
                                    pratiques opérationnelles.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        'Énergie',
                                        'Efficience',
                                        'Sensibilisation',
                                    ].map((label) => (
                                        <span
                                            key={label}
                                            className="inline-flex items-center rounded-full bg-beta-white/10 px-3 py-1 text-xs font-extrabold tracking-wide text-beta-white ring-1 ring-beta-white/10 backdrop-blur-sm"
                                        >
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="grid gap-4">
                            {[
                                {
                                    title: 'Réduction',
                                    value: '-18%',
                                    desc: 'Empreinte opérationnelle',
                                },
                                {
                                    title: 'Économie',
                                    value: '1.2GWh',
                                    desc: 'Énergie optimisée',
                                },
                                {
                                    title: 'Sensibilisation',
                                    value: '40+',
                                    desc: 'Ateliers & campagnes',
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl bg-beta-white p-5 shadow-sm ring-1 ring-alpha/10"
                                >
                                    <div className="text-xs font-extrabold tracking-wide text-so-gray uppercase">
                                        {item.title}
                                    </div>
                                    <div className="mt-3 text-3xl font-extrabold tracking-tight text-alpha">
                                        {item.value}
                                    </div>
                                    <div className="mt-2 text-sm leading-6 text-so-gray">
                                        {item.desc}
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
