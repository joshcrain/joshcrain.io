---
layout: layout.liquid
pageTitle: Say hello!
tags: notes
metaDescription: Say Hello

---
Say Hello

<form name="contact" method="POST" data-netlify="true" action="/">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p> 
</form>