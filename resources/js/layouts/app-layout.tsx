import { usePage } from '@inertiajs/react';
import AppSidebarLayout from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem } from '@/types';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    const page = usePage();
    const auth = (page.props as any)?.auth;
    const role = auth?.user?.role;
    const showPublicShell = !auth?.user || role === 'user';

    if (showPublicShell) {
        return (
            <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <main className="min-h-[calc(100vh-4rem)]">{children}</main>
                <Footer />
            </div>
        );
    }

    return (
        <AppSidebarLayout breadcrumbs={breadcrumbs}>{children}</AppSidebarLayout>
    );
}
