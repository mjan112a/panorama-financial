import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[800px] bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-6xl font-bold text-gray-900">
            We help you protect your legacy, loved ones, lifestyle, and health
          </h1>
          <p className="text-xl text-gray-600">
            Worried about outliving your money? Dying broke? Losing your independence? Becoming a burden?
          </p>
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