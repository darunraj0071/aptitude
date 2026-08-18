import sys, os, subprocess, shutil, glob
sys.stdout.reconfigure(encoding='utf-8')

print("=" * 65)
print("📦 COMPILING UPDATED ANDROID APK WITH LATEST QUESTIONS")
print("=" * 65)

android_studio_jbr = "C:\\Program Files\\Android\\Android Studio\\jbr"
android_sdk = "C:\\Users\\sanja\\AppData\\Local\\Android\\Sdk"

env = os.environ.copy()
env["JAVA_HOME"] = android_studio_jbr
env["ANDROID_HOME"] = android_sdk
env["PATH"] = f"{android_studio_jbr}\\bin;{env.get('PATH', '')}"

project_dir = "c:\\Users\\sanja\\Downloads\\aptitude\\appti (3)\\vetripath-app"

print(f"Using JAVA_HOME: {android_studio_jbr}")
print(f"Using ANDROID_HOME: {android_sdk}")
print("Running Gradle build (assembleDebug)...")

cmd = ["cmd.exe", "/c", "gradlew.bat", "assembleDebug"]
proc = subprocess.run(cmd, cwd=project_dir, env=env, capture_output=True, text=True)

print("Gradle stdout:")
print(proc.stdout[-800:] if len(proc.stdout) > 800 else proc.stdout)

if proc.returncode != 0:
    print("Gradle stderr:")
    print(proc.stderr)
    print(f"❌ Build failed with code {proc.returncode}")
else:
    print("✅ Build Succeeded!")
    
    # Locate generated APK
    apk_pattern = os.path.join(project_dir, "app/build/outputs/apk/**/*.apk")
    apks = glob.glob(apk_pattern, recursive=True)
    print(f"Found APKs: {apks}")
    
    if apks:
        latest_apk = apks[0]
        # Target destination in web app
        dest_1 = "c:/Users/sanja/Downloads/aptitude/appti (3)/appti/VetriPathLearn.apk"
        dest_2 = "c:/Users/sanja/Downloads/aptitude/appti (3)/appti/VetriPath.apk"
        
        shutil.copy2(latest_apk, dest_1)
        shutil.copy2(latest_apk, dest_2)
        
        apk_size_mb = os.path.getsize(dest_1) / (1024 * 1024)
        print(f"🎉 Updated APK successfully copied to {dest_1} ({apk_size_mb:.2f} MB) and {dest_2}!")
    else:
        print("❌ No APK found in output directory")

print("=" * 65)
