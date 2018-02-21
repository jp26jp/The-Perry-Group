---
layout: default
---
<header>
  {% if page.title %}<h1>{{ page.title }}</h1>{% endif %}
  <div id="header-image"><img src="{{ page.image }}" /></div>
</header>
<div class="feed-content">

  <div class="clearfix section">
    <div class="split-section about-me-section">
      <h2 id="about-me">About Me</h2>
      <p>{{ page.description }}</p>
    </div>
    <div class="split-section contact-me-section">
      <h2 id="contact-me">Contact Me</h2>
      {% assign agent = "" %}
      {% if page.title == "Michael Perry" %}{% assign agent = "michael" %}
      {% elsif page.title == "Mason Conley" %}{% assign agent = "mason.conley" %}
      {% elsif page.title == "Tim Leary" %}{% assign agent = "tim.leary" %}
      {% endif %}
      <a class="contact-section" href="tel:1-{{ page.phone }}"><i class="theperrygroup-phone"></i>{{ page.phone }}</a>
      <a class="contact-section" href="mailto:{{ agent }}@theperry.group"><i class="theperrygroup-email"></i>{{ agent }}@theperry.group</a>
      <div class="contact-section social-container">
        {% if page.facebook %}<a class="social" href="https://www.facebook.com/{{ page.facebook }}" target="_blank" title="Connect with me on Facebook"><i class="theperrygroup-facebook"></i></a>{% endif %}
        {% if page.instagram %}<a class="social" href="https://www.instagram.com/{{ page.instagram }}" target="_blank" title="Connect with me on Instagram"><i class="theperrygroup-instagram"></i></a>{% endif %}
        {% if page.twitter %}<a class="social" href="https://www.twitter.com/{{ page.twitter }}" target="_blank" title="Connect with me on Twitter"><i class="theperrygroup-twitter"></i></a>{% endif %}
        {% if page.linkedin %}<a class="social" href="https://www.linkedin.com/in/{{ page.linkedin }}" target="_blank" title="Connect with me on LinkedIn"><i class="theperrygroup-linkedin"></i></a>{% endif %}
      </div>
    </div>
  </div>

  {% if page.feed == true %}<div class="section">
    <h2 id="latest-posts">Latest Posts</h2>

    {% include feed.html agent="Michael Perry" image=true %}

  </div>{% endif %}

</div>
