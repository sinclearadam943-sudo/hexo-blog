# 道德经博客

一个关于道家哲学和道德经的简单博客，使用 Next.js 构建，部署在 Vercel 上。

## 特性

- 📝 使用 Markdown 撰写文章
- 🚀 基于 Next.js 15，快速响应
- 🎨 简洁优雅的界面
- 📱 移动端友好
- ♻️ Vercel 自动部署

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

访问 http://localhost:3000 查看博客。

## 添加新文章

1. 在 `posts/` 目录下创建新的 `.md` 文件
2. 文件内容遵循 Markdown 格式
3. 可选：在文件开头添加 frontmatter 元数据

示例：

```markdown
---
title: 文章标题
date: 2026-02-24
---

文章内容...
```

## 部署到 Vercel

### 首次部署

1. 将代码推送到 GitHub
2. 在 Vercel 创建新项目
3. 导入 GitHub 仓库
4. Vercel 会自动检测 Next.js 并配置
5. 点击 Deploy 即可

### 自动更新

推送新代码到 GitHub 后，Vercel 会自动：
- 重新构建项目
- 部署新版本
- 更新博客内容

### 环境变量（可选）

如果需要，在 Vercel 项目设置中添加环境变量：
- `NEXT_PUBLIC_SITE_URL`: 博客 URL

## 项目结构

```
dao-blog/
├── app/
│   ├── globals.css          # 全局样式
│   ├── layout.js           # 根布局
│   ├── page.js            # 首页（文章列表）
│   └── posts/
│       └── [slug]/page.js # 文章详情页
├── posts/                 # Markdown 文章目录
│   └── dao-de-jing.md    # 道德经
└── public/                # 静态资源
```

## 技术栈

- **Next.js 15** - React 框架
- **React 19** - UI 库
- **Marked** - Markdown 解析
- **Gray Matter** - Frontmatter 解析
- **Vercel** - 部署平台

## 许可

ISC

---

**祝阅读愉快！** 📚
