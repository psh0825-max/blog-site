import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const basePath = '/blog-site';

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 h-16">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white tracking-tight hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          LightOn<span className="text-primary-600 dark:text-primary-400">+</span> Blog
        </Link>

        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            홈
          </Link>
          <a
            href="https://lightonpluslab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            LightOn Plus Lab
          </a>
          <a
            href="https://github.com/psh0825-max"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
