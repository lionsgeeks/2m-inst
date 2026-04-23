import { useMemo, useState } from 'react';

function ChevronDown({ className = '' }) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={['h-5 w-5', className].join(' ')}
        >
            <path
                fill="currentColor"
                d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41Z"
            />
        </svg>
    );
}

function FlagIcon({ className = '' }) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={['h-5 w-5', className].join(' ')}
        >
            <path
                fill="currentColor"
                d="M14 6 13 4H5v17h2v-7h6l1 2h6V6h-6Zm4 8h-4.76l-1-2H7V6h4.76l1 2H18v6Z"
            />
        </svg>
    );
}

function AccordionItem({ id, title, description, isOpen, onToggle }) {
    return (
        <div className="rounded-xl bg-beta-white/10 ring-1 ring-beta-white/10">
            <button
                type="button"
                onClick={() => onToggle(id)}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
            >
                <div className="min-w-0">
                    <div className="text-sm font-extrabold tracking-tight text-beta-white">
                        {title}
                    </div>
                    <div className="mt-1 line-clamp-1 text-xs text-alpha-white/70">
                        {description}
                    </div>
                </div>
                <ChevronDown
                    className={[
                        'shrink-0 text-alpha-white/80 transition',
                        isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                />
            </button>

            {isOpen ? (
                <div className="px-4 pb-4 text-sm leading-6 text-alpha-white/80">
                    {description}
                </div>
            ) : null}
        </div>
    );
}

export default function EthicsComplianceSection() {
    const items = useMemo(
        () => [
            {
                id: 'code-ethique',
                title: 'Code d’éthique',
                description:
                    'Référentiel de valeurs et de comportements attendus, garantissant l’intégrité, l’impartialité et le respect des règles.',
            },
            {
                id: 'anti-corruption',
                title: 'Lutte contre la corruption',
                description:
                    'Mesures de prévention, de détection et de traitement, avec une approche fondée sur l’évaluation des risques.',
            },
            {
                id: 'conflits-interets',
                title: 'Gestion des conflits d’intérêts',
                description:
                    'Dispositif d’identification et de déclaration des situations pouvant affecter l’objectivité des décisions.',
            },
        ],
        [],
    );

    const [openId, setOpenId] = useState(items[0]?.id);

    return (
        <section className="relative overflow-hidden bg-alpha-blue py-14 sm:py-18">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-alpha-blue/40 via-alpha-blue to-alpha-blue" />
                <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-beta/15 blur-3xl" />
                <div className="absolute -right-28 -bottom-28 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[22px_22px] opacity-70" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-beta-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-beta-white ring-1 ring-beta-white/15">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                            Gouvernance responsable
                        </div>
                        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-beta-white sm:text-3xl">
                            Éthique &amp; Conformité
                        </h2>
                        <p className="mt-4 text-sm leading-6 text-alpha-white/75 sm:text-base">
                            Un cadre clair pour protéger l’organisation,
                            renforcer la transparence et instaurer une culture
                            de conformité.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {[
                                { label: 'Intégrité', tone: 'bg-beta' },
                                { label: 'Transparence', tone: 'bg-gold' },
                                {
                                    label: 'Conformité',
                                    tone: 'bg-beta-white/10',
                                },
                                {
                                    label: 'Prévention',
                                    tone: 'bg-beta-white/10',
                                },
                            ].map((pill) => (
                                <div
                                    key={pill.label}
                                    className={[
                                        'inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-extrabold tracking-tight text-beta-white ring-1 ring-beta-white/10',
                                        pill.tone,
                                    ].join(' ')}
                                >
                                    {pill.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl bg-beta-white/10 p-5 shadow-2xl ring-1 shadow-so-black/20 ring-beta-white/10 sm:p-6">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-beta text-beta-white ring-1 ring-beta-white/10">
                                <FlagIcon />
                            </div>
                            <div className="min-w-0">
                                <div className="text-sm font-extrabold tracking-tight text-beta-white">
                                    Politiques &amp; dispositifs
                                </div>
                                <div className="text-xs text-alpha-white/70">
                                    Cliquez pour développer
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 space-y-3">
                            {items.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    {...item}
                                    isOpen={openId === item.id}
                                    onToggle={(id) =>
                                        setOpenId((current) =>
                                            current === id ? null : id,
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
