
from PIL import Image
import os
import glob

directory = 'apps/interpracsys-web/public/logosClientes'
extensions = ['*.png', '*.jpg', '*.jpeg']

files = []
for ext in extensions:
    files.extend(glob.glob(os.path.join(directory, ext)))

print(f'Found {len(files)} files to convert.')

for file_path in files:
    try:
        img = Image.open(file_path)
        # Convert to RGB if needed (for PNGs with transparency kept as RGBA, WebP supports it, but JPGs might be CMYK etc)
        # WebP supports RGBA.
        
        file_name = os.path.splitext(os.path.basename(file_path))[0]
        new_path = os.path.join(directory, f'{file_name}.webp')
        
        img.save(new_path, 'WEBP', quality=90)
        print(f'Converted {file_path} -> {new_path}')
        
        # Optional: Remove original if successful? 
        # User implies replacement. I will implement delete in a separate step or verify first.
    except Exception as e:
        print(f'Error converting {file_path}: {e}')

