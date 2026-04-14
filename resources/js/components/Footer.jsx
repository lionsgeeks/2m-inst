import { Link } from '@inertiajs/react';
import { Instagram, Mail, Phone, Share2 } from 'lucide-react';

const footerNav = [
    { label: 'Le Groupe', href: '/le-groupe' },
    { label: 'Nos Chaines', href: '/nos-chaines' },
    { label: 'Publicité', href: '/publicite' },
    { label: "Appels d'offres", href: '/appels-offres' },
];

const footerInfo = [
    { label: 'Communiqués', href: '/communiques' },
    { label: 'Rapports Annuels', href: '/rapports-annuels' },
    { label: 'Carrières', href: '/carrieres' },
    { label: 'Contact', href: '/contact' },
];

export default function Footer() {
    return (
        <footer className="bg-alpha-blue text-alpha-white">
            <div className="mx-auto max-w-7xl px-4 py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="flex items-center gap-3">
                            <img
                                src="/assets/logo.png"
                                alt="2M Groupe SOREAD"
                                className="h-10 w-auto shrink-0 rounded-md object-contain"
                            />
                            {/* <div className="leading-tight">
                                <div className="text-sm font-extrabold tracking-wide">
                                    2M GROUPE
                                </div>
                                <div className="-mt-0.5 text-[11px] font-semibold tracking-[0.22em] opacity-80">
                                    SOREAD
                                </div>
                            </div> */}
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-alpha-white/80">
                            Premier groupe audiovisuel au Maroc, engagé pour
                            l&apos;excellence et le service public depuis 1989.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="#"
                                aria-label="Partager"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-beta-white/10 text-alpha-white transition hover:bg-beta-white/15"
                            >
                                <Share2 className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-beta-white/10 text-alpha-white transition hover:bg-beta-white/15"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wide">
                            Navigation
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm">
                            {footerNav.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-alpha-white/80 transition hover:text-beta-white"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wide">
                            Informations
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm">
                            {footerInfo.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-alpha-white/80 transition hover:text-beta-white"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wide">
                            Siège Social
                        </h3>
                        <p className="mt-5 text-sm leading-6 text-alpha-white/80">
                            Km 7,3 Route de Rabat, Aïn Sebaâ, Casablanca, Maroc
                        </p>

                        <div className="mt-5 space-y-3 text-sm">
                            <a
                                href="tel:+2120522678000"
                                className="flex items-center gap-3 text-alpha-white/80 transition hover:text-beta-white"
                            >
                                <Phone className="h-4 w-4" />
                                <span>+212 (0) 52 267 80 00</span>
                            </a>
                            <a
                                href="mailto:contact@2m.ma"
                                className="flex items-center gap-3 text-alpha-white/80 transition hover:text-beta-white"
                            >
                                <Mail className="h-4 w-4" />
                                <span>contact@2m.ma</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6">
                    <div className="flex flex-col gap-3 text-xs text-alpha-white/70 md:flex-row md:items-center md:justify-between">
                        <div>© {new Date().getFullYear()} SOREAD 2M. Tous droits réservés.</div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            <Link
                                href="/mentions-legales"
                                className="transition hover:text-beta-white"
                            >
                                Mentions Légales
                            </Link>
                            <Link
                                href="/politique-confidentialite"
                                className="transition hover:text-beta-white"
                            >
                                Politique de Confidentialité
                            </Link>
                            <Link
                                href="/cookies"
                                className="transition hover:text-beta-white"
                            >
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

