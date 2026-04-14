import { Link, usePage } from '@inertiajs/react';

const navItems = [
    { label: 'Le Groupe', href: '/le-groupe' },
    { label: 'Missions', href: '/missions' },
    { label: 'Histoire', href: '/histoire' },
    { label: 'Organisation', href: '/organisation' },
    { label: 'Vision', href: '/vision' },
];

export default function Navbar() {
    const { url } = usePage();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-beta-white/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
                <Link href="/" className="flex items-center gap-3">
                    {/* <img
                        src="/assets/logo.png"
                        alt="2M Groupe SOREAD"
                        className="h-9 w-9 rounded-md object-cover"
                    /> */}
                    {/* <div className="leading-tight">
                        <div className="text-sm font-extrabold tracking-wide text-alpha">
                            2M GROUPE
                        </div>
                        <div className="-mt-0.5 text-[11px] font-semibold tracking-[0.22em] text-so-gray">
                            SOREAD
                        </div>
                    </div> */}
                </Link>

                <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
                    {navItems.map((item) => {
                        const isActive =
                            url === item.href || url?.startsWith(`${item.href}/`);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={[
                                    'text-sm font-medium transition-colors',
                                    isActive
                                        ? 'text-alpha'
                                        : 'text-so-gray hover:text-alpha',
                                ].join(' ')}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="ml-auto flex items-center gap-3">
                    <div className="hidden items-center gap-1 rounded-md border border-border bg-beta-white px-1 py-1 sm:flex">
                        <button
                            type="button"
                            className="rounded px-2 py-1 text-xs font-semibold text-alpha"
                        >
                            FR
                        </button>
                        <button
                            type="button"
                            className="rounded px-2 py-1 text-xs font-semibold text-so-gray hover:text-alpha"
                        >
                            AR
                        </button>
                    </div>

                    <Link
                        href="/appels-offres"
                        className="inline-flex items-center justify-center rounded-md bg-beta px-4 py-2 text-sm font-semibold text-beta-white shadow-sm transition hover:opacity-90"
                    >
                        Appels d&apos;offres
                    </Link>
                </div>
            </div>
        </header>
    );
}

