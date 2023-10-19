import{_ as n,c as s,o as a,a as t}from"./app.d3a6ac0f.js";const q='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Configuration","slug":"configuration"},{"level":3,"title":"Set up a new user","slug":"set-up-a-new-user"},{"level":3,"title":"Add some media","slug":"add-some-media"},{"level":3,"title":"Media support","slug":"media-support"},{"level":2,"title":"Tools","slug":"tools"},{"level":3,"title":"Dark theme","slug":"dark-theme"},{"level":3,"title":"Text ruler","slug":"text-ruler"}],"relativePath":"getting-started.md"}',o={},p=t(`<h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>Be sure you have <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a> and NPM installed.<br> Clone the repository and move to the project directory:</p><div class="language-bash"><pre><code><span class="token function">git</span> clone https://github.com/dxlliv/ig-planner.git <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ig-planner
</code></pre></div><p>Install dependencies and run the project:</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run dev

<span class="token comment"># or use yarn</span>
<span class="token function">yarn</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> dev
</code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>Here is the users configuration you can find in <code>config/users.json</code>.</p><div class="language-json"><pre><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dxlliv&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avatar.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;website&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;followers_count&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token property">&quot;follows_count&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;posts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;3.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.jpg&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlights&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="set-up-a-new-user" tabindex="-1">Set up a new user <a class="header-anchor" href="#set-up-a-new-user" aria-hidden="true">#</a></h3><p>Define your users under the <code>config/users.json</code> configuration file<br> and create a folder for each user in <code>public/profiles/{username}</code>.</p><p>Place an image called <code>avatar.jpg</code> in your profile folder.</p><h3 id="add-some-media" tabindex="-1">Add some media <a class="header-anchor" href="#add-some-media" aria-hidden="true">#</a></h3><p>IG Planner supports different media types: image, video, album and iframe.</p><p>Add your media to the profile media folder in <code>public/profiles/{username}/media/</code>,<br> then define all your media in the user configuration like the example above.</p><h3 id="media-support" tabindex="-1">Media support <a class="header-anchor" href="#media-support" aria-hidden="true">#</a></h3><p>IG Planner supports different media types: image, video, album and iframe.<br> Add your files to the <code>config/profiles/{id}/media/</code> folder and define all your media.</p><h4 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-hidden="true">#</a></h4><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span>
</code></pre></div><h4 id="videos" tabindex="-1">Videos <a class="header-anchor" href="#videos" aria-hidden="true">#</a></h4><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dxlliv&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;video&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4-video.mp4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      
      <span class="token comment">// shortened imports (todo)</span>
      <span class="token string">&quot;3.mp4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;2.mp4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;1.mp4&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="albums" tabindex="-1">Albums <a class="header-anchor" href="#albums" aria-hidden="true">#</a></h4><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dxlliv&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// import images as album</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;album&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;4.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4x1.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4x2.jpg&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// shortened imports</span>
      <span class="token string">&quot;3.mp4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;1.jpg&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="iframes" tabindex="-1">Iframes <a class="header-anchor" href="#iframes" aria-hidden="true">#</a></h4><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dxlliv&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// use iframe</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iframe&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;href&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:3000/my-page&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// shortened imports</span>
      <span class="token string">&quot;3.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;1.jpg&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="tools" tabindex="-1">Tools <a class="header-anchor" href="#tools" aria-hidden="true">#</a></h2><h3 id="dark-theme" tabindex="-1">Dark theme <a class="header-anchor" href="#dark-theme" aria-hidden="true">#</a></h3><p>Press <strong>D</strong> to toggle dark theme.</p><h3 id="text-ruler" tabindex="-1">Text ruler <a class="header-anchor" href="#text-ruler" aria-hidden="true">#</a></h3><p>Press <strong>R</strong> to show some rulers.</p>`,30),e=[p];function c(r,u,l,i,d,k){return a(),s("div",null,e)}var g=n(o,[["render",c]]);export{q as __pageData,g as default};
