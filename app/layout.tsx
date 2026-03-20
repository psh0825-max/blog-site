import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'LightOn+ Blog — 기술 블로그',
    template: '%s | LightOn+ Blog',
  },
  description:
    'LightOn Plus Lab 기술 블로그. AI, 바이브 코딩, 앱 개발에 대한 최신 인사이트를 공유합니다.',
  metadataBase: new URL('https://psh0825-max.github.io/blog-site'),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: 'LightOn+ Blog',
    title: 'LightOn+ Blog — 기술 블로그',
    description:
      'LightOn Plus Lab 기술 블로그. AI, 바이브 코딩, 앱 개발에 대한 최신 인사이트를 공유합니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
