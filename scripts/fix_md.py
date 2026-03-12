import os
import glob

directory = './src/pages/'
files = glob.glob(os.path.join(directory, '*.astro'))

ignore_files = ['index.astro', 'conoceme.astro', 'contacto.astro', 'articulos.astro', '404.astro', 'cookies.astro', 'privacidad.astro', 'aviso-legal.astro']

for file in files:
    filename = os.path.basename(file)
    if filename in ignore_files:
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract title
    title = ''
    if 'const title =' in content:
        title_part = content.split('const title = "')[1]
        title = title_part.split('";')[0]
        
    # Extract description
    desc = ''
    if 'const description =' in content:
        desc_part = content.split('const description = "')[1]
        desc = desc_part.split('";')[0]
        
    # Extract markdown inside prose
    if '<div class="prose">' in content:
        parts = content.split('<div class="prose">')
        if len(parts) > 1:
            raw_markdown_section = parts[1]
            # safely strip the footer layout tags by splitting on the first closing div sequence that matches the layout
            clean_markdown = raw_markdown_section.split('</div>\n    </div>\n  </main>')[0]
            if '</BaseLayout>' in clean_markdown:
                clean_markdown = clean_markdown.split('</BaseLayout>')[0]
                
            # clean up any remaining trailing divs just in case
            if clean_markdown.endswith('</div>\n    </div>\n  </main>\n'):
                clean_markdown = clean_markdown[:-30]
                
            clean_markdown = clean_markdown.strip()
            
            new_content = f"""---
layout: ../layouts/BaseLayout.astro
title: "{title}"
description: "{desc}"
---
<main class="page-content container" style="padding-top: 5rem; padding-bottom: 5rem; max-width: 800px; margin: 0 auto;">
  <h1 style="margin-bottom: 2rem;">{title}</h1>
  <div class="prose">

{clean_markdown}

  </div>
</main>
"""
            new_filename = file.replace('.astro', '.md')
            with open(new_filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
                
            os.remove(file)

print("Python conversion complete.")
