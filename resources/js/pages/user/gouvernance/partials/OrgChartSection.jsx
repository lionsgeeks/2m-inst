function OrgNode({ title, subtitle, className = '' }) {
    return (
        <div
            className={[
                'rounded-xl bg-beta-white px-4 py-3 text-center shadow-sm ring-1 ring-alpha/10',
                className,
            ].join(' ')}
        >
            <div className="text-[11px] font-extrabold uppercase tracking-wide text-so-gray">
                {title}
            </div>
            <div className="mt-1 text-sm font-extrabold tracking-tight text-alpha">
                {subtitle}
            </div>
        </div>
    );
}

function Connector() {
    return (
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
            <svg
                className="h-full w-full"
                viewBox="0 0 1200 420"
                aria-hidden="true"
                preserveAspectRatio="none"
            >
                <path
                    d="M600 92 V145 M600 145 H300 M600 145 H900 M300 145 V220 M900 145 V220"
                    fill="none"
                    stroke="rgba(2,6,23,0.14)"
                    strokeWidth="2"
                />
                <path
                    d="M300 220 H140 M300 220 H460 M900 220 H740 M900 220 H1060"
                    fill="none"
                    stroke="rgba(2,6,23,0.14)"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}

export default function OrgChartSection() {
    return (
        <section className="py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                        Organigramme du Groupe
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-so-gray sm:text-base">
                        Une structure claire pour une prise de décision efficace et une
                        exécution cohérente.
                    </p>
                </div>

                <div className="relative mx-auto mt-10 max-w-5xl rounded-2xl bg-linear-to-br from-beta-blue/60 via-beta-white to-beta-white p-6 shadow-sm ring-1 ring-alpha/10 sm:p-10">
                    <Connector />

                    <div className="relative grid gap-6">
                        <div className="mx-auto w-full max-w-sm">
                            <OrgNode
                                title="Présidence"
                                subtitle="Conseil d’Administration"
                                className="ring-2 ring-gold/40 shadow-sm"
                            />
                        </div>

                        <div className="mx-auto w-full max-w-sm">
                            <OrgNode
                                title="Direction"
                                subtitle="Directeur Général"
                                className="bg-beta-white shadow-sm ring-1 ring-alpha/10"
                            />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-3">
                            <OrgNode
                                title="Direction"
                                subtitle="Direction Information"
                            />
                            <OrgNode
                                title="Direction"
                                subtitle="Direction Programmes"
                            />
                            <OrgNode title="Direction" subtitle="Direction Technique" />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-4">
                            <OrgNode
                                title="Support"
                                subtitle="Ressources Humaines"
                            />
                            <OrgNode title="Support" subtitle="Finance &amp; Achat" />
                            <OrgNode title="Support" subtitle="Juridique" />
                            <OrgNode title="Support" subtitle="Communication" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

