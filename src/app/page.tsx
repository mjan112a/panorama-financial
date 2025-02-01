import { HeroSection } from "@/components/HeroSection";
import { ToolExplained } from "@/components/ToolExplained";
import { BlogPreview } from "@/components/BlogPreview";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";

export default async function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ToolExplained />
      <BlogPreview />
      <Testimonials />
      <CallToAction />
      <FAQ />
    </main>
  );
}
