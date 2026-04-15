import EditorialModelSection from './partials/EditorialModelSection';
import GroupHeroSection from './partials/GroupHeroSection';
import GroupMissionSection from './partials/GroupMissionSection';
import GroupTimelineSection from './partials/GroupTimelineSection';
import PresenceSection from './partials/PresenceSection';
import Vision2025Section from './partials/Vision2025Section';
import GroupQuickLinksSection from './partials/GroupQuickLinksSection';

export default function Group2M() {
    return (
        <div className="min-h-screen bg-beta-white">
            <GroupHeroSection />
            <GroupMissionSection />
            <GroupTimelineSection />
            <PresenceSection />
            <EditorialModelSection />
            <Vision2025Section />
            <GroupQuickLinksSection />
        </div>
    );
}
