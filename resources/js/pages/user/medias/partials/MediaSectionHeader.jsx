export default function MediaSectionHeader() {
    return (
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-alpha/10 bg-alpha-white px-3 py-1 text-[11px] font-semibold tracking-wide text-alpha">
                    <span className="inline-flex h-2 w-2 rounded-full bg-beta" />
                    Chaînes · Radios · Digital
                </div>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-alpha sm:text-3xl">
                    Nos Marques Médias
                </h2>
                <p className="mt-2 text-sm leading-6 text-so-gray sm:text-base">
                    Une présence 360° sur la TV, la radio, le web et les réseaux.
                </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg bg-beta px-4 py-2.5 text-sm font-semibold text-beta-white shadow-sm ring-1 ring-beta/20 transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-beta focus-visible:ring-offset-2 focus-visible:ring-offset-beta-white focus-visible:outline-none"
                >
                    Voir tout
                    <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="ml-2 h-4 w-4"
                    >
                        <path
                            fill="currentColor"
                            d="M11.2 4.2a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l3.3-3.3H3a1 1 0 1 1 0-2h11.1l-3-3a1 1 0 0 1 0-1.4Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

