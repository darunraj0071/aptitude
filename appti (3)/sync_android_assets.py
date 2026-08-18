import sys, os, shutil
sys.stdout.reconfigure(encoding='utf-8')

src_dir = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti'
dest_dir = 'c:/Users/sanja/Downloads/aptitude/appti (3)/vetripath-app/app/src/main/assets/appti'

print("=" * 65)
print("🔄 SYNCING ALL LATEST WEB APP & QUESTION FILES TO ANDROID ASSETS")
print("=" * 65)

# Sync all files from appti into android assets (excluding .apk files to avoid bloat)
copied_files = 0
for root, dirs, files in os.walk(src_dir):
    rel_path = os.path.relpath(root, src_dir)
    target_subdir = os.path.join(dest_dir, rel_path) if rel_path != '.' else dest_dir
    os.makedirs(target_subdir, exist_ok=True)
    
    for f in files:
        if f.endswith('.apk'):
            continue
        src_file = os.path.join(root, f)
        dest_file = os.path.join(target_subdir, f)
        
        shutil.copy2(src_file, dest_file)
        copied_files += 1

print(f"✅ Successfully synced {copied_files} updated files into Android Assets!")
print("=" * 65)
