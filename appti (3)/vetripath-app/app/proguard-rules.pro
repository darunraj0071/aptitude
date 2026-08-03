# ==============================================================================
# VetriPath ProGuard / R8 Rules
# ==============================================================================

# 1. Jetpack Compose Rules
-keepclassmembers class * extends androidx.compose.ui.node.Owner { *; }
-keepclassmembers class * implements androidx.compose.runtime.RecomposeScope { *; }
-keepclassmembers class androidx.compose.foundation.layout.** { *; }

# 2. AndroidX Biometrics Rules
-keep class androidx.biometric.** { *; }
-keepclassmembers class androidx.biometric.** { *; }

# 3. Android WebKit & WebView Rules
-keepclassmembers class * extends android.webkit.WebView { *; }
-keepclassmembers class android.webkit.WebSettings { *; }
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# 4. Kotlin Coroutines & Serialization Rules
-keepattributes *Annotation*,Signature,InnerClasses,EnclosingMethod
-keepclassmembers class kotlinx.coroutines.** { *; }
-keep class kotlinx.serialization.** { *; }
-keepclassmembers class kotlinx.serialization.** { *; }

# 5. AndroidX Lifecycle & Navigation Rules
-keep class androidx.lifecycle.** { *; }
-keep class androidx.navigation.** { *; }
