# Josh Crain

## Description
This site uses [Eleventy](https://www.11ty.io) for static site generation. Changes are tracked with Git and pushed [here](https://github.com//joshcrain/joshcrain.io) using command line. The site is deployed automatically by Netlify using [continuous deployment](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git).

[I used an article](https://www.filamentgroup.com/lab/build-a-blog/) from Filament Group to get me started.

[https://joshcrain.io/](https://joshcrain.io/)

## Running Locally

```
npm install
npx @11ty/eleventy --serve
```

Browse to http://localhost:8080/ (8080 is the default but it’ll bump to a new port if that one is taken, so use whatever port shows up when you run the `--serve` command).
