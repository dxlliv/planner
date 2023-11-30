---
layout: home

title: dxlliv/ig-planner
titleTemplate: Plan your Instagram profile like a pro

hero:
  text: Plan your Instagram profile like a pro
  tagline: Simple, fast, and versatile. Relieve the OCD<br />and build your definitive Instagram profile.
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/dxlliv/ig-planner
  image:
    src: https://dxlliv.github.io/ig-planner/logo.svg
    alt: dxlliv/ig-planner

features:
  - title: 🖼️ &nbsp; Planner for nerds
    details: "Plan your Instagram posts and preview<br />what your profile grid will look like"
  - title: 📱 &nbsp; Supported media
    details: "You can preview all kind of media:<br />images, videos, albums and iframes"
  - title: 📐 &nbsp; Extra tools
    details: "These tools will help you with color<br />consistency and media alignment"

    description: Plan your Instagram posts to preview what your profile grid will look like
    meta:
      - name: og:title
        content: IG Planner
      - name: og:description
        content: Plan your Instagram posts to preview what your profile grid will look like
---

<style>
:root {
  --vp-home-hero-image-background-image: linear-gradient(-25deg, #55555522 25%, #66666622 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPFeature {
    border: 1px solid #e9e9e9 !important;
}

html.dark img.image-src {
    filter: invert(1);
}

html.dark .VPFeature {
    border: 1px solid transparent !important;
}
</style>