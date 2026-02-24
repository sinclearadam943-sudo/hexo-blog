import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'
import PostClient from './PostClient'

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts')
  const files = fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md'))

  return files.map(file => ({
    slug: file.replace(/\.md$/, '')
  }))
}

export default async function Post({ params }) {
  const { slug } = await params
  const postsDir = path.join(process.cwd(), 'posts')
  const filePath = path.join(postsDir, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const html = marked(content)

  return <PostClient title={data.title || slug} date={data.date} html={html} />
}
