import{_ as n,c as s,o as a,a as t}from"./app.f8b9e5a6.js";const m='{"title":"Supported Media","description":"","frontmatter":{},"headers":[{"level":2,"title":"Images","slug":"images"},{"level":2,"title":"Videos","slug":"videos"},{"level":2,"title":"Albums","slug":"albums"},{"level":2,"title":"Reels","slug":"reels"}],"relativePath":"media.md"}',p={},o=t(`<h1 id="supported-media" tabindex="-1">Supported Media <a class="header-anchor" href="#supported-media" aria-hidden="true">#</a></h1><p>Instagram Planner supports different media types: images, videos, albums and reels.<br> Add your files in the <code>config/profiles/{id}/media/</code> folder and define all the media.</p><h2 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dxlliv&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// strict image import</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4.jpg&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// short image import</span>
      <span class="token string">&quot;3.jpg&quot;</span><span class="token punctuation">,</span>

      <span class="token comment">// other imports</span>
      <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;1.jpg&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="videos" tabindex="-1">Videos <a class="header-anchor" href="#videos" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dxlliv&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// strict video import</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;video&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4-video.mp4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// other imports</span>
      <span class="token string">&quot;3.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;1.jpg&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="albums" tabindex="-1">Albums <a class="header-anchor" href="#albums" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dxlliv&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// import images as an album</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;album&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;4.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4x1.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4x2.jpg&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// other imports</span>
      <span class="token string">&quot;3.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;1.jpg&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="reels" tabindex="-1">Reels <a class="header-anchor" href="#reels" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dxlliv&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// reel import</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reel&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4-reel.mp4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// other imports</span>
      <span class="token string">&quot;3.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;1.jpg&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10),e=[o];function c(u,l,r,i,k,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{m as __pageData,g as default};
