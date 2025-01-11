import { Carousel } from "@/components/ui/carousel";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah T.",
      location: "Austin, TX",
      photo: "/testimonials/sarah.jpg",
      quote: "Thanks to Panorama, I was able to optimize my Medicare benefits and save over $5,000 annually while ensuring I had the coverage I needed.",
    },
    {
      name: "Michael R.",
      location: "Denver, CO",
      photo: "/testimonials/michael.jpg",
      quote: "The long-term care planning gave me peace of mind knowing my family won't be burdened with my future care needs.",
    },
    {
      name: "Emily C.",
      location: "Seattle, WA",
      photo: "/testimonials/emily.jpg",
      quote: "I was able to maximize my Social Security benefits by $800/month thanks to their personalized strategy.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Success Stories: Real Outcomes, Real Peace of Mind
        </h2>
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-800 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}