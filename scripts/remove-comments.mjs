import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';
import strip from 'strip-comments';

const projectRoot = path.resolve(process.cwd());
const globs = [
  'src/**/*.{ts,tsx,js,jsx,css}'
];

const files = await fg(globs, { cwd: projectRoot, absolute: true, dot: false, onlyFiles: true });

const jsxCommentRE = /\{\/\*[\s\S]*?\*\/\}/g; // removes JSX comments {/* ... */}
// Match <style jsx>{` ... `}</style> blocks, capturing the inner template content
const styledJsxBlockRE = /<style\s+jsx[^>]*>\{`([\s\S]*?)`\}<\/style>/g;

let changed = 0;
for (const file of files) {
  try {
    const ext = path.extname(file).toLowerCase();
    const original = fs.readFileSync(file, 'utf8');
    let output = original;

    if (ext === '.css') {
      output = strip(output, { language: 'css' });
    } else {
      // Handle JS/TS/JSX/TSX
      output = strip(output, { language: 'js' });
      // Then remove JSX comments explicitly
      output = output.replace(jsxCommentRE, '');

      // Additionally, within styled-jsx template literals, strip CSS comments
      // Use a replacer to process the captured CSS with strip-comments CSS mode
      output = output.replace(styledJsxBlockRE, (_m, cssContent) => {
        const cleanedCss = strip(cssContent, { language: 'css' });
        return `<style jsx>{\`${cleanedCss}\`}</style>`;
      });
    }

    if (output !== original) {
      fs.writeFileSync(file, output, 'utf8');
      changed++;
    }
  } catch (err) {
    console.error(`Failed to process ${file}:`, err?.message || err);
  }
}

console.log(`Comment removal complete. Files changed: ${changed}`);
