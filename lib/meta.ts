import { Metadata } from 'next';
import { siteConfig } from '@/lib/constants';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const finalTitle = title 
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;
  
  const finalDescription = description || siteConfig.description;
  const finalImage = image || siteConfig.ogImage;

  return {
    title: finalTitle,
    description: finalDescription,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
      creator: '@yourusername',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    metadataBase: new URL(siteConfig.url),
  };
}