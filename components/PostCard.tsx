import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block">
        {post.coverImage && (
          <div className="relative aspect-[2/1] mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src={`/blog-site${post.coverImage}`}
              alt={post.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="space-y-2">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
            {post.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 pt-1">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
}
