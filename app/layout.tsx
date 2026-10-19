
import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "DD College | Admissions Open 2026",
    template: "%s | DD College",
  },
  description:
    "DD College Admissions 2026. Explore programs, discover opportunities and start your journey towards a successful future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* =========================================
            GOOGLE TAG MANAGER - HEAD
        ========================================= */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K7JUX7QC');
            `,
          }}
        />
      </head>

      <body>
        {/* =========================================
            GOOGLE TAG MANAGER - NOSCRIPT
        ========================================= */}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K7JUX7QC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* =========================================
            GOOGLE ADS TAG
        ========================================= */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-849221853"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'AW-849221853');
          `}
        </Script>

        {/* =========================================
            META PIXEL
        ========================================= */}

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {
              if(f.fbq)return;
              n=f.fbq=function(){
                n.callMethod ?
                n.callMethod.apply(n,arguments) :
                n.queue.push(arguments)
              };

              if(!f._fbq)f._fbq=n;

              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];

              t=b.createElement(e);
              t.async=!0;
              t.src=v;

              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s);
            }(
              window,
              document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js'
            );

            fbq('init', '2964234100588286');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* =========================================
            WEBSITE
        ========================================= */}

        <Navbar />

        <main>{children}</main>

        <Footer />

        {/* =========================================
            META PIXEL NOSCRIPT
        ========================================= */}

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2964234100588286&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
