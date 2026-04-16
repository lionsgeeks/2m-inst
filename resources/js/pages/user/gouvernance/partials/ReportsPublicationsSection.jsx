function ReportCard({ year, title, meta, tone = 'neutral' }) {
    const badgeClass =
        tone === 'beta'
            ? 'bg-beta text-beta-white'
            : tone === 'gold'
              ? 'bg-gold text-beta-white'
              : 'bg-beta-blue/60 text-alpha';

    return (
        <a
            href="#"
            className="group block rounded-2xl bg-beta-white p-5 shadow-sm ring-1 ring-alpha/10 transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-extrabold tracking-wide ring-1 ring-alpha/10">
                    <span
                        className={['rounded-md px-2 py-0.5', badgeClass].join(
                            ' ',
                        )}
                    >
                        {year}
                    </span>
                </div>
                <div className="text-xs font-semibold text-so-gray">{meta}</div>
            </div>

            <div className="mt-4 text-sm font-extrabold tracking-tight text-alpha">
                {title}
            </div>

            <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-beta">
                Télécharger
                <span className="transition group-hover:translate-x-0.5">
                    →
                </span>
            </div>
        </a>
    );
}

export default function ReportsPublicationsSection() {
    const reports = [
        {
            year: '2023',
            title: 'Rapport annuel d’activité',
            meta: 'PDF · 1.8MB',
            tone: 'beta',
        },
        {
            year: '2022',
            title: 'Rapport de gouvernance',
            meta: 'PDF · 1.1MB',
            tone: 'neutral',
        },
        {
            year: '2021',
            title: 'Bilan financier',
            meta: 'PDF · 980KB',
            tone: 'gold',
        },
    ];

    return (
        <section className="py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                            Rapports &amp; Publications
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-so-gray sm:text-base">
                            Accédez aux documents clés et aux rapports publics
                            (activité, gouvernance, conformité…).
                        </p>
                    </div>

                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-full bg-alpha px-4 py-2 text-sm font-extrabold text-beta-white shadow-sm ring-1 ring-alpha/10 transition hover:bg-alpha/90"
                    >
                        Tout voir
                    </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                    {['Rapports', 'Gouvernance', 'Conformité', 'Financier'].map(
                        (label) => (
                            <span
                                key={label}
                                className="inline-flex items-center rounded-full bg-beta-blue/50 px-3 py-1 text-xs font-extrabold tracking-wide text-alpha ring-1 ring-alpha/10"
                            >
                                {label}
                            </span>
                        ),
                    )}
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reports.map((report) => (
                        <ReportCard key={report.title} {...report} />
                    ))}
                </div>
            </div>
        </section>
    );
}
