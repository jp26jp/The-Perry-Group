{% for post in site.posts %}
<div class="col-md-6">
  <article class="card mb-3">
    <div class="img-crop-container">
      <a href="{{post.url}}"><img class="card-img-top" src="{{post.image}}" alt="{{post.title}}"></a>
    </div>
    <div class="card-body">
      <h3><a href="{{post.url}}" title="{{post.title}}">{{post.title}}</a></h3>
      <p class="card-text">{{post.excerpt | strip_html | truncatewords:20}}</p>
      <p class="card-text mb-0">by <a href="/agents/{{post.agent | slugify}}/#latest-posts" title="View all posts by {{post.agent}}">{{post.agent}}</a></p>
      <p class="card-text"><small class="text-muted"><time datetime="{{post.date}}" class="date-name-info">{{post.date | date: "%B %-d, %Y"}}</time></small></p>
    </div>
  </article>
</div>
{% endfor %}
