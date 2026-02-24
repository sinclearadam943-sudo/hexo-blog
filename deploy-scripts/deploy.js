const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 检查是否有配置文件
const configPath = path.join(__dirname, 'config.json');
let config = {};

if (fs.existsSync(configPath)) {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} else {
  console.warn('配置文件不存在，使用默认值');
}

// 获取提交消息
const commitMessage = process.argv[2] || config.defaultCommitMessage || 'Auto deploy from OpenClaw';

try {
  console.log('🔍 检查代码状态...');
  execSync('git status', { stdio: 'inherit' });

  console.log('➕ 添加变更...');
  execSync('git add .', { stdio: 'inherit' });

  console.log(`📝 提交: ${commitMessage}`);
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

  console.log('🚀 推送到远程仓库...');
  execSync(`git push origin ${config.branch || 'main'}`, { stdio: 'inherit' });

  console.log('✅ 部署成功！');
  
  if (config.vercelAutoDeploy) {
    console.log('🕐 等待 Vercel 自动部署...');
    setTimeout(() => {
      try {
        console.log('📊 检查部署状态...');
        const deployments = execSync('vercel ls', { encoding: 'utf8' });
        console.log(deployments);
      } catch (error) {
        console.warn('⚠️  检查部署状态失败');
      }
    }, config.deployWaitTime || 10000);
  }

} catch (error) {
  console.error('❌ 部署失败:', error.message);
  
  if (error.stderr) {
    console.error(error.stderr);
  }
  
  process.exit(1);
}
