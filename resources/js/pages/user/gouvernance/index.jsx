import AppLayout from '@/layouts/app-layout';
import GouvernanceHero from '@/pages/user/gouvernance/partials/GouvernanceHero';
import OrgChartSection from '@/pages/user/gouvernance/partials/OrgChartSection';
import GovernanceInstancesSection from '@/pages/user/gouvernance/partials/GovernanceInstancesSection';
import EthicsComplianceSection from '@/pages/user/gouvernance/partials/EthicsComplianceSection';
import ReportsPublicationsSection from '@/pages/user/gouvernance/partials/ReportsPublicationsSection';
import InternalPoliciesSection from '@/pages/user/gouvernance/partials/InternalPoliciesSection';

export default function Index() {
    return (
        <div className="bg-beta-white">
            <GouvernanceHero />
            <div className="relative">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-alpha/10 to-transparent" />
                <OrgChartSection />
                <div className="pointer-events-none mx-auto max-w-7xl px-4">
                    <div className="h-px bg-linear-to-r from-transparent via-alpha/10 to-transparent" />
                </div>
                <GovernanceInstancesSection />
                <EthicsComplianceSection />
                <ReportsPublicationsSection />
                <InternalPoliciesSection />
            </div>
        </div>
    );
}

Index.layout = (page) => <AppLayout>{page}</AppLayout>;

