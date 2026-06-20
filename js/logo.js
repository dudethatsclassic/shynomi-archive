// Global logo component
function getLogo(href = '/') {
  const root = href.startsWith('../') ? '../../' : './';
  return `<a class="site-logo" href="${href}"><img class="site-logo-img" src="${root}favicon.png" alt=""><span class="site-logo-text">Shynomi's Live<span>Archive</span></span></a>`;
}
