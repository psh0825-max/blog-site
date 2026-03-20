export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© 2026 LightOn Plus Lab</p>
          <a
            href="mailto:support@lightonpluslab.com"
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            support@lightonpluslab.com
          </a>
        </div>
      </div>
    </footer>
  );
}
