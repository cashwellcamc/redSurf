import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchArticleBySlug, incrementViewCount } from '../lib/payload.js';
import './BlogPage.css';

const SITE = 'https://redsurfdigital.com';

function setMeta(selector, attr, value) {
  let el = document.querySelector(selector);
  if (!el) { el = document.createElement('meta'); document.head.appendChild(el); }
  el.setAttribute(attr, value);
}

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.735-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

function buildShareUrl(platform, title, slug) {
  const url  = encodeURIComponent(`${SITE}/blog/${slug}`);
  const text = encodeURIComponent(title);
  if (platform === 'x')        return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  if (platform === 'linkedin') return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}

function openShare(href) {
  window.open(href, '_blank', 'width=600,height=420,noopener,noreferrer');
}

function RichTextRenderer({ content }) {
  if (!content) return null;
  if (typeof content === 'string') {
    return <div className="blog-article-body-content" dangerouslySetInnerHTML={{ __html: content }} />;
  }
  const nodes = content.root?.children ?? [];
  return (
    <div className="blog-article-body-content">
      {nodes.map((node, i) => {
        if (node.type === 'paragraph') {
          const text = (node.children ?? []).map(c => c.text).join('');
          return <p key={i}>{text}</p>;
        }
        if (node.type === 'heading') {
          const text = (node.children ?? []).map(c => c.text).join('');
          const Tag = `h${node.tag?.replace('h','') || 3}`;
          return <Tag key={i}>{text}</Tag>;
        }
        if (node.type === 'list') {
          const Tag = node.listType === 'number' ? 'ol' : 'ul';
          return (
            <Tag key={i}>
              {(node.children ?? []).map((li, j) => (
                <li key={j}>{(li.children ?? []).map(c => c.text).join('')}</li>
              ))}
            </Tag>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticleBySlug(slug)
      .then(data => {
        setArticle(data);
        setLoading(false);
        if (data?.id) incrementViewCount(data.id);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    if (!article) return;
    const url   = `${SITE}/blog/${article.slug}`;
    const title = `${article.title} | Red Surf Digital`;
    document.title = title;
    setMeta('meta[name="description"]',        'content', article.excerpt || '');
    setMeta('meta[property="og:title"]',       'content', title);
    setMeta('meta[property="og:url"]',         'content', url);
    setMeta('meta[property="og:type"]',        'content', 'article');
    if (article.mainImage?.url) {
      setMeta('meta[property="og:image"]',     'content', article.mainImage.url);
      setMeta('meta[name="twitter:card"]',     'content', 'summary_large_image');
      setMeta('meta[name="twitter:image"]',    'content', article.mainImage.url);
    }
    return () => {
      document.title = 'Red Surf Digital | Outdoor Industry Digital Engineering';
    };
  }, [article]);

  return (
    <div className="blog-shell">
      <header className="blog-header">
        <Link to="/blog" className="blog-back">&#8592; Articles</Link>
        <div className="blog-wordmark">
          <span className="blog-wordmark-main">Red<span>Surf</span> Digital</span>
          <span className="blog-wordmark-sub">Articles &amp; Insights</span>
        </div>
      </header>

      <main className="blog-main blog-main--article">
        {loading && <div className="blog-loading" aria-live="polite">Loading…</div>}

        {!loading && !article && (
          <div className="blog-empty" role="alert">
            Article not found. <Link to="/blog">← Back to articles</Link>
          </div>
        )}

        {article && (
          <article className="blog-article" aria-labelledby="article-title">
            <div className="blog-article-meta">
              {article.publishedAt && (
                <time className="blog-article-date" dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
              )}
            </div>

            <div className="article-chrome">
              <div className="article-chrome-header" aria-hidden="true">
                <span className="blog-code-dots">
                  <span /><span /><span />
                </span>
                <span className="article-chrome-tab">{article.slug}.md</span>
              </div>
              <div className="article-chrome-body">
                <h1 id="article-title" className="blog-article-title page-title">{article.title}</h1>

                {article.mainImage?.url && (
                  <div className="blog-article-image">
                    <img src={article.mainImage.url} alt={article.mainImage.alt || article.title} />
                  </div>
                )}

                <div className="blog-share" role="group" aria-label="Share this article">
                  <span className="blog-share-label" aria-hidden="true">Share</span>
                  <button
                    type="button"
                    className="blog-share-btn"
                    onClick={() => openShare(buildShareUrl('x', article.title, article.slug))}
                    aria-label="Share on X (Twitter)"
                  >
                    <XIcon /> X
                  </button>
                  <button
                    type="button"
                    className="blog-share-btn"
                    onClick={() => openShare(buildShareUrl('linkedin', article.title, article.slug))}
                    aria-label="Share on LinkedIn"
                  >
                    <LinkedInIcon /> LinkedIn
                  </button>
                </div>

                <RichTextRenderer content={article.content} />

                {article.tags?.length > 0 && (
                  <p className="blog-tags">{article.tags.map(t => `#${t}`).join(' ')}</p>
                )}

                <div className="blog-byline">
                  <div className="blog-byline-content">
                    <div className="blog-byline-name">Red Surf Digital</div>
                    <p className="blog-byline-bio">
                      Digital engineering agency for the outdoor industry — eCommerce platforms,
                      headless CMS, brand sites, and performance engineering for brands that move.
                    </p>
                  </div>
                  <Link className="blog-byline-cta" to="/contact">Get in touch <span aria-hidden="true">→</span></Link>
                </div>
              </div>
            </div>
          </article>
        )}
      </main>
    </div>
  );
}
