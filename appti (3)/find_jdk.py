import sys, os, glob
sys.stdout.reconfigure(encoding='utf-8')

search_paths = [
    "C:/Program Files/Android/Android Studio/jbr/bin/java.exe",
    "C:/Program Files/Android/Android Studio/jre/bin/java.exe",
    "C:/Program Files/Java/*/bin/java.exe",
    "C:/Program Files/Eclipse Adoptium/*/bin/java.exe",
    "C:/Program Files/Microsoft/*/bin/java.exe",
    "C:/Users/sanja/AppData/Local/Android/Sdk/*",
    "C:/Users/sanja/AppData/Local/Programs/Android Studio/jbr/bin/java.exe",
    "C:/Users/sanja/.jdks/*/bin/java.exe"
]

print("Searching for Java / JDK installations...")
found_jdk = []
for p in search_paths:
    matches = glob.glob(p)
    if matches:
        for m in matches:
            print(f"Found: {m}")
            found_jdk.append(m)

if not found_jdk:
    print("Searching Program Files...")
    for root, dirs, files in os.walk("C:/Program Files"):
        if 'java.exe' in files:
            print("Found java in:", root)
            found_jdk.append(os.path.join(root, 'java.exe'))
        if len(found_jdk) > 3:
            break
