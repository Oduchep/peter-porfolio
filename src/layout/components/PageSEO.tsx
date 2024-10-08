import Head from 'next/head';
import { useRouter } from 'next/router';

interface PageSEOProps {
  title: string;
  description?: string;
  keywords?: string;
}

const PageSEO = ({
  title,
  description = 'Default site description',
  keywords = 'default, keywords',
}: PageSEOProps) => {
  const siteUrl = 'https://www.majfintech.com/';
  const { asPath } = useRouter();
  const cleanPath = asPath.split('#')[0].split('?')[0];
  const seoUrl = `${siteUrl}` + (asPath === '/' ? '' : cleanPath);

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={seoUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Content-Language" content="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/assets/images/MAJ-logo.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image:alt" content="MAJ Fintech Logo" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/assets/images/MAJ-logo.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: seoUrl,
            name: title,
            description: description,
          }),
        }}
      />
    </Head>
  );
};

export default PageSEO;
