---
layout: default
---
{% for agent in site.data.agents %}
  {% if agent.name == page.title %}
  <header class="row">
    <h1>{{agent.name}}</h1>
    <div id="header-image">
      <img src="/assets/defaults/agents/{{agent.name | slugify}}-banner.jpg" alt="{{agent.name}}'s profile picture'"/>
    </div>
  </header>
  <div class="row pt-4 pr-4 pl-4">
    <div class="col-lg-7 col-sm-12">
      <h2 id="about-me">About Me</h2>
      <p>{{agent.description}}</p>
    </div>
    <div class="col-lg-5 col-md-12">
      <h2 id="contact-me">Contact Me</h2>
      <div class="mb-2">
        <a class="social" href="tel:+1{{agent.phone | remove:"-" | remove:"."}}" title="Text or call {{agent.name}}"><i class="theperrygroup-phone pr-2"></i>{{agent.phone}}</a>
      </div>
      <div class="mb-2">
        <a class="social" href="mailto:{{agent.email}}" title="Email {{agent.name}}"><i class="theperrygroup-email pr-2"></i>{{agent.email}}</a>
      </div>
      <div class="social-container">
        {% if agent.facebook %}<a class="social" href="https://www.facebook.com/{{agent.facebook}}" target="_blank" title="Connect with {{agent.name}} on Facebook"><i class="theperrygroup-facebook"></i></a>{% endif %}
        {% if agent.instagram %}<a class="social" href="https://www.instagram.com/{{agent.instagram}}" target="_blank" title="Connect with {{agent.name}} on Instagram"><i class="theperrygroup-instagram"></i></a>{% endif %}
        {% if agent.twitter %}<a class="social" href="https://www.twitter.com/{{agent.twitter}}" target="_blank" title="Connect with {{agent.name}} on Twitter"><i class="theperrygroup-twitter"></i></a>{% endif %}
        {% if agent.linkedin %}<a class="social" href="https://www.linkedin.com/in/{{agent.linkedin}}" target="_blank" title="Connect with {{agent.name}} on LinkedIn"><i class="theperrygroup-linkedin"></i></a>{% endif %}
      </div>
    </div>
  </div>
  <div class="row pt-4 pr-4 pl-4">
    <div class="col">
      <h2 id="latest-reviews">Reviews</h2>
      <div class="mt-5 row justify-content-center">
        <!-- <div class="col text-center font-italic agent-stats">
          <h4 class="m-0"><div class="agent-stats-value pb-5" id="homes-sold"></div> homes sold this year!</h4>
        </div> -->
        <div class="col-lg-3 col-md-4 col-sd-6 agent-stats align-self-center mb-sd-0 mb-5 text-center">
          <h4 class="m-0 font-italic"><div class="agent-stats-value pb-1" id="five-star-reviews"></div> 5 star reviews!</h4>
          <a href="https://www.zillow.com/profile/{{agent.zillow}}/#reviews" target="_blank" title="View all {{agent.name}}'s reviews on Zillow"><img src="/assets/defaults/logos/zillow-500.png" class="mt-1" id="zillow-logo" alt="Zillow logo"/></a>
        </div>
        <div class="col-lg-5 col-md-6 col-sd-6" id="review-bars">
          {% include skill-bar.md name="Local Knowledge" %}
          {% include skill-bar.md name="Process Expertise" %}
          {% include skill-bar.md name="Responsiveness" %}
          {% include skill-bar.md name="Negotiation Skills" %}
        </div>
      </div>
      <div class="mt-5 card-custom-deck row" id="reviews" data-zillow-id="{{agent.zillow}}"></div>
    </div>
  </div>
  {% endif %}
{% endfor %}
