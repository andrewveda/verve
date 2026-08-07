/**
 * Verve Desktop Navigation Framework
 * Injects a persistent nav bar on desktop screens.
 * Add <script src="framework/nav.js"></script> before </body> on every page.
 */
(function () {
  'use strict';

  /* ── 1. Environment detection ── */
  const isDesktop = window.innerWidth > 768 &&
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (!isDesktop && !localStorage.getItem('verve_force_desktop')) return;

  /* ── 2. Prevent double-injection ── */
  if (document.getElementById('verve-nav-bar')) return;

  /* ── 3. Inject styles ── */
  const css = document.createElement('style');
  css.textContent = `
    #verve-nav-bar{
      position:fixed;
      top:0;left:0;right:0;
      height:48px;
      background:#1a0b0e;
      border-bottom:1px solid rgba(201,168,76,0.35);
      display:flex;
      align-items:center;
      gap:8px;
      padding:0 12px;
      z-index:2147483647;
      font-family:'DM Mono',monospace;
      font-size:13px;
      color:#faf7f2;
      user-select:none;
      -webkit-app-region:drag;
    }
    #verve-nav-bar button,#verve-nav-bar a{
      -webkit-app-region:no-drag;
    }
    .vn-btn{
      background:rgba(201,168,76,0.12);
      border:1px solid rgba(201,168,76,0.25);
      color:#e8c97a;
      border-radius:6px;
      width:32px;height:32px;
      display:flex;align-items:center;justify-content:center;
      cursor:pointer;
      font-size:16px;
      transition:background .15s,border-color .15s;
    }
    .vn-btn:hover:not(:disabled){
      background:rgba(201,168,76,0.25);
      border-color:rgba(201,168,76,0.6);
    }
    .vn-btn:disabled{
      opacity:.35;cursor:not-allowed;
    }
    .vn-sep{
      width:1px;height:20px;background:rgba(201,168,76,0.2);margin:0 4px;
    }
    .vn-title{
      flex:1;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      text-align:center;
      color:#c9a84c;
      font-weight:600;
      letter-spacing:0.5px;
    }
    .vn-home{
      display:flex;align-items:center;gap:6px;
      padding:0 12px;
      text-decoration:none;
      color:#faf7f2;
      font-weight:700;
      font-family:'Playfair Display',serif;
      font-size:15px;
    }
    .vn-home span{
      color:#c9a84c;
    }
    .vn-extern{
      margin-left:auto;
      font-size:11px;
      color:#7a766f;
      padding:4px 8px;
      border:1px dashed rgba(201,168,76,0.2);
      border-radius:4px;
    }
    /* Push content down so nothing hides under the bar */
    body{
      padding-top:48px !important;
    }
    /* If body was overflow:hidden, keep it but account for bar */
    html,body{
      height:100%;
    }
  `;
  document.head.appendChild(css);

  /* ── 4. Build nav bar ── */
  const nav = document.createElement('div');
  nav.id = 'verve-nav-bar';

  const pageTitle = document.title || 'Verve';

  nav.innerHTML = `
    <button class="vn-btn" id="vnBack" title="Back">←</button>
    <button class="vn-btn" id="vnForward" title="Forward">→</button>
    <div class="vn-sep"></div>
    <a class="vn-home" href="index.html" title="Home">
      <span>◈</span> Verve
    </a>
    <div class="vn-title" title="${pageTitle.replace(/"/g, '&quot;')}">${pageTitle}</div>
    <button class="vn-btn" id="vnRefresh" title="Refresh">↻</button>
    <div class="vn-extern" title="Links to other Andrew Veda apps open in a new tab">Desktop Mode</div>
  `;

  document.body.insertBefore(nav, document.body.firstChild);

  /* ── 5. Button logic ── */
  const backBtn = document.getElementById('vnBack');
  const fwdBtn  = document.getElementById('vnForward');
  const refreshBtn = document.getElementById('vnRefresh');

  function updateButtons() {
    backBtn.disabled = !history.length || history.length <= 1;
    // Forward can't be detected reliably across origins; leave enabled
  }

  backBtn.addEventListener('click', () => history.back());
  fwdBtn.addEventListener('click', () => history.forward());
  refreshBtn.addEventListener('click', () => location.reload());

  window.addEventListener('popstate', updateButtons);
  updateButtons();

  /* ── 6. Link interception ── */
  document.addEventListener('click', function (e) {
    const a = e.composedPath ? e.composedPath().find(el => el.tagName === 'A') : e.target.closest('a');
    if (!a) return;

    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;

    const url = new URL(href, location.href);

    /* Internal Verve links → allow normal navigation (relative paths) */
    const isInternalVerve = url.hostname === location.hostname &&
                            url.pathname.startsWith('/verve/');

    /* External Andrew Veda apps → new tab */
    const isExternalApp = url.hostname === 'andrewveda.com' &&
                          !url.pathname.startsWith('/verve/');

    /* Other external → new tab */
    const isExternal = url.hostname !== location.hostname;

    if (isExternalApp || isExternal) {
      e.preventDefault();
      window.open(url.href, '_blank');
      return;
    }

    /* If it's an absolute internal verve link, normalize to relative */
    if (isInternalVerve && url.hostname === location.hostname) {
      const relative = url.pathname.replace(/^\\/verve\\//, '');
      if (relative !== href) {
        e.preventDefault();
        location.href = relative;
      }
    }
  });

  /* ── 7. Console greeting ── */
  console.log('%c Verve Desktop Framework ', 'background:#1a0b0e;color:#c9a84c;padding:4px 8px;border-radius:4px;');
})();