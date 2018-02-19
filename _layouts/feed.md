---
layout: default
---
<header>
  <h1>{{ page.title }}</h1>
  <div id="header-image"><img src="{{ page.image }}" /></div>
</header>
<div class="feed-content">

  {{ content }}

  <div class="agent-section">
    <h2 id="latest-posts">Latest Posts</h2>

    {% include feed.html image=true %}

  </div>

</div>
