package com.example.vetripathlearn

import android.os.Bundle
import android.view.WindowManager
import android.widget.Toast
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.fragment.app.FragmentActivity
import androidx.biometric.BiometricPrompt
import androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG
import androidx.biometric.BiometricManager.Authenticators.DEVICE_CREDENTIAL
import androidx.core.content.ContextCompat
import com.example.vetripathlearn.theme.VetriPathLearnTheme
import com.example.vetripathlearn.ui.main.MainScreen

/**
 * The main entry point for the VetriPathLearn application.
 *
 * This activity handles the initial splash screen animation, app locking via biometrics/device credentials,
 * and the transition to the main application screen. It uses Jetpack Compose for the UI.
 */
class MainActivity : FragmentActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    window.setFlags(
      WindowManager.LayoutParams.FLAG_SECURE,
      WindowManager.LayoutParams.FLAG_SECURE
    )
    enableEdgeToEdge()

    setContent {
      VetriPathLearnTheme {
        Surface(modifier = Modifier.fillMaxSize(), color = Color(0xFF0F0E17)) {
          AppContent()
        }
      }
    }
  }

  /**
   * Manages the top-level state of the application.
   *
   * Switches between Splash, Lock, and Main screens based on the [AppState].
   */
  @Composable
  fun AppContent() {
    var appState by remember { mutableStateOf(AppState.Splash) }

    when (appState) {
      AppState.Splash -> {
        SplashScreen(onAnimationFinished = {
          appState = AppState.Lock
        })
      }
      AppState.Lock -> {
        LockScreen(
          onAuthenticated = {
            appState = AppState.Main
          }
        )
      }
      AppState.Main -> {
        MainScreen()
      }
    }
  }

  /**
   * Displays the splash screen with a scaling and fading logo animation.
   *
   * @param onAnimationFinished Callback triggered when the animation sequence completes.
   */
  @Composable
  fun SplashScreen(onAnimationFinished: () -> Unit) {
    val scale = remember { Animatable(0.5f) }
    val alpha = remember { Animatable(0f) }

    LaunchedEffect(key1 = true) {
      // Fade in and scale up the logo
      kotlin.runCatching {
        alpha.animateTo(1f, animationSpec = tween(1200))
      }
      kotlin.runCatching {
        scale.animateTo(1.1f, animationSpec = tween(800))
        scale.animateTo(1.0f, animationSpec = tween(400))
      }
      // Small pause after animation finishes
      kotlinx.coroutines.delay(300)
      onAnimationFinished()
    }

    Box(
      modifier = Modifier
        .fillMaxSize()
        .background(Color(0xFF0F0E17)),
      contentAlignment = Alignment.Center
    ) {
      Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
      ) {
        Image(
          painter = painterResource(id = R.drawable.ic_launcher_logo),
          contentDescription = "VetriPathLearn Logo",
          modifier = Modifier
            .size(140.dp)
            .scale(scale.value)
            .alpha(alpha.value)
        )
        Spacer(modifier = Modifier.height(24.dp))
        Text(
          text = "VETRIPATHLEARN",
          color = Color.White,
          fontSize = 24.sp,
          fontWeight = FontWeight.Bold,
          letterSpacing = 3.sp,
          modifier = Modifier.alpha(alpha.value)
        )
        Spacer(modifier = Modifier.height(16.dp))
        Text(
          text = "\"Your career path is built on your daily persistence.\"",
          color = Color(0xFF94A1B2),
          fontSize = 13.sp,
          textAlign = androidx.compose.ui.text.style.TextAlign.Center,
          lineHeight = 18.sp,
          fontWeight = FontWeight.Medium,
          modifier = Modifier
            .alpha(alpha.value)
            .padding(horizontal = 32.dp)
        )
      }
    }
  }

  /**
   * Displays a lock screen that requires user authentication (Biometrics or Device Credentials).
   *
   * @param onAuthenticated Callback triggered upon successful authentication.
   */
  @Composable
  fun LockScreen(onAuthenticated: () -> Unit) {
    val context = this
    val executor = remember { ContextCompat.getMainExecutor(context) }
    
    // Function to trigger native lock screen credentials check
    val triggerAuthentication = {
      val biometricPrompt = BiometricPrompt(
        context,
        executor,
        object : BiometricPrompt.AuthenticationCallback() {
          override fun onAuthenticationError(errorCode: Int, errString: CharSequence) {
            super.onAuthenticationError(errorCode, errString)
            Toast.makeText(context, "Authentication failed: $errString", Toast.LENGTH_SHORT).show()
          }

          override fun onAuthenticationSucceeded(result: BiometricPrompt.AuthenticationResult) {
            super.onAuthenticationSucceeded(result)
            onAuthenticated()
          }

          override fun onAuthenticationFailed() {
            super.onAuthenticationFailed()
          }
        }
      )

      val promptInfo = BiometricPrompt.PromptInfo.Builder()
        .setTitle("VetriPathLearn Security Lock")
        .setSubtitle("Authenticate using your phone security (PIN, Pattern, Password, or Biometrics)")
        .setAllowedAuthenticators(BIOMETRIC_STRONG or DEVICE_CREDENTIAL)
        .build()

      try {
        biometricPrompt.authenticate(promptInfo)
      } catch (e: Exception) {
        // If security is not configured or fails to prompt, let user pass to prevent app crash
        Toast.makeText(context, "No lockscreen setup detected. Proceeding...", Toast.LENGTH_LONG).show()
        onAuthenticated()
      }
    }

    // Trigger authentication automatically on lock screen entry with a small delay
    LaunchedEffect(key1 = true) {
      kotlinx.coroutines.delay(500)
      triggerAuthentication()
    }

    Box(
      modifier = Modifier
        .fillMaxSize()
        .background(Color(0xFF0F0E17)),
      contentAlignment = Alignment.Center
    ) {
      Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
        modifier = Modifier.padding(32.dp)
      ) {
        // App Logo
        Image(
          painter = painterResource(id = R.drawable.ic_launcher_logo),
          contentDescription = "VetriPathLearn Logo",
          modifier = Modifier.size(80.dp)
        )
        
        Spacer(modifier = Modifier.height(40.dp))
        
        // Stylized Fingerprint Icon (Placeholder using Text/Emoji for style)
        Box(
          modifier = Modifier
            .size(90.dp)
            .background(Color(0xFF1F1E27), shape = androidx.compose.foundation.shape.CircleShape),
          contentAlignment = Alignment.Center
        ) {
          Text(
            text = "☝️", // Using an emoji as a simple "fingerprint style" visual
            fontSize = 40.sp
          )
        }

        Spacer(modifier = Modifier.height(24.dp))
        
        Text(
          text = "VetriPathLearn is Locked",
          color = Color.White,
          fontSize = 22.sp,
          fontWeight = FontWeight.Bold
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
          text = "Touch the sensor or click below to unlock",
          color = Color(0xFF94A1B2),
          fontSize = 14.sp,
          textAlign = androidx.compose.ui.text.style.TextAlign.Center
        )
        
        Spacer(modifier = Modifier.height(48.dp))
        
        Button(
          onClick = { triggerAuthentication() },
          colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF7F5AF0)),
          modifier = Modifier.fillMaxWidth().height(50.dp),
          shape = androidx.compose.foundation.shape.RoundedCornerShape(12.dp)
        ) {
          Text("Unlock with Fingerprint", color = Color.White, fontSize = 16.sp, fontWeight = FontWeight.SemiBold)
        }
      }
    }
  }

  /**
   * Represents the different states of the application flow.
   */
  enum class AppState {
    /** Initial splash screen state. */
    Splash, 
    /** Screen shown when the app is locked and waiting for authentication. */
    Lock, 
    /** Main application content state. */
    Main
  }
}

