/* Local-first portfolio: works by opening index.html directly, or from a static host such as GitHub Pages. */
(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS || [];
  const categories = window.PORTFOLIO_CATEGORIES || {};
  const config = window.PORTFOLIO_CONFIG || {};
  const q = s => document.querySelector(s);
  const esc = (input = '') => String(input).replace(/[&<>"']/g, x => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
  const link = (p) => 'project.html?id=' + encodeURIComponent(p.id);
  const tagList = (items, klass = 'tech-tags') => `<div class="${klass}">${items.map(t => `<span>${esc(t)}</span>`).join('')}</div>`;
  const projectDate = new Date().getFullYear();

  function initShared() {
    const name = config.name || 'Engineering Portfolio';
    if (q('#logoName')) q('#logoName').innerHTML = `${esc(name.toUpperCase())}<small>ENGINEERING PORTFOLIO</small>`;
    if (q('#footerBrand')) q('#footerBrand').innerHTML = `${esc(config.shortName || 'M.')} <span>ENGINEERING PORTFOLIO</span>`;
    if (q('#copyright')) q('#copyright').textContent = `© ${projectDate} ${name}`;
    const logo = q('.logo-icon');
    if (logo && config.shortName) logo.textContent = esc(config.shortName);
    const btn=q('#menuToggle'), nav=q('#primaryNav');
    if (btn && nav) {
      btn.addEventListener('click', () => {const opened=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(opened));});
      nav.querySelectorAll('a').forEach(el => el.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}));
      document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}});
    }
  }
  function cardHTML(p) {
    return `<a class="project-card" href="${link(p)}" aria-label="View ${esc(p.title)} case study">
      <div class="card-image"><img src="${esc(p.cover)}" alt="${esc(p.title)} project visual" loading="lazy"><span class="card-number">PROJECT / ${p.number}</span><span class="card-arrow" aria-hidden="true">↗</span></div>
      <div class="card-content"><span class="card-category">${esc(p.categoryLabel)}</span><h3>${esc(p.title)}</h3><p>${esc(p.card)}</p>${tagList(p.stack.slice(0,3))}</div></a>`;
  }
  function featureHTML(p, idx) {
    return `<a class="feature-item feature-${idx+1}" href="${link(p)}" aria-label="Explore ${esc(p.title)}">
      <img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy"><div class="feature-gradient"></div>
      <span class="feature-id">FEATURED / ${p.number}</span><div class="feature-content"><span class="feature-overline">${esc(p.categoryLabel)} / ${esc(p.status)}</span>
      <h3>${esc(p.title)}</h3><p>${esc(p.card)}</p><span class="feature-link">Explore case study <b>↗</b></span></div></a>`;
  }
  function renderHome() {
    const featured = [2,1,12].map(id=>projects.find(p=>p.id===id)).filter(Boolean);
    if(q('#featuredGrid')) q('#featuredGrid').innerHTML=featured.map(featureHTML).join('');
    if(q('#aboutIntro')) q('#aboutIntro').textContent=config.introduction||'';
    if(q('#aboutBody')) q('#aboutBody').textContent=config.about||'';
    if(q('#contactActions')) {
      const links=[];
      if(config.email) links.push(`<a class="button button-primary" href="mailto:${encodeURIComponent(config.email)}">Email me <span>↗</span></a>`);
      if(config.phone) links.push(`<a class="button button-outline" href="tel:${esc(config.phone.replace(/[^+\d]/g,''))}">Call <span>↗</span></a>`);
      if(config.linkedin) links.push(`<a class="button button-outline" href="${esc(config.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a>`);
      if(config.github) links.push(`<a class="button button-outline" href="${esc(config.github)}" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>`);
      if(config.resume) links.push(`<a class="button button-outline" href="${esc(config.resume)}">View CV <span>↗</span></a>`);
      q('#contactActions').innerHTML=links.length?links.join(''):'<span class="contact-note">Contact links are being updated.</span>';
    }
    let active='all',text='';
    const labels={all:'All projects',robotics:'Robotics',iot:'Embedded / IoT',cad:'CAD & Kinematics',vision:'Computer Vision',software:'AI / Software',data:'Data Analytics'};
    const filterBar=q('#filterBar'),search=q('#projectSearch'),grid=q('#projectGrid');
    if (!filterBar || !search || !grid) return;
    const countFor = k=>k==='all'?projects.length:projects.filter(p=>p.category===k).length;
    filterBar.innerHTML=Object.keys(labels).map(k=>`<button type="button" class="filter-pill ${k==='all'?'selected':''}" data-filter="${k}" aria-pressed="${k==='all'?'true':'false'}">${esc(labels[k])}<span>${countFor(k)}</span></button>`).join('');
    function update() {
      const words=text.toLowerCase().trim();
      const filtered=projects.filter(p=>(active==='all'||p.category===active)&&(!words||[p.title,p.subtitle,p.description,p.categoryLabel,p.status,...p.stack].join(' ').toLowerCase().includes(words)));
      grid.innerHTML=filtered.map(cardHTML).join('');
      q('#resultsCount').textContent=`SHOWING ${filtered.length.toString().padStart(2,'0')} OF ${projects.length} PROJECTS`;
      q('#emptyState').hidden=filtered.length>0;
      filterBar.querySelectorAll('button').forEach(b=>{const yes=b.dataset.filter===active;b.classList.toggle('selected',yes);b.setAttribute('aria-pressed',String(yes));});
    }
    filterBar.addEventListener('click',e=>{const b=e.target.closest('button[data-filter]');if(!b)return;active=b.dataset.filter;update();});
    search.addEventListener('input',e=>{text=e.target.value;update();});
    const requested=new URLSearchParams(location.search).get('category');
    if(requested && (requested in labels)) active=requested;
    update();
  }
  function rows(items, klass='bullet-list') {return `<ul class="${klass}">${items.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`;}
  function caseStudyHTML(p){
    const prev=projects.find(t=>t.id===p.id-1)||projects[projects.length-1];
    const next=projects.find(t=>t.id===p.id+1)||projects[0];
    const stats=p.stats.length?`<div class="case-stats">${p.stats.map(s=>`<div><strong>${esc(s[0])}</strong><span>${esc(s[1])}</span></div>`).join('')}</div>`:'';
    const steps=p.workflow.map((s,i)=>`<div class="workflow-step"><span>${String(i+1).padStart(2,'0')}</span><p>${esc(s)}</p></div>`).join('');
    const gallery = p.gallery.length?`<section class="case-section case-gallery-section" id="gallery"><div class="section-top"><div><span class="section-code">04 / PROJECT GALLERY</span><h2>Inside the <span>project.</span></h2></div><p class="section-intro">Original project photographs, CAD screenshots and video stills. Select an image to enlarge it.</p></div><div class="case-gallery">${p.gallery.map((im,i)=>`<button class="gallery-tile" type="button" data-large="${esc(im.src)}" data-caption="${esc(im.caption)}" aria-label="Enlarge ${esc(im.caption)}"><img src="${esc(im.src)}" alt="${esc(im.caption)}" loading="lazy"><span>${String(i+1).padStart(2,'0')} / ${esc(im.caption)}</span></button>`).join('')}</div></section>`:'';
    const video=p.video?`<section class="case-section" id="demonstration"><div class="section-top"><div><span class="section-code">${p.gallery.length?'05':'04'} / ORIGINAL DEMONSTRATION</span><h2>See it in <span>action.</span></h2></div><p class="section-intro">A video shared with the original project materials. Use play and fullscreen to inspect the demonstration.</p></div><div class="video-layout"><div class="video-wrap"><video controls preload="metadata" playsinline poster="${esc(p.cover)}"><source src="${esc(p.video)}" type="video/mp4">Your browser does not support HTML5 video.</video></div><div class="video-caption"><span class="small-label">PROJECT VIDEO / ${p.number}</span><h3>Demonstration footage</h3><p>Directly from the supplied project media. Playback is local, with no third-party video service required.</p><a class="underlined-link" href="${esc(p.video)}" download>Download this video <span>↓</span></a></div></div></section>`:'';
    const outcome= p.results.length?rows(p.results):'';
    const future=p.roadmap.length?`<div class="result-card roadmap-card"><span class="section-code">NEXT ITERATIONS</span><h3>Where to go from here</h3>${rows(p.roadmap)}</div>`:'';
    return `<div class="case-page">
      <section class="case-hero"><div class="shell"><div class="case-breadcrumb"><a href="index.html#work">← ALL PROJECTS</a><span>/</span><span>${esc(p.categoryLabel)}</span><span>/</span><b>${p.number}</b></div>
      <div class="case-header-grid"><div><span class="eyebrow"><span class="live-dot"></span> PROJECT ${p.number} / ${esc(p.status).toUpperCase()}</span><h1>${esc(p.title)}<span>.</span></h1></div><div class="case-subheading"><p>${esc(p.subtitle)}</p>${tagList(p.stack.slice(0,5))}</div></div>
      <div class="case-cover"><img src="${esc(p.cover)}" alt="${esc(p.title)} project cover image"><div class="cover-shade"></div><span class="cover-index">${p.number} / 18 <i>MECHATRONICS PORTFOLIO</i></span><span class="cover-label">${esc(p.categoryLabel)}</span></div>${stats}
      </div></section>
      <div class="shell case-body"><section class="case-section case-overview" id="overview"><div class="case-side-label"><span class="section-code">01 / PROJECT OVERVIEW</span><span class="side-line"></span><span class="case-status">${esc(p.status)}</span></div><div class="case-main-copy"><h2>From idea to <span>engineering.</span></h2><p class="large-paragraph">${esc(p.description)}</p><div class="info-columns"><div><h3>The challenge</h3><p>${esc(p.challenge)}</p></div><div><h3>The approach</h3><p>${esc(p.solution)}</p></div></div></div></section>
      <section class="case-section"><div class="section-top"><div><span class="section-code">02 / HOW IT WORKS</span><h2>System <span>thinking.</span></h2></div><p class="section-intro">A simple engineering view of the project path from initial input through implementation and demonstration.</p></div><div class="workflow-grid">${steps}</div></section>
      <section class="case-section"><div class="section-top"><div><span class="section-code">03 / ENGINEERING DETAILS</span><h2>Under the <span>surface.</span></h2></div><p class="section-intro">Design decisions, implementation scope, tools and demonstrated capabilities.</p></div><div class="detail-columns"><div class="detail-card"><span class="small-label">ENGINEERING SCOPE</span><h3>What was developed</h3>${rows(p.contributions)}</div><div class="detail-card"><span class="small-label">PROJECT HIGHLIGHTS</span><h3>Key technical elements</h3>${rows(p.highlights)}</div></div><div class="technology-panel"><span class="small-label">TOOLS, COMPONENTS & METHODS</span>${tagList(p.stack,'technology-tags')}</div></section>
      ${gallery}${video}
      <section class="case-section"><div class="section-top"><div><span class="section-code">${p.video?'06':'05'} / RESULTS & NEXT STEPS</span><h2>What it <span>demonstrates.</span></h2></div><p class="section-intro">Outcomes are described from supplied project material; planned features are listed separately from completed work.</p></div><div class="outcome-grid"><div class="result-card"><span class="section-code">RESULTS & EVIDENCE</span><h3>Project outcomes</h3>${outcome}</div>${future}</div>${p.document?`<div class="pdf-bar"><div><span class="small-label">ORIGINAL PROJECT MATERIAL</span><h3>Technical presentation</h3><p>Download the supporting project slides with architecture, components and test observations.</p></div><a class="button button-primary" href="${esc(p.document)}" download>Project PDF <span>↓</span></a></div>`:''}</section>
      <section class="case-section related-section"><div class="section-top"><div><span class="section-code">CONTINUE EXPLORING</span><h2>More engineering <span>work.</span></h2></div><a href="index.html#work" class="underlined-link">View all 18 projects ↗</a></div><div class="related-grid">${[prev,next].map(t=>`<a href="${link(t)}" class="related-card"><img src="${esc(t.cover)}" alt="${esc(t.title)}"><div><span>PROJECT ${t.number} / ${esc(t.categoryLabel)}</span><strong>${esc(t.title)}</strong></div><b>↗</b></a>`).join('')}</div></section>
      </div></div>`;
  }
  function enableGallery() {
    const dialog=q('#imageDialog'),img=q('#dialogImage'),caption=q('#dialogCaption');
    if(!dialog)return;
    document.addEventListener('click',e=>{const b=e.target.closest('[data-large]');if(!b)return;img.src=b.dataset.large;img.alt=b.dataset.caption;caption.textContent=b.dataset.caption;dialog.showModal();});
    q('#dialogClose').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  }
  function renderProject() {
    const id=Number(new URLSearchParams(location.search).get('id'));
    const p=projects.find(x=>x.id===id);
    if(!p){q('#caseStudy').innerHTML='<div class="shell missing-project"><span class="section-code">PROJECT NOT FOUND</span><h1>That project does not exist.</h1><p>Choose from the complete project library.</p><a class="button button-primary" href="index.html#work">Back to all projects ↗</a></div>';return;}
    document.title=`${p.title} | ${config.name || 'Mechatronics Portfolio'}`;
    q('meta[name="description"]').setAttribute('content',p.card);
    q('#caseStudy').innerHTML=caseStudyHTML(p);
    enableGallery();
  }
  initShared();
  if(document.body.dataset.page==='home')renderHome();
  if(document.body.dataset.page==='project')renderProject();
})();
