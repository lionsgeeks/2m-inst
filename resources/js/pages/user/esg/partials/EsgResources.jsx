function ResourceItem({ title, meta }) {
    return (
        <a
            href="#"
            className="group flex items-center justify-between gap-4 rounded-xl bg-beta-white px-4 py-3 shadow-sm ring-1 ring-alpha/10 transition hover:shadow-md"
        >
            <div className="min-w-0">
                <div className="truncate text-sm font-extrabold tracking-tight text-alpha">
                    {title}
                </div>
                <div className="mt-1 text-xs text-so-gray">{meta}</div>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-extrabold text-beta">
                Ouvrir
                <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
        </a>
    );
}

export default function EsgResources() {
    const items = [
        { title: 'Rapport ESG 2025', meta: 'PDF · 2.1MB' },
        { title: 'Charte éthique & conformité', meta: 'PDF · 640KB' },
        { title: 'Politique environnementale', meta: 'PDF · 410KB' },
    ];

    return (
        <section id="resources" className="pb-14 pt-6 sm:pb-18">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                            Ressources &amp; Publications
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-so-gray sm:text-base">
                            Documents clés et références pour suivre notre démarche ESG.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-full bg-alpha px-4 py-2 text-sm font-extrabold text-beta-white shadow-sm ring-1 ring-alpha/10 transition hover:bg-alpha/90"
                    >
                        Tout voir
                    </a>
                </div>

                <div className="mt-10 grid gap-3">
                    {items.map((item) => (
                        <ResourceItem key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

