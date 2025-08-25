import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  images?: string[];
}

export default function PageSEO({ title, description, images }: PageSEOProps) {
  return (
    <Helmet>
      <title>{title} - Sadiq Salau</title>
      <meta name="description" content={description} />
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
