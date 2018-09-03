---
title: Agents
layout: page
feed: false
image: "/assets/defaults/agents/michael-perry-banner.jpg"
date: 2018-02-20 00:17:38 +0000
description: We specialize in helping our client's ﬁnd their dream homes with our expertise in Salt Lake and surrounding cities. As a top producing team in Salt Lake City, we also take the time to ensure your understanding of every important detail of the real estate process with unparalleled professionalism, expertise and service. Our 20+ years of experience in marketing and sales both internationally and locally means we are seasoned professionals with the unique ability to build quality relationships with all of our clients and partners across the board.  In today's fast changing real estate market, we are continually developing innovative concepts to marketing, creative approaches to real estate services and most importantly new ways of caring for our clients.
---
<div class="row">
  {% for agent in site.data.agents %}
    {% include agent.html description=agent.description name=agent.name phone=agent.phone email=agent.email facebook=agent.facebook twitter=agent.twitter instagram=agent.instagram linkedin=agent.linkedin %}
  {% endfor %}
</div>
