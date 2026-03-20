import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
          블로그
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          AI, 바이브 코딩, 앱 개발에 대한 최신 인사이트를 공유합니다.
        </p>
      </section>

      <section className="grid gap-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>

      {posts.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 text-center py-20">
          아직 작성된 글이 없습니다.
        </p>
      )}
    </div>
  );
}
