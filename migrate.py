import re

with open('app.js', 'r') as f:
    js = f.read()

# Match the views object
views_match = re.search(r'const views = \{(.*?)\n\};', js, re.DOTALL)
if views_match:
    views_content = views_match.group(1)
    
    # Split into individual view functions
    # Using regex to find key: () => `...`
    # or key: () => { ... return `...` }
    
    views = []
    
    # Simple extraction is hard with regex because of nested backticks and braces.
    # Let's just manually write the new HTML file to avoid regex parsing issues.
