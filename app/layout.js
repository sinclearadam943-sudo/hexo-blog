import './globals.css'

export const metadata = {
  title: '道德经博客',
  description: '关于道家哲学和道德经的个人博客',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
