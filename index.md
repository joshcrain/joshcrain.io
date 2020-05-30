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
<p class="text--largest">I am an experienced web designer, product designer, and front-end developer. Design allows me to make an impact through user advocacy, research, web standards, and code. There are also <a href="/about/">other interesting things</a>.</p>
</div>
</div>
<hr>
<section class="grid-layout_home">
<div class="layout-section"> 
    <h2>Sketches &amp; studies</h2>
    <p>I want to spend <em>a lot more time</em> drawing, painting, and in my sketchbook.</p>
</div>
<div class="grid-content">
<div class="grid">
{% for post in collections.sketches limit:9 reversed %}
<div class="grid-third@l tile">
    <!--<img src="{{post.data.metaImage}}" alt="Artwork {{ post.data.pageTitle }}">-->
    <a href="{{ post.url }}">{{ post.data.pageTitle }}</a>
    <p><span class="text--secondary small-caps">{{ post.date | date: "%d %b %Y" }}</span> &mdash; {{ post.data.metaDescription }}</p>
    
</div>
{% endfor %} 
</div>
</div>
</section>
<hr>
<section class="grid-layout_home">
<div class="layout-section"> 
    <h2>Weeknotes</h2>
    <p>Short notes recorded each week. </p>
</div>
<div class="grid-content">
<div class="grid">
{% assign allblogposts = collections.weeknotes | limit:2 %}
{% for post in allblogposts reversed %} 
<div class="grid-third@l tile">
    <div>
        <a href="{{ post.url }}">{{ post.data.pageTitle }}</a>
        <p><span class="text--secondary small-caps">{{ post.date | date: "%d %b %Y" }}</span> &mdash; {{ post.data.metaDescription strip_html truncate: 280 }}</p>
    </div>
</div>
{% endfor %} 
</div>
</div>
</section>
<hr>
<section class="grid-layout_home">
<div class="layout-section"> 
    <h2>Say Hello</h2>
</div>
<div class="grid-content">
<div class="grid">
<div class="grid-full@l tile">
<p class="text--larger">I’d love to hear from you! To get in touch simply <a href="/say-hello/">say hello here</a> or <a href="https://twitter.com/thejoshcrain/" rel="noopener">follow me on Twitter</a>.</p>
</div>
</div>
</div>
</section>
