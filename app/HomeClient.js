'use client'

import Link from 'next/link'

export default function HomeClient({ posts }) {
  return (
    <div className="container">
      <header>
        <h1>道德经博客</h1>
        <p className="subtitle">探寻道家的智慧</p>
      </header>

      <main>
        <div className="posts">
          {posts.map(post => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="post-card">
              <h2>{post.title}</h2>
              <p className="post-meta">阅读更多 →</p>
            </Link>
          ))}
        </div>
      </main>

      <footer>
        <p>© 2026 道德经博客. 基于 Next.js 和 Vercel 部署.</p>
      </footer>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem 0;
          border-bottom: 1px solid #eaeaea;
        }

        header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .subtitle {
          color: #666;
          font-size: 1.1rem;
        }

        .posts {
          display: grid;
          gap: 1.5rem;
        }

        .post-card {
          padding: 1.5rem;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s;
        }

        .post-card:hover {
          border-color: #666;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .post-card h2 {
          margin: 0 0 0.5rem 0;
          font-size: 1.5rem;
        }

        .post-meta {
          color: #666;
          margin: 0;
        }

        footer {
          text-align: center;
          margin-top: 4rem;
          padding: 2rem 0;
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
