const fs = require('fs');
const path = require('path');
const dir = './src/pages/';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.astro') && !['index.astro', 'conoceme.astro', 'contacto.astro', 'articulos.astro', '404.astro'].includes(file)) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    const titleMatch = content.match(/const title = "(.*?)";/);
    const descMatch = content.match(/const description = "(.*?)";/);
    const title = titleMatch ? titleMatch[1] : '';
    const desc = descMatch ? descMatch[1] : '';

    const proseStart = content.indexOf('<div class="prose">');
    if (proseStart !== -1) {
      const startIdx = proseStart + '<div class="prose">'.length;
      const endMarker = '</div>\\n    </div>\\n  </main>';
      const endIdx = content.lastIndexOf(endMarker);
      
      let rawMarkdown = '';
      if (endIdx !== -1) {
        rawMarkdown = content.substring(startIdx, endIdx);
      } else {
        const parts = content.split('<div class="prose">');
        if (parts.length > 1) {
           let text = parts[1];
           text = text.replace(/<\\/div>\\s*<\\/div>\\s*<\\/main>\\s*<\\/BaseLayout>[\\s\\S]*$/g, '');
           rawMarkdown = text;
        }
      }
      
      rawMarkdown = rawMarkdown.trim();

      const newContent = `---
layout: ../layouts/BaseLayout.astro
title: "${title}"
description: "${desc}"
---
<main class="page-content container" style="padding-top: 5rem; padding-bottom: 5rem; max-width: 800px; margin: 0 auto;">
  <h1 style="margin-bottom: 2rem;">${title}</h1>
  <div class="prose">

${rawMarkdown}

  </div>
</main>
`;
      const newFilePath = path.join(dir, file.replace('.astro', '.md'));
      fs.writeFileSync(newFilePath, newContent);
      fs.unlinkSync(filePath);
    }
  }
});

const manualFile = path.join(dir, 'el-oficio-de-escritor.md');
if(fs.existsSync(manualFile)) {
  let manContent = fs.readFileSync(manualFile, 'utf8');
  manContent = manContent.replace(/{frontmatter\.title}/g, 'El oficio de escritor');
  fs.writeFileSync(manualFile, manContent);
}

console.log('Conversion complete!');
