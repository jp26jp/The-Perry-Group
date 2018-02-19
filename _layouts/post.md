---
layout: default
---
<header>
  <div id="header-image"><img src="{{ page.image }}" /></div>
  <div class="content">
    <h1>{{ page.title }}</h1>
    {% include agent.html %}
  </div>
</header>
<div class="content post-content">

  {{ content }}

  {% include agent.html %}

  {% include comments.html identifier=page.url %}

</div>

{% include related.html %}
