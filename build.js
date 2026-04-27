const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');

const presets = [['@babel/preset-react', { runtime: 'classic' }]];
const srcDir = path.join(__dirname, 'src');

for (const file of fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'))) {
  const src = fs.readFileSync(path.join(srcDir, file), 'utf8');
  const { code } = babel.transformSync(src, { presets, filename: file });
  const out = file.replace('.jsx', '.js');
  fs.writeFileSync(path.join(__dirname, out), code);
  console.log(`src/${file} → ${out}`);
}
