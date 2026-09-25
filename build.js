const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');

const presets = [['@babel/preset-react', { runtime: 'classic' }]];
const srcDir = path.join(__dirname, 'src');
// Shown in the footer as "Last updated · <Month YYYY>".
const buildDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

for (const file of fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'))) {
  const src = fs.readFileSync(path.join(srcDir, file), 'utf8');
  let { code } = babel.transformSync(src, { presets, filename: file });
  const out = file.replace('.jsx', '.js');
  if (file === 'data.jsx') code += `\nwindow.BUILD_DATE = ${JSON.stringify(buildDate)};\n`;
  fs.writeFileSync(path.join(__dirname, out), code);
  console.log(`src/${file} → ${out}`);
}
