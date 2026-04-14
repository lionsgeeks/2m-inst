export default function QuickAccessSection() {
    return (
        <section className="bg-alpha-white">
            <div className="mx-auto max-w-7xl px-4 py-12">
                <h2 className="text-xl font-extrabold text-alpha">
                    Accès Rapides
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { label: 'Gouvernance', href: '/gouvernance' },
                        { label: 'RSE', href: '/rse' },
                        { label: "Appels d’offres", href: '/appels-offres' },
                        { label: 'Carrières', href: '/carrieres' },
                    ].map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="rounded-xl bg-beta-white p-6 text-center shadow-sm transition hover:shadow-md"
                        >
                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-beta-white text-beta shadow-sm">
                                <span className="text-base font-bold">
                                    {item.label.slice(0, 1)}
                                </span>
                            </div>
                            <div className="mt-3 text-sm font-semibold text-alpha">
                                {item.label}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

