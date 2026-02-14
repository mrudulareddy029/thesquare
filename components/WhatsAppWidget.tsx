"use client";

import Script from "next/script";

export default function WhatsAppWidget() {
  return (
    <Script
      src="https://do8wl071qiuy9.cloudfront.net/integration-plugin.js"
      id="wa-widget"
      strategy="lazyOnload" // Loads later so it doesn't block mobile images
      {...{ 
        "widget-id": "9JjuP9",
        "data-mobile": "true", // Some plugins require this for mobile
        "data-position": "right" 
      }}
      data-widget-id="9JjuP9"
    />
  );
}