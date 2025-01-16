import Link from "next/link";
import { TypeWriter } from "./ui/TypeWriter";

export function HeroSection() {
  const subtitleSentences = [
    "Worried about outliving your money?",
    "Concerned about dying broke?",
    "Anxious about losing your independence?",
    "Fearful of becoming a burden?"
  ];

  return (
    <section className="relative h-[800px] bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute top-4 right-4 space-x-4">
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          Client
        </button>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          Advisors
        </button>
      </div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Learn how to protect your legacy, loved ones, lifestyle, and health
          </h1>
          <TypeWriter sentences={subtitleSentences} speed={60} delay={1500} />
          <div className="flex gap-4">
            <Link
              href="/assessment"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Your Free Initial Consultation
            </Link>
            <Link
              href="/how-it-works"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}