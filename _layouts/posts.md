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

    {% comment %}{% include disqus.html identifier=page.url %}{% endcomment %}

    <aside id="related">
      <h2>You might also like</h2>
        {% for related_post in site.related_posts limit: 2 %}
        <article>
          <header>
            <h4><a href="{{ related_post.url }}">{{ related_post.title }}</a></h4>
            <img src="{{ related_post.image }}" />
          </header>
        </article>
        {% endfor %}
      </ul>
    </aside>
  </div>
</div>
<script id="dsq-count-scr" src="//theperrygroup.disqus.com/count.js" async></script>
