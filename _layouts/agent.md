---
layout: default
---
{% for agent in site.data.agents %}
  {% if agent.name == page.title %}
  <header class="row">
    <h1>{{ agent.name }}</h1>
    <div id="header-image">{% if agent.image %}<img src="/assets/defaults/agents/{{ agent.name | slugify }}-banner.jpg" />{% endif %}</div>
  </header>
  <div class="row pt-4 pr-4 pl-4">
    <div class="col-lg-7 col-sm-12">
      <h2 id="about-me">About Me</h2>
      <p>{{ agent.description }}</p>
    </div>
    <div class="col-lg-5 col-md-12">
      <h2 id="contact-me">Contact Me</h2>
      {% assign agentName = "" %}
      {% if agent.name == "Michael Perry" %}{% assign agentName = "michael" %}
      {% elsif agent.name == "Jack Perry" %}{% assign agentName = "jack" %}
      {% elsif agent.name == "Mason Conley" %}{% assign agentName = "mason.conley" %}
      {% elsif agent.name == "Tim Leary" %}{% assign agentName = "tim.leary" %}
      {% elsif agent.name == "Travis Clemens" %}{% assign agentName = "travis.clemens" %}
      {% elsif agent.name == "Tanner Webster" %}{% assign agentName = "tanner.webster" %}
      {% elsif agent.name == "Chance Carlton" %}{% assign agentName = "chance.carlton" %}
      {% endif %}
      <div class="mb-2">
        <a class="social" href="tel:1-{{ agent.phone }}"><i class="theperrygroup-phone pr-2"></i>{{ agent.phone }}</a>
      </div>
      <div class="mb-2">
        <a class="social" href="mailto:{{ agentName | replace:" ","."  }}@theperry.group"><i class="theperrygroup-email pr-2"></i>{{ agentName | replace:" ","." }}@theperry.group</a>
      </div>
      <div class="social-container">
        {% if agent.facebook %}<a class="social" href="https://www.facebook.com/{{ agent.facebook }}" target="_blank" title="Connect with me on Facebook"><i class="theperrygroup-facebook"></i></a>{% endif %}
        {% if agent.instagram %}<a class="social" href="https://www.instagram.com/{{ agent.instagram }}" target="_blank" title="Connect with me on Instagram"><i class="theperrygroup-instagram"></i></a>{% endif %}
        {% if agent.twitter %}<a class="social" href="https://www.twitter.com/{{ agent.twitter }}" target="_blank" title="Connect with me on Twitter"><i class="theperrygroup-twitter"></i></a>{% endif %}
        {% if agent.linkedin %}<a class="social" href="https://www.linkedin.com/in/{{ agent.linkedin }}" target="_blank" title="Connect with me on LinkedIn"><i class="theperrygroup-linkedin"></i></a>{% endif %}
      </div>
    </div>
  </div>
  <div class="row pt-4 pr-4 pl-4">
    <div class="col">
      <h2 id="reviews">Latest Reviews</h2>
      <div class="card-columns" data-zillow-id="{{ agent.zillow }}"></div>
    </div>
  </div>
  {% endif %}
{% endfor %}
