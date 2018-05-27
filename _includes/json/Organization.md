{% assign siteURL = "http://theperry.group" %}<script type="application/ld+json">
{
  "@context":"http://schema.org",
  "@type":"RealEstateAgent",
  "@id":"{{ siteURL }}",
  "url":"{{ siteURL }}",
  "name":"{{ site.title }}",
  "legalName": "{{ site.title }}",
  "image":"{{ siteURL }}/assets/defaults/logos/logo.png",
  "logo":"{{ siteURL }}/assets/defaults/logos/logo.png",
  "sameAs": [
    "https://www.facebook.com/{{ site.facebook }}",
    "https://instagram.com/{{ site.instagram }}",
    "https://www.twitter.com/{{ site.twitter }}"
  ],
  "address":{
    "@type":"PostalAddress",
    "streetAddress":"2121 E McClelland St #201",
    "addressLocality":"Salt Lake City",
    "addressRegion":"UT",
    "postalCode":"84106",
    "addressCountry":"US"
  },
  "geo":{
    "@type":"GeoCoordinates",
    "latitude":40.7248806,
    "longitude":-111.8610703
  },
  "telephone":"+1{{ site.phone }}",
  "parentOrganization": {
  	"@type":"RealEstateAgent",
    "@id":"http://www.kwsaltlake.com/",
    "name":"Keller Williams Salt Lake City",
    "image":"http://images.kw.com/mc_photos/0/0/2/002044/library/headerKW/header_kw_photo_1408488297929.jpg",
    "telephone":"+18013268800",
    "address":{
      "@type":"PostalAddress",
      "streetAddress":"2121 E McClelland St #201",
      "addressLocality":"Salt Lake City",
      "addressRegion":"UT",
      "postalCode":"84106",
      "addressCountry":"US"
    }
  }
}
</script>
