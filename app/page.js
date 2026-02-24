import fs from 'fs'
import path from 'path'
import HomeClient from './HomeClient'

export default function Home() {
  const postsDir = path.join(process.cwd(), 'posts')
  const files = fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md'))
    .sort()

  const posts = files.map(file => {
    const slug = file.replace(/\.md$/, '')
    const title = fs.readFileSync(path.join(postsDir, file), 'utf-8')
      .split('\n')[0]
      .replace(/^#\s+/, '')
    return { slug, title }
  })

  return <HomeClient posts={posts} />
}
