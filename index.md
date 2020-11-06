---
layout: layout.liquid
pageType: home
pageTitle: Hi, I’m Josh Crain.
metaTitle: Josh Crain - Product designer, developer, artist in training
metaDescription: Josh Crain has experience as a web designer, product designer, and front-end developer. Design allows Josh to make an impact through user advocacy, research, web standards, and code.
changefreq: monthly
priority: "1.0"
---
<div class="grid-layout_home">
<div class="grid-content">

<p class="text--largest">I am a product designer with experience as a web designer and front-end developer. My work allows me to make an impact through user advocacy, research, web standards, and code. There are also <a href="/about/">other interesting things</a>.</p>
</div>
</div>
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
        <a href="{{ post.url }}" class="text--larger">{{ post.data.pageTitle }}</a>
        <p class="line-clamp"><time class="text--secondary small-caps">{{ post.date | date: "%d %b %Y" }}</time> &mdash; {{ post.data.metaDescription truncate: 280 }}</p>
    </div>
</div>
{% endfor %}
<div class="grid-full@l">
    <div>
        <p><i>See <a href="/notes/">all notes</a> or a list of semi-weekly <a href="/tags/weeknotes/">weeknotes</a>. </i></p>
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
    <img src="{{post.data.metaImage}}" alt="Artwork {{ post.data.pageTitle }}">
    <span class="name">{{ post.data.pageTitle }}</span>
    </a>
</div>
{% endfor %} 
</div>
</div>
</section>