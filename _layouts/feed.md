---
layout: default
---
<header class="feed-header row">
  <h1>{{page.title}}</h1>
  <div id="header-image"><img src="{{page.image}}" /></div>
</header>
<div class="row">

  {{content}}

  {% if page.feed != false %}
    <div class="col-12">
      <h2 id="latest-posts">Latest Posts</h2>
    </div>
    <div class="card-custom-deck">
      {% include feed.md %}
    </div>
    {% endif %}
</div>
