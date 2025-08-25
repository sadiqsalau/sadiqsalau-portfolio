import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  images?: string[];
  keywords?: string[];
}

export default function PageSEO({
  title,
  description,
  images,
  keywords,
}: PageSEOProps) {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join(", ")} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {images?.map((image, index) => (
        <meta
          key={index}
          property="og:image"
          content={new URL(image, window.location.origin).href}
        />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {images?.map((image, index) => (
        <meta
          key={index}
          name="twitter:image"
          content={new URL(image, window.location.origin).href}
        />
      ))}
    </Helmet>
  );
}
