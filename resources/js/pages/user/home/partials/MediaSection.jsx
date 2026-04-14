export default function MediaSection() {
    return (
        <section className="bg-beta-white mt-50">
            <div className="mx-auto max-w-7xl px-4 pb-12 pt-2">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-extrabold text-alpha">
                            Nos Médias
                        </h2>
                        <p className="mt-1 text-sm text-so-gray">
                            Suivez nos chaînes, radios et plateformes digitales.
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
                            className="group overflow-hidden rounded-xl bg-alpha-white shadow-sm transition hover:shadow-md"
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
    );
}

