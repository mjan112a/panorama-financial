export function VideoContent() {
  const videos = [
    {
      title: "Medicare Explained",
      description: "Understand the basics of Medicare and how to maximize your benefits",
      thumbnail: "/videos/medicare-thumb.jpg"
    },
    {
      title: "Long-Term Care Planning",
      description: "Learn how to prepare for future care needs and protect your assets",
      thumbnail: "/videos/long-term-care-thumb.jpg"
    },
    {
      title: "Social Security Maximization",
      description: "Strategies to optimize your Social Security benefits",
      thumbnail: "/videos/social-security-thumb.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Learn More Through Our Video Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/video-library"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Our Video Library
          </a>
        </div>
      </div>
    </section>
  );
}