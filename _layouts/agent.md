---
layout: default
---
{% for agent in site.data.agents %}
  {% if agent.name == page.title %}
  <header class="row">
    <h1>{{ agent.name }}</h1>
    <div id="header-image">{% if agent.image %}<img src="{{ agent.image }}" />{% endif %}</div>
  </header>
  <div class="feed-content row">
    <div class="clearfix section">
      <div class="split-section about-me-section">
        <h2 id="about-me">About Me</h2>
        <p>{{ agent.description }}</p>
      </div>
      <div class="split-section contact-me-section">
        <h2 id="contact-me">Contact Me</h2>
        {% assign agentName = "" %}
        {% if agent.name == "Michael Perry" %}{% assign agentName = "michael" %}
        {% elsif agent.name == "Jack Perry" %}{% assign agentName = "jack" %}
        {% elsif agent.name == "Mason Conley" %}{% assign agentName = "mason.conley" %}
        {% elsif agent.name == "Tim Leary" %}{% assign agentName = "tim.leary" %}
        {% elsif agent.name == "Travis Clemens" %}{% assign agentName = "travis.clemens" %}
        {% elsif agent.name == "Tanner Webster" %}{% assign agentName = "tanner.webster" %}
        {% endif %}
        <a class="contact-section" href="tel:1-{{ agent.phone }}"><i class="theperrygroup-phone"></i>{{ agent.phone }}</a>
        <a class="contact-section" href="mailto:{{ agentName | slugify }}@theperry.group"><i class="theperrygroup-email"></i>{{ agentName | slugify }}@theperry.group</a>
        <div class="contact-section social-container">
          {% if agent.facebook %}<a class="social" href="https://www.facebook.com/{{ agent.facebook }}" target="_blank" title="Connect with me on Facebook"><i class="theperrygroup-facebook"></i></a>{% endif %}
          {% if agent.instagram %}<a class="social" href="https://www.instagram.com/{{ agent.instagram }}" target="_blank" title="Connect with me on Instagram"><i class="theperrygroup-instagram"></i></a>{% endif %}
          {% if agent.twitter %}<a class="social" href="https://www.twitter.com/{{ agent.twitter }}" target="_blank" title="Connect with me on Twitter"><i class="theperrygroup-twitter"></i></a>{% endif %}
          {% if agent.linkedin %}<a class="social" href="https://www.linkedin.com/in/{{ agent.linkedin }}" target="_blank" title="Connect with me on LinkedIn"><i class="theperrygroup-linkedin"></i></a>{% endif %}
        </div>
      </div>
    </div>
    {% if agent.feed == true %}<div class="section">
      <h2 id="latest-posts">Latest Posts</h2>
      {% include feed.html agent="Michael Perry" image=true %}
    </div>{% endif %}
  </div>
  {% endif %}
{% endfor %}
