---
layout: default
---
<header class="row max-width-container">
  <div id="header-image"><img src="{{ page.image }}" alt="{{ page.title }}"/></div>
  <div class="max-width">
    <h1 class="pr-md-0 pl-md-0 pt-5 pr-5 pl-5 m-0 text-center">{{ page.title }}</h1>
    {% include agent-flair.html %}
  </div>
</header>

{% include social-share.html %}

<div class="row max-width-container">
  <div class="max-width pl-7 pr-7">
    {{ content }}
    {% include agent-flair.html %}
    {% include comments.html identifier=page.url %}
  </div>
</div>

{% include related.html %}
