import HeroSection from './partials/HeroSection';
import MediaSection from './partials/MediaSection';
import NewsSection from './partials/NewsSection';
import QuickAccessSection from './partials/QuickAccessSection';

export default function Home() {
    return (
        <div className="min-h-screen bg-beta-white">
            <HeroSection />
            <MediaSection />
            <QuickAccessSection />
            <NewsSection />
        </div>
    );
}
