import { ElegantHero } from "@/components/elegant-hero";
import { EnhancedLinksHub } from "@/components/enhanced-links-hub";
import { BadgesSection } from "@/components/badges-section";
import { CanvasSOPIconsSection } from "@/components/canvas-sop-icons-section";
import { CanvasDemoSection } from "@/components/canvas-demo-section";
import { DSICollaborationSection } from "@/components/dsi-collaboration-section";
import { BookingCalendarSection } from "@/components/booking-calendar-section";
import { CanvasDataSection } from "@/components/canvas-data-section";
import { CanvasModuleSection } from "@/components/canvas-module-section";
import { NewsletterWorkflowSection } from "@/components/newsletter-workflow-section";
import { TeamSection } from "@/components/team-section";
import { AboutPosterSection } from "@/components/about-poster-section";
import { Footer } from "@/components/footer";
import { WavyBackgroundDemo } from "@/components/wavehead";
export default function Home() {
  return (
    <div className="min-h-screen">
      <ElegantHero />
      <WavyBackgroundDemo />
      <div id="overview" className="bg-gray-50">
        <main>
          <EnhancedLinksHub />
          <BadgesSection />
          <CanvasSOPIconsSection />
          <CanvasDemoSection />
          <DSICollaborationSection />
          <BookingCalendarSection />
          <CanvasDataSection />
          <CanvasModuleSection />
          <NewsletterWorkflowSection />
          <TeamSection />
          <AboutPosterSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
