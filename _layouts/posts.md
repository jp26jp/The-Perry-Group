---
layout: default
---
<div id="container" class="clearfix">
  <div id="main-image" class="halves">
    <img src="{{ page.image }}" />
  </div>
  <div id="main-content" class="halves post">
    <h1>{{ page.title }}</h1>
    <div id="author">
      <img id="author-image" src="/uploads/defaults/authors/{{ page.author | downcase | replace:' ','-' }}.jpg"/>
      <div class="author-name">by <div id="author-name"><a href="/{{ page.author | downcase | replace:' ','-' }}/" title="View all posts by {{ page.author }}">{{ page.author }}</a></div></div>
    </div>
    {{ content }}
    <ul>
      {% for related_post in site.related_posts limit: 5 %}
        <li><a href="{{ related_post.url }}">{{ related_post.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>
