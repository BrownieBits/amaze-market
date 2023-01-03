import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './global.scss';

library.add(fas, fab);
const siteTitle = 'Amaze Market';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="The Amaze Marketplace" />
        <link rel="canonical" href="https://amaze.co/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - Amaze" />
        <meta
          property="og:description"
          content="Amaze has everything you need to create beautiful experiences that bring your content to life, increase engagement, and boost sales."
        />
        <meta property="og:url" content="https://amaze.co/" />
        <meta property="og:site_name" content="Amaze" />
        <meta
          property="article:modified_time"
          content="2022-10-18T01:49:37+00:00"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minutes"></meta>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        ></meta>
        <link rel="shortlink" href="https://amaze.co/" />
        <link
          rel="icon"
          href="https://amaze.co/wp-content/uploads/2022/09/cropped-favicon_amaze-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://amaze.co/wp-content/uploads/2022/09/cropped-favicon_amaze-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="https://amaze.co/wp-content/uploads/2022/09/cropped-favicon_amaze-180x180.png"
        />
        <meta
          name="msapplication-TileImage"
          content="https://amaze.co/wp-content/uploads/2022/09/cropped-favicon_amaze-270x270.png"
        ></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
