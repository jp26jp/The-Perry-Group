{% assign siteURL = "http://theperry.group" %}<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage":{
      "@type":"WebPage",
      "@id":"{{ siteURL }}{{ page.url }}"
    },
    "headline": "{{ page.title }}",
    "image": {
      "@type": "ImageObject",
      "url": "{{ siteURL }}{{ page.image | uri_escape }}"
    },
    "datePublished": "{{ page.date | date_to_xmlschema }}",
    "author": {
      "@type": "Person",
      "name": "{{ page.agent }}"
    },
     "publisher": {
      "@type": "Organization",
      "name": "{{ site.title }}",
      "logo": {
        "@type": "ImageObject",
        "url": "{{ siteURL }}/assets/defaults/logos/logo.png"
      }
    },
    "description": "{{ page.excerpt | strip_html }}"
  }
  </script>
