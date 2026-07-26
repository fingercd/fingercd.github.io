import Link from "next/link";
import { ArrowLeftIcon } from "@/components/Icons";

export default function LocaleNotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="container not-found-inner">
        <p className="not-found-code">404</p>
        <h1>页面没有找到 / Page not found</h1>
        <p>链接可能已经更新，或这项内容尚未公开。</p>
        <p>The link may have changed, or this content is not public yet.</p>
        <div className="not-found-actions">
          <Link className="button button-primary" href="/zh/">
            <ArrowLeftIcon />
            返回中文首页
          </Link>
          <Link className="button button-secondary" href="/en/">
            English home
          </Link>
        </div>
      </div>
    </main>
  );
}
