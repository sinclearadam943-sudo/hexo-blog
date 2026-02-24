const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 获取主题和可选的标题
const theme = process.argv[2];
const title = process.argv[3] || theme;

if (!theme) {
  console.error('❌ 请提供主题作为参数');
  console.log('📝 使用方法: node create-post.js 主题 [可选标题]');
  process.exit(1);
}

// 生成文章内容
const postContent = `---
title: ${title}
date: ${new Date().toISOString().slice(0, 19).replace('T', ' ')}
tags: [${theme}, 自动化]
categories: 自动化
description: 关于${theme}的自动化生成文章
---

# ${title}

## 1. 简介

这是一篇关于${theme}的自动化生成文章。

## 2. 内容

### 2.1 主题概述

${theme}是一个非常重要的主题，在各个领域都有广泛的应用。

### 2.2 主要内容

#### 2.2.1 定义

${theme}可以被定义为...

#### 2.2.2 特点

${theme}具有以下特点：
- 特点一
- 特点二
- 特点三

### 2.3 应用领域

${theme}在以下领域有重要应用：
1. 领域一
2. 领域二
3. 领域三

## 3. 总结

总的来说，${theme}是一个值得深入研究的主题。

---

**自动化生成**
- 生成时间: ${new Date().toLocaleString('zh-CN')}
- 自动部署: ✅
`;

// 生成文件名
const fileName = `${theme}.md`;
const filePath = path.join(__dirname, 'source', '_posts', fileName);

// 检查是否已存在同名文件
if (fs.existsSync(filePath)) {
  console.error(`❌ 文件 ${fileName} 已存在`);
  process.exit(1);
}

try {
  // 写入文件
  fs.writeFileSync(filePath, postContent, 'utf8');
  console.log(`✅ 文章已创建: ${filePath}`);

  // 部署到 Vercel
  console.log('🚀 开始部署到 Vercel...');
  execSync('npm run vercel-deploy -- "添加文章：' + title + '"', { 
    stdio: 'inherit', 
    cwd: __dirname 
  });

  console.log('🎉 部署成功！');

} catch (error) {
  console.error('❌ 操作失败:', error.message);
  
  // 清理创建的文件
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log('📦 已清理创建的文件');
  }
  
  process.exit(1);
}
