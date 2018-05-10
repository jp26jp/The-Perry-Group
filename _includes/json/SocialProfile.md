{% assign siteURL = "http://theperry.group" %}<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "{{ site.title }}",
  "logo": {
    "@type": "ImageObject",
    "url": "{{ siteURL }}/assets/defaults/logos/logo.png"
  },
  "url": "{{ siteURL }}",
  "sameAs": [
    "https://www.facebook.com/{{ site.facebook }}",
    "https://instagram.com/{{ site.instagram }}",
    "https://www.twitter.com/{{ site.twitter }}"
  ]
}
</script>
