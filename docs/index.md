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
      text: Host Your Planner
      link: /getting-started
  image:
    src: https://dxlliv.github.io/planner/app/twitterImage.webp
    alt: dxlliv/planner

features:
  - title: 🖼️ &nbsp; Organize your grid
    details: "Plan your social media and preview <br />what your profile grid will look like"
  - title: 🎬 &nbsp; A wide range of media
    details: "It supports both local and remote <br />images, videos, albums and iframes"
  - title: ✏️ &nbsp; Limitless changes
    details: "Edit your media as much as you want <br />just like you would with your website"
  - title: 💾 &nbsp; Backup your account
    details: "It can serve as a planner but also as <br />a backup for all of your best images"
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

Whether you're obsessed with perfection, passionate about aesthetics, or simply love curating your feed, <br class="hidden-sm-and-down" />
<b>dxlliv/planner</b> is the perfect tool that supports your Instagram strategy on the fly. No registration required.

<br />

### Dive into dxlliv/planner

For nerds, enthusiasts, and those who take their Instagram game seriously.  
Bootstrap a planner in seconds with a command and start planning your grid.

```sh
npx create-plxnner planner
```

The project runs entirely in the browser and what you upload is stored locally.  
You can use the demo safely, just create a new profile and start organizing.

<style>
body {
  --vp-home-hero-image-background-image: linear-gradient(-25deg, #55555522 25%, #66666622 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  body {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  body {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.vp-doc.container {
    margin-top: 120px !important;
    text-align: center;

    @media(max-width: 899px) {
        display: none;
    }
}

.vp-doc.container .language-sh {
    max-width: 480px;
    margin: 30px auto;
}

.vp-doc.container .language-sh code {
    text-align: center;
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

@media (min-width: 960px) {
    .VPHero {
        margin-top: 0 !important;
        margin-bottom: 100px;
    }

    .image-src {
        max-height: 420px !important;
        margin-top: 30px !important;
    }
}

@media(max-width: 959px) {
    .VPFeatures {
        margin-top: 32px;
    }

    .action {
        display: block;
        width: 100%;
    }

    .image-container {
        margin-bottom: 24px !important;
    }

    .copyright {
        margin: 0 auto;
        max-width: 200px;
    }
}

.VPHome {
    margin-bottom: 72px;
}

.VPHome .VPButton.medium {
    font-size: 16px !important;
}

.VPImage {
    border-radius: 6px;
    border: 1px solid #00000009;
}

.VPFeature {
    border: 1px solid #e9e9e9 !important;
}

html.dark .VPFeature {
    border: 1px solid transparent !important;
}
</style>