import{o,k as s,b6 as r,_ as l,d as i,bE as m,l as p,n as a,b2 as g}from"./index.ca2546a6.js";const d={class:"markdown-body"},h=r(`<h2>Configuration</h2><p>Set the global config</p><pre><code class="language-shell">git config --global user.name &quot;[name]&quot;
git config --global user.email &quot;[email]&quot;
</code></pre><h2>Get started</h2><p>Create a git repository</p><pre><code class="language-shell">git init
</code></pre><p>Clone an existing git repository</p><pre><code class="language-shell">git clone [url]
</code></pre><h2>Commit</h2><p>Commit all tracked changes</p><pre><code class="language-shell">git commit -am &quot;[commit message]&quot;
</code></pre><p>Add new modifications to the last commit</p><pre><code class="language-shell">git commit --amend --no-edit
</code></pre><h2>I\u2019ve made a mistake</h2><p>Change last commit message</p><pre><code class="language-shell">git commit --amend
</code></pre><p>Undo most recent commit and keep changes</p><pre><code class="language-shell">git reset HEAD~1
</code></pre><p>Undo the <code>N</code> most recent commit and keep changes</p><pre><code class="language-shell">git reset HEAD~N
</code></pre><p>Undo most recent commit and get rid of changes</p><pre><code class="language-shell">git reset HEAD~1 --hard
</code></pre><p>Reset branch to remote state</p><pre><code class="language-shell">git fetch origin
git reset --hard origin/[branch-name]
</code></pre><h2>Miscellaneous</h2><p>Renaming the local master branch to main</p><pre><code class="language-shell">git branch -m master main
</code></pre>`,27),_=[h],u={__name:"git-memo",setup(n,{expose:e}){return e({frontmatter:{}}),(c,b)=>(o(),s("div",d,_))}};const f=i({__name:"git-memo",setup(n){g(t=>({"44b0bff8":a(e).cardColor}));const e=m();return(t,c)=>(o(),s("div",null,[p(a(u))]))}});var k=l(f,[["__scopeId","data-v-69ec78ec"]]);export{k as default};
