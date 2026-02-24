# 浩哥的博客 💼

基于 Hexo + Vercel 的静态博客，支持 GitHub 自动同步和 Vercel 自动部署。

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动本地服务器
hexo server

# 访问 http://localhost:4000
```

### 常用命令

```bash
# 创建新文章
hexo new post "文章标题"

# 生成静态文件
hexo generate

# 生成并预览
hexo generate --watch

# 清理缓存
hexo clean
```

## 📁 目录结构

```
hexo-blog/
├── source/          # 博客文章和资源
│   ├── _posts/      # 文章目录
│   ├── about/       # 页面
│   └── images/      # 图片资源
├── themes/          # 主题
├── scaffolds/       # 文章模板
├── _config.yml      # 站点配置
└── package.json     # 依赖配置
```

## 🔄 自动部署流程

1. 推送代码到 GitHub
2. Vercel 自动检测变更
3. 自动构建并部署

## 📝 写文章

文章位于 `source/_posts/` 目录，使用 Markdown 格式：

```markdown
---
title: 文章标题
date: 2026-02-24 15:00:00
tags: [标签 1, 标签 2]
categories: 分类
---

这里是文章内容...
```

## 🎨 主题

当前使用默认主题，可更换为：
- [hexo-theme-keep](https://github.com/XPoet/hexo-theme-keep)
- [hexo-theme-butterfly](https://github.com/jerryc127/hexo-theme-butterfly)
- [hexo-theme-next](https://github.com/next-theme/hexo-theme-next)

更换主题：
```bash
git clone <主题仓库> themes/<主题名>
# 修改 _config.yml 中的 theme 配置
```

## 🔗 链接

- 博客地址：https://hao-blog.vercel.app
- GitHub: https://github.com/sinclearadam943-sudo/hexo-blog

---

**Built with ❤️ using Hexo + Vercel**
