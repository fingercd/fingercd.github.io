import "./globals.css";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export default function GlobalNotFound() {
  const title = "页面没有找到 / Page not found · Zitong Qi";
  const description =
    "The requested page could not be found. Return to Zitong Qi’s Chinese or English portfolio.";

  return (
    <html lang="zh-CN">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Zitong Qi Portfolio" />
        <meta property="og:image" content={absoluteUrl("/images/og-card.png")} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteUrl("/images/og-card.png")} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="global-not-found-page">
        <a className="skip-link" href="#main-content">
          跳到主要内容 / Skip to content
        </a>
        <header className="error-header">
          <div className="container error-header-inner">
            <Link className="brand" href="/zh/" aria-label="Zitong Qi 中文首页">
              <span className="brand-mark" aria-hidden="true">
                ZQ
              </span>
              <span className="brand-copy">
                <strong>Zitong Qi</strong>
                <small>Vision · Language · Systems</small>
              </span>
            </Link>
            <nav aria-label="Language home links">
              <Link href="/zh/" hrefLang="zh-CN">
                中文首页
              </Link>
              <Link href="/en/" hrefLang="en">
                English home
              </Link>
            </nav>
          </div>
        </header>
        <main id="main-content" className="not-found">
          <div className="container not-found-inner">
            <p className="not-found-code">404</p>
            <h1>页面没有找到 / Page not found</h1>
            <p>链接可能已经更新，或这项内容尚未公开。</p>
            <p>The link may have changed, or this content is not public yet.</p>
            <div className="not-found-actions">
              <Link className="button button-primary" href="/zh/">
                返回中文首页
              </Link>
              <Link className="button button-secondary" href="/en/">
                English home
              </Link>
            </div>
          </div>
        </main>
        <footer className="error-footer">
          <div className="container error-footer-inner">
            <span>© 2026 Zitong Qi</span>
            <span>Computer Vision · Multimodal Learning</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
