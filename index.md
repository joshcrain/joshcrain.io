---
layout: layout.njk
pageType: home
title: Hi, I’m Josh Crain.
metaTitle: Josh Crain - Product designer, developer, artist in training
description: Josh Crain has experience as a web designer, product designer, and front-end developer. Design allows Josh to make an impact through user advocacy, research, web standards, and code.
changefreq: monthly
priority: "1.0"
---
<div class="grid-layout_home">
<div class="grid-content">

<p class="text--largest">I design and build websites. My work allows me to make an impact through design, user advocacy, web standards, research, and code. I sketch in my spare time and there are <a href="/about/">other interesting things</a>.</p>
</div>
</div>
</div><!--/fade-in-->
<section class="grid-layout_home">
<div class="layout-section"> 
    <h2>Notes</h2>
</div>
<div class="grid-content">
<div class="grid">
{% assign items = collections.notes | reverse %}
{% for post in items limit:6 %}
<div class="grid-half@l">
    <div>
        <a href="{{ post.url }}" class="text--largest">{{ post.data.title }}</a>
        <p class="line-clamp"><span class="small-caps"><time>{{ post.date | date: "%d %b %Y" }}</time> ⁃ <span class="article--tags">{% for tag in post.data.tags %}{% if tag != 'notes' %}<span> {{tag}}</span>{% endif %}{% endfor %}</span></span> </br>
        {{ post.data.description truncate: 280 }}</p>
    </div>
</div>
{% endfor %}
<div class="grid-full@l">
    <div>
        <p><i>See <a href="/notes/">all notes</a> or a list of semi-weekly <a href="/tags/weeknotes/">weeknotes</a>. The most recent is {% assign items = collections.weeknotes | reverse %}{% for post in items limit:1 %}<a href="{{ post.url }}">{{ post.data.title }}</a>{% endfor %}.</i></p>
    </div>
</div>
</div>
</div>
</section>
<section class="grid-layout_home">
<h2>Sketches</h2>
<div class="grid-content">
<div class="grid">
{% for post in collections.sketches reversed limit:6 %}
<div class="grid-quarter@l tile">
    <a href="{{ post.url }}" class="square">
    <img src="{{post.data.metaImage}}" alt="Artwork {{ post.data.title }}">
    <span class="name">{{ post.data.title }}</span>
    </a>
</div>
{% endfor %} 
</div>
</div>
</section>