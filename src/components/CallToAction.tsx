export function CallToAction() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Ready to Take Control of Your Future?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Start your journey towards financial security and peace of mind today. 
          Our experts are ready to guide you every step of the way.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="/consultation"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule Your Free Consultation
          </a>
          <a
            href="/demo"
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}