<nav class="navbar navbar-light navbar-expand-md">
  <a class="navbar-brand" id="logo" href="/"><img src="/assets/defaults/logos/the-perry-group.svg" alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="/blog/">Blog</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Agents</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          {% for agent in site.data.agents %}
            {% if agent.load %}
              <a class="dropdown-item" href="/agents/{{agent.name | slugify}}/">{{agent.name}}</a>
            {% endif %}
          {% endfor %}
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/agents/">View All</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
