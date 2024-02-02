---
layout: home

title: dxlliv/planner
titleTemplate: Plan your Instagram profile like a pro

hero:
  text: Plan your social <br />profiles like a pro
  tagline: Simple, fast, and versatile. <br class="sm" />Geek your grid <br />and build your <br class="sm" />definitive Instagram profile.
  actions:
    - theme: brand
      text: Try Planner
      link: https://dxlliv.github.io/planner
    - theme: alt
      text: Host your Planner
      link: /getting-started
  image:
    src: https://dxlliv.github.io/planner/logo.svg
    alt: dxlliv/planner

features:
  - title: 🖼️ &nbsp; Organize your grid
    details: "Plan your Instagram posts and preview <br />what your profile grid will look like"
  - title: 🎬 &nbsp; A wide range of media
    details: "It supports both local and remote <br />images, videos, albums and iframes"
  - title: ✏️ &nbsp; Limitless changes
    details: "Edit your media as much as you want <br />just like you would with your website"
  - title: 💾 &nbsp; Backup your account
    details: "It can serve as a planner but also <br />as a backup for all of your best images"
  - title: 🗃️ &nbsp; Host it anywhere
    details: "Take ownership and own your media, <br />put your files in a repo and deploy"
  - title: 📐 &nbsp; Extra tools
    details: "These will help you with consistency, <br />color adjustment and media alignment"

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

.tagline br.sm {
display: none;
}

@media (max-width: 479px) {
  .tagline br {
    display: none;
  }

  .tagline br.sm {
    display: block;
  }
}

@media (max-width: 1219px) {
  .items .details br {
    display: none;
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