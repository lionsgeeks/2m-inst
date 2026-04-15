import AppLayout from '@/layouts/app-layout';
import EsgHero from '@/pages/user/esg/partials/EsgHero';
import EsgStats from '@/pages/user/esg/partials/EsgStats';
import EsgPillars from '@/pages/user/esg/partials/EsgPillars';
import EsgInnovationSpotlight from '@/pages/user/esg/partials/EsgInnovationSpotlight';
import EsgSocialActions from '@/pages/user/esg/partials/EsgSocialActions';
import EsgFeaturedProject from '@/pages/user/esg/partials/EsgFeaturedProject';
import EsgResources from '@/pages/user/esg/partials/EsgResources';

export default function Index() {
    return (
        <div className="bg-beta-white">
            <EsgHero />
            <EsgStats />
            <EsgPillars />
            <EsgInnovationSpotlight />
            <EsgSocialActions />
            <EsgFeaturedProject />
            <EsgResources />
        </div>
    );
}

Index.layout = (page) => <AppLayout>{page}</AppLayout>;

