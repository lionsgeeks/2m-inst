export default function SynergySection() {
    return (
        <section className="relative overflow-hidden bg-alpha-blue py-14 sm:py-18">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-28 h-72 w-72 rounded-full bg-beta/15 blur-3xl" />
                <div className="absolute -bottom-24 -right-28 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-extrabold tracking-tight text-beta-white sm:text-3xl">
                        Synergie &amp; Complémentarité
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-alpha-white/80 sm:text-base">
                        Une approche intégrée pour une couverture complète :
                        contenus, diffusion et innovation.
                    </p>
                </div>

                <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
                    <div className="space-y-4">
                        {[
                            {
                                title: 'Interconnexion de Contenus',
                                desc: 'Des formats et productions adaptés à chaque écran.',
                            },
                            {
                                title: 'Couverture Démographique Totale',
                                desc: 'Des marques complémentaires pour tous les publics.',
                            },
                            {
                                title: 'Agilité Digitale',
                                desc: 'Innovation, data et distribution multi-plateformes.',
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl bg-beta-white/5 p-5 ring-1 ring-beta-white/10 backdrop-blur-sm"
                            >
                                <div className="text-sm font-semibold text-beta-white">
                                    {item.title}
                                </div>
                                <div className="mt-1 text-sm leading-6 text-alpha-white/75">
                                    {item.desc}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative mx-auto w-full max-w-md">
                        <div className="relative aspect-square rounded-3xl bg-beta-white/5 p-8 ring-1 ring-beta-white/10 backdrop-blur-sm">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-44 w-44 rounded-full bg-beta-white/5 ring-1 ring-beta-white/10" />
                            </div>

                            <div className="relative flex h-full items-center justify-center">
                                <div className="text-center">
                                    <div className="text-sm font-semibold text-alpha-white/75">
                                        2M 360°
                                    </div>
                                    <div className="mt-1 text-2xl font-extrabold tracking-tight text-beta-white">
                                        Médias
                                    </div>
                                </div>
                            </div>

                            {[
                                { label: 'TV', pos: 'top-6 left-1/2 -translate-x-1/2' },
                                { label: 'Web', pos: 'top-1/2 right-6 -translate-y-1/2' },
                                { label: 'Radio', pos: 'bottom-6 left-1/2 -translate-x-1/2' },
                                { label: 'Digital', pos: 'top-1/2 left-6 -translate-y-1/2' },
                                { label: 'Réseaux', pos: 'top-14 right-14' },
                                { label: 'Événements', pos: 'bottom-14 right-14' },
                                { label: 'Data', pos: 'bottom-14 left-14' },
                                { label: 'Production', pos: 'top-14 left-14' },
                            ].map((node) => (
                                <div
                                    key={node.label}
                                    className={[
                                        'absolute inline-flex items-center justify-center rounded-full bg-beta-white/10 px-3 py-1 text-[11px] font-semibold text-beta-white ring-1 ring-beta-white/15',
                                        node.pos,
                                    ].join(' ')}
                                >
                                    {node.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

