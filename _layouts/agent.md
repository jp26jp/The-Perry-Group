---
layout: default
---
<header>
  <h1>{{ page.title }}</h1>
  <div id="header-image"><img src="{{ page.image }}" /></div>
</header>
<div class="feed-content">

  <div class="agent-section-container clearfix">
    <div class="agent-split-section agent-section about-me-section">
      <h2 id="about-me">About Me</h2>
      {{ content }}
    </div>
    <div class="agent-split-section agent-section contact-me-section">
      <h2 id="contact-me">Contact Me</h2>
    </div>
  </div>

  {% if page.feed == true %}<div class="agent-section">
    <h2 id="latest-posts">Latest Posts</h2>

    {% include feed.html agent="Michael Perry" image=true %}

  </div>{% endif %}

</div>
