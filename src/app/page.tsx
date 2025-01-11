import { HeroSection } from "@/components/HeroSection";
import { ToolExplained } from "@/components/ToolExplained";
import { VideoContent } from "@/components/VideoContent";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ToolExplained />
      <VideoContent />
      <Testimonials />
      <CallToAction />
      <FAQ />
    </main>
  );
}
