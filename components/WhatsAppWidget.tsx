"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function WhatsAppWidget() {
  return (
    <Script
      src="https://do8wl071qiuy9.cloudfront.net/integration-plugin.js"
      id="wa-widget"
      strategy="afterInteractive"
      // We use both 'widget-id' and 'data-widget-id' to be safe
      {...{ "widget-id": "9JjuP9" }} 
      data-widget-id="9JjuP9"
      onLoad={() => {
        console.log("WhatsApp Widget Script loaded successfully");
      }}
    />
  );
}