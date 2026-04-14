export default function NewsSection() {
    return (
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
                            className="group overflow-hidden rounded-xl bg-beta-white shadow-sm transition hover:shadow-md"
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
    );
}

