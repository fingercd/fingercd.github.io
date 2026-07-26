export default function RootRedirectFallback() {
  return (
    <main className="redirect-page">
      <meta httpEquiv="refresh" content="0;url=/zh/" />
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.location.replace("/zh/");',
        }}
      />
      <div className="redirect-card">
        <span className="brand-mark" aria-hidden="true">
          ZQ
        </span>
        <h1>正在进入齐梓桐的个人主页</h1>
        <p>Redirecting to Zitong Qi&apos;s portfolio…</p>
        <a className="button button-primary" href="/zh/">
          继续 / Continue
        </a>
      </div>
    </main>
  );
}
