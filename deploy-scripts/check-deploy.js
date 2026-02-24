const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'config.json');
let config = {};

if (fs.existsSync(configPath)) {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
}

try {
  console.log('📊 检查 Vercel 部署状态...');
  
  // 检查 Vercel CLI 是否安装
  try {
    execSync('vercel --version', { stdio: 'ignore' });
  } catch (error) {
    throw new Error('Vercel CLI 未安装，请运行: npm i -g vercel');
  }

  // 获取部署信息
  const deployments = execSync('vercel ls', { encoding: 'utf8' });
  console.log(deployments);

} catch (error) {
  console.error('❌ 检查部署状态失败:', error.message);
  
  if (error.stderr) {
    console.error(error.stderr);
  }
  
  process.exit(1);
}
