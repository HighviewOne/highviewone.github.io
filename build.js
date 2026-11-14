const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const presets = [['@babel/preset-react', { runtime: 'classic' }]];
const srcDir = path.join(__dirname, 'src');
// Shown in the footer as "Last updated · <Month YYYY>".
const buildDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

// 1. Compile src/*.jsx → root *.js
for (const file of fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'))) {
  const src = fs.readFileSync(path.join(srcDir, file), 'utf8');
  let { code } = babel.transformSync(src, { presets, filename: file });
  const out = file.replace('.jsx', '.js');
  if (file === 'data.jsx') code += `\nwindow.BUILD_DATE = ${JSON.stringify(buildDate)};\n`;
  fs.writeFileSync(path.join(__dirname, out), code);
  console.log(`src/${file} → ${out}`);
}

// 2. Pre-render the page into index.html so it has real content before (and without) JS.
//    The npm react/react-dom versions must match vendor/ (18.3.1) or hydration can break.
const React = require('react');
const { renderToString } = require('react-dom/server');
const vendorVersion = fs.readFileSync(path.join(__dirname, 'vendor/react.production.min.js'), 'utf8')
  .match(/18\.\d+\.\d+/)[0];
if (React.version !== vendorVersion) {
  throw new Error(`npm react ${React.version} != vendored ${vendorVersion}; align them first`);
}

const sandbox = { React, console };
sandbox.window = sandbox; // the browser scripts read and write globals via window.*
vm.createContext(sandbox);
for (const f of ['data.js', 'components.js', 'app.js']) {
  vm.runInContext(fs.readFileSync(path.join(__dirname, f), 'utf8'), sandbox, { filename: f });
}
const html = renderToString(React.createElement(sandbox.App));

const indexPath = path.join(__dirname, 'index.html');
const index = fs.readFileSync(indexPath, 'utf8');
const rootRe = /<div id="root">[\s\S]*?<\/div>(?=\n<\/main>)/;
if (!rootRe.test(index)) throw new Error('index.html: <div id="root">…</div> right before </main> not found');
fs.writeFileSync(indexPath, index.replace(rootRe, () => `<div id="root">${html}</div>`));
console.log(`pre-rendered App → index.html (${(html.length / 1024).toFixed(1)} KB)`);
