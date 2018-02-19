---
layout: default
---
<header>
  <h1>{{ page.title }}</h1>
  <div id="header-image"><img src="{{ page.image }}" /></div>
</header>
<div class="feed-content">

  <div class="author-section-container clearfix">
    <div class="author-split-section author-section about-me-section">
      <h2 id="about-me">About Me</h2>
      {{ content }}
    </div>
    <div class="author-split-section author-section contact-me-section">
      <h2 id="contact-me">Contact Me</h2>
    </div>
  </div>

  {% if page.feed == true %}<div class="author-section">
    <h2 id="latest-posts">Latest Posts</h2>

    {% include feed.html author="Michael Perry" image=true %}

  </div>{% endif %}

</div>
