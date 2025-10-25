import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime
}: SEOProps) {
  const defaultTitle = 'Dave Charm Bulaquena | Full Stack Developer & Solutions Designer';
  const defaultDescription =
    'Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. Creating scalable applications with clean code and thoughtful UX.';
  const defaultImage = 'https://portfolio-poc-web.vercel.app/og-image.svg';
  const defaultUrl = 'https://portfolio-poc-web.vercel.app/';

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image || defaultImage;
  const seoUrl = url || defaultUrl;

  useEffect(() => {
    // Update document title
    document.title = seoTitle;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: seoDescription },
      { property: 'og:type', content: type },
      { property: 'og:title', content: seoTitle },
      { property: 'og:description', content: seoDescription },
      { property: 'og:image', content: seoImage },
      { property: 'og:image:secure_url', content: seoImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${seoTitle} - ${seoDescription.substring(0, 100)}` },
      { property: 'og:url', content: seoUrl },
      { property: 'og:site_name', content: 'Dave Charm Bulaquena' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seoTitle },
      { name: 'twitter:description', content: seoDescription },
      { name: 'twitter:image', content: seoImage },
      { name: 'twitter:image:alt', content: seoTitle },
      { name: 'twitter:creator', content: '@davebulaquena' },
      { name: 'twitter:site', content: '@davebulaquena' },
    ];

    // Add article-specific tags if type is article
    if (type === 'article') {
      if (author) metaTags.push({ property: 'article:author', content: author });
      if (publishedTime) metaTags.push({ property: 'article:published_time', content: publishedTime });
      if (modifiedTime) metaTags.push({ property: 'article:modified_time', content: modifiedTime });
    }

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    // Add or update JSON-LD structured data
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Dave Charm Bulaquena',
      jobTitle: 'Full Stack Developer & Solutions Designer',
      url: 'https://davebulaquena.com',
      sameAs: [
        'https://github.com/davebulaquena',
        'https://linkedin.com/in/davebulaquena',
      ],
      knowsAbout: [
        'React',
        'TypeScript',
        'Node.js',
        'Full Stack Development',
        'Web Development',
        'Software Engineering',
      ],
      description: seoDescription,
      image: seoImage,
    };

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [seoTitle, seoDescription, seoImage, seoUrl]);

  return null;
}
