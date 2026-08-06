package com.example.vetripathlearn.ui.main

import android.annotation.SuppressLint
import android.content.ActivityNotFoundException
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.view.ViewGroup
import android.webkit.JsResult
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.compose.BackHandler
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.viewinterop.AndroidView

private fun handleUrlLoading(context: Context, url: String?): Boolean {
  if (url == null) return false
  if (url.startsWith("file:///android_asset/appti/")) {
    return false // Internal asset: load inside WebView
  }
  return try {
    val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
    context.startActivity(intent)
    true // External link: opened via Intent
  } catch (e: ActivityNotFoundException) {
    true
  } catch (e: Exception) {
    true
  }
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun MainScreen(modifier: Modifier = Modifier) {
  var webViewRef by remember { mutableStateOf<WebView?>(null) }
  var canGoBack by remember { mutableStateOf(false) }

  // Intercept system back gestures to navigate backward in the WebView history if possible
  BackHandler(enabled = canGoBack) {
    webViewRef?.goBack()
  }

  AndroidView(
    modifier = modifier
      .fillMaxSize()
      .statusBarsPadding(),
    factory = { context ->
      WebView(context).apply {
        layoutParams = ViewGroup.LayoutParams(
          ViewGroup.LayoutParams.MATCH_PARENT,
          ViewGroup.LayoutParams.MATCH_PARENT
        )
        
        // Anti-Copy & Security Settings
        isLongClickable = false
        setOnLongClickListener { true }
        isHapticFeedbackEnabled = false
        
        // Secure settings
        settings.apply {
          javaScriptEnabled = true
          domStorageEnabled = true
          databaseEnabled = true
          allowFileAccess = true
          allowContentAccess = true
          allowFileAccessFromFileURLs = true
          allowUniversalAccessFromFileURLs = true
          cacheMode = WebSettings.LOAD_NO_CACHE
          mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
          useWideViewPort = false
          loadWithOverviewMode = false
          textZoom = 100
          builtInZoomControls = false
          displayZoomControls = false
          userAgentString = "$userAgentString VetriPathLearnApp"
        }
        
        webChromeClient = object : WebChromeClient() {
          override fun onJsAlert(view: WebView?, url: String?, message: String?, result: JsResult?): Boolean {
            result?.confirm()
            return true
          }

          override fun onJsConfirm(view: WebView?, url: String?, message: String?, result: JsResult?): Boolean {
            result?.confirm()
            return true
          }
        }

        webViewClient = object : WebViewClient() {
          override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
            return handleUrlLoading(context, request?.url?.toString())
          }

          @Deprecated("Deprecated in Java")
          override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
            return handleUrlLoading(context, url)
          }

          override fun onPageFinished(view: WebView?, url: String?) {
            super.onPageFinished(view, url)
            // Inject Javascript Anti-Copy & Anti-Selection Event Blockers
            val antiCopyJs = """
              (function() {
                var events = ['copy', 'cut', 'contextmenu', 'selectstart', 'dragstart'];
                events.forEach(function(evt) {
                  document.addEventListener(evt, function(e) {
                    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                      e.preventDefault();
                      return false;
                    }
                  }, true);
                });
                document.body.style.webkitUserSelect = 'none';
                document.body.style.userSelect = 'none';
              })();
            """.trimIndent()
            view?.evaluateJavascript(antiCopyJs, null)
          }

          override fun doUpdateVisitedHistory(view: WebView?, url: String?, isReload: Boolean) {
            super.doUpdateVisitedHistory(view, url, isReload)
            canGoBack = view?.canGoBack() == true
          }
        }

        clearCache(true)
        loadUrl("file:///android_asset/appti/index.html")
        webViewRef = this
      }
    },
    update = { webView ->
      webViewRef = webView
    }
  )
}

