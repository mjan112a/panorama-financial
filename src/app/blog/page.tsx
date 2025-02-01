import { getSortedPostsData } from '@/lib/markdown';
import { BlogCard } from '@/components/BlogCard';

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial Planning Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice and strategies for securing your financial future and making the most of your retirement planning.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
