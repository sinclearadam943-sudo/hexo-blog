'use client'

import Link from 'next/link'

export default function PostClient({ title, date, html }) {
  return (
    <div className="container">
      <header>
        <Link href="/" className="back-link">← 返回首页</Link>
        <h1>{title}</h1>
        {date && <p className="date">{date}</p>}
      </header>

      <main className="content">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>

      <footer>
        <p>© 2026 道德经博客</p>
      </footer>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 1rem;
          color: #666;
          text-decoration: none;
        }

        .back-link:hover {
          color: #333;
        }

        header {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #eaeaea;
        }

        header h1 {
          font-size: 2.5rem;
          margin: 0.5rem 0;
          color: #333;
        }

        .date {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }

        .content {
          line-height: 1.8;
          color: #333;
        }

        .content h1,
        .content h2,
        .content h3 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .content p {
          margin-bottom: 1rem;
        }

        .content blockquote {
          border-left: 3px solid #666;
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: #666;
          font-style: italic;
        }

        .content code {
          background: #f5f5f5;
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: monospace;
        }

        footer {
          text-align: center;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #eaeaea;
          color: #666;
        }

        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }

          header h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}
