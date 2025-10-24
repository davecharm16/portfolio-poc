import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({ title, description, image, url }: SEOProps) {
  const defaultTitle = 'Dave Charm Bulaquena | Full Stack Developer & Solutions Designer';
  const defaultDescription =
    'Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. Creating scalable applications with clean code and thoughtful UX.';
  const defaultImage = 'https://davebulaquena.com/og-image.jpg';
  const defaultUrl = 'https://davebulaquena.com/';

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
      { property: 'og:title', content: seoTitle },
      { property: 'og:description', content: seoDescription },
      { property: 'og:image', content: seoImage },
      { property: 'og:url', content: seoUrl },
      { property: 'twitter:title', content: seoTitle },
      { property: 'twitter:description', content: seoDescription },
      { property: 'twitter:image', content: seoImage },
    ];

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
