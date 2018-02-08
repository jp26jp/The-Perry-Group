---
layout: default
---
<div id="container" class="clearfix">
  <div id="main-image" class="halves">
    <img src="{{ page.image }}" />
  </div>
  <div id="main-content" class="halves post">
    <h1>{{ page.title }}</h1>

    {% include author.html %}

    {{ content }}

    {% include author.html %}

    {% include disqus.html identifier=page.url %}

  </div>

  {% if site.related_posts %}
  <aside id="related">
    <h2>You might also like</h2>
      {% for related_post in site.related_posts limit: 2 %}
      <article class="clearfix">
        <a href="{{ related_post.url }}">
          <header>
            <h4>{{ related_post.title }}</h4>
            <img src="{{ related_post.image }}" />
          </header>
        </a>
      </article>
      {% endfor %}
    </ul>
  </aside>
  {% endif %}

</div>
<script id="dsq-count-scr" src="//theperrygroup.disqus.com/count.js" async></script>
