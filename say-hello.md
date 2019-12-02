---
layout: layout.liquid
pageTitle: Say Hello!
metaDescription: Say Hello
---
<aside>Say hello to me.</aside>

<form name="contact" method="POST" data-netlify="true" action="/">
  <div>
    <label>Your Name: <input type="text" name="name" /></label>   
  </div>
  <div>
    <label>Your Email: <input type="email" name="email" /></label>
  </div>
  <div>
    <label>Message: <textarea name="message"></textarea></label>
  </div>
  <div>
    <button type="submit">Send</button>
  </div> 
</form>