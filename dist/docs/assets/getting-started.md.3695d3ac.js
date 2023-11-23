import{_ as n,c as s,o as a,a as t}from"./app.4ed376f9.js";const h='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Configuration","slug":"configuration"},{"level":3,"title":"Set up a new user","slug":"set-up-a-new-user"},{"level":3,"title":"Provide your media","slug":"provide-your-media"},{"level":2,"title":"Tools","slug":"tools"},{"level":3,"title":"Dark theme","slug":"dark-theme"},{"level":3,"title":"Text ruler","slug":"text-ruler"}],"relativePath":"getting-started.md"}',o={},p=t(`<h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>Be sure you have <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a> and NPM installed.<br> Clone the repository and move to the project directory.</p><div class="language-bash"><pre><code><span class="token function">git</span> clone https://github.com/dxlliv/ig-planner.git <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ig-planner
</code></pre></div><p>Install dependencies and run the project.</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run dev

<span class="token comment"># or use yarn</span>
<span class="token function">yarn</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> dev
</code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>Define your profile using your favorite editor and create a <code>config.json</code> file.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dxlliv&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avatar.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;website&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;followers_count&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token property">&quot;follows_count&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;posts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;3.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.jpg&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;highlights&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="set-up-a-new-user" tabindex="-1">Set up a new user <a class="header-anchor" href="#set-up-a-new-user" aria-hidden="true">#</a></h3><p>After defining your profile configuration, create a new folder under <code>public/user/{username}</code> and put the <code>config.json</code> you created just before, making sure you have provided a valid JSON.</p><p>Then you have to define the profile path in the root <code>config.json</code>, like the example.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;user/dxlliv&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;user/dxvfpv&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;user/{username}&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Place an image called <code>avatar.jpg</code> in your profile folder.</p><h3 id="provide-your-media" tabindex="-1">Provide your media <a class="header-anchor" href="#provide-your-media" aria-hidden="true">#</a></h3><p>This planner supports different media types: images, videos, albums and iframes.</p><p>Place your media in the <code>public/user/{username}/media/</code> and define all of your content in the profile configuration like the examples. Create the <code>media</code> folder if you are setting a new user.</p><h4 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-hidden="true">#</a></h4><p>You can short import images just defining the path, without the <code>type</code> property.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4.jpg&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// shortened imports</span>
    <span class="token string">&quot;3.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;1.jpg&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="videos" tabindex="-1">Videos <a class="header-anchor" href="#videos" aria-hidden="true">#</a></h4><p>As for images, you can short import videos but it will used the first frame as cover.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;video&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4.mp4&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;reel&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// optional</span>
      <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token number">15</span> <span class="token comment">// optional</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// shortened imports</span>
    <span class="token string">&quot;3.mp4&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;2.mp4&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;1.mp4&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can set a custom cover using strings like <code>4-cover.jpg</code> providing the image in the media folder, or simply use a number that will set a specific frame of your video as the cover.</p><h4 id="albums" tabindex="-1">Albums <a class="header-anchor" href="#albums" aria-hidden="true">#</a></h4><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// import images as album</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;album&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;4.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4x1.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4x2.jpg&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// shortened import</span>
    <span class="token punctuation">[</span><span class="token string">&quot;3.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3x1.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3x2.jpg&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// other imports</span>
    <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;1.jpg&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="iframes" tabindex="-1">Iframes <a class="header-anchor" href="#iframes" aria-hidden="true">#</a></h4><p>You could use iframes if you are using external tools, or maybe to define a YouTube Short as reel.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iframe&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;href&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:3000/my-post&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// other imports</span>
    <span class="token string">&quot;3.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;1.jpg&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="tools" tabindex="-1">Tools <a class="header-anchor" href="#tools" aria-hidden="true">#</a></h2><h3 id="dark-theme" tabindex="-1">Dark theme <a class="header-anchor" href="#dark-theme" aria-hidden="true">#</a></h3><p>Press <strong>D</strong> to toggle dark theme.</p><h3 id="text-ruler" tabindex="-1">Text ruler <a class="header-anchor" href="#text-ruler" aria-hidden="true">#</a></h3><p>Press <strong>R</strong> to show some rulers.</p>`,34),e=[p];function u(c,r,l,i,k,d){return a(),s("div",null,e)}var q=n(o,[["render",u]]);export{h as __pageData,q as default};
