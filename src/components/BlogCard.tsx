import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${slug}`} className="block p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </Link>
    </div>
  );
}
