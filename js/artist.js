/* artist.js — renders the artist page from ARTIST_DATA global */

function fmtDate(show) {
  const month = show.month != null ? String(show.month).padStart(2, '0') : '??';
  const day   = show.day   != null ? String(show.day).padStart(2, '0')   : '??';
  return show.year + '-' + month + '-' + day;
}

function versionBadge(v) {
  const map = {
    'SBD':       'badge-sbd',
    'AUD':       'badge-aud',
    'PRO':       'badge-pro',
    'MIX':       'badge-mix',
    'Silver CD': 'badge-silvercd',
  };
  const cls = map[v] || 'badge-aud';
  return '<span class="badge ' + cls + '">' + esc(v) + '</span>';
}

function formatBadge(f) {
  if (!f) return '';
  const video = ['DVD', 'MKV', 'MP4', 'AVI', 'MPG', 'TS', 'WMV'];
  if (video.some(v => f.toUpperCase().includes(v))) return '<span class="badge badge-video">' + esc(f) + '</span>';
  if (f.toUpperCase().includes('MP3')) return '<span class="badge badge-mp3">' + esc(f) + '</span>';
  const cls = f.includes('24') ? 'badge-flac24' : 'badge-flac';
  return '<span class="badge ' + cls + '">' + esc(f) + '</span>';
}

function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function renderMiscRow(item) {
  if (item.type === 'show') {
    const month    = item.month != null ? String(item.month).padStart(2,'0') : '??';
    const day      = item.day   != null ? String(item.day).padStart(2,'0')   : '??';
    const dateDisp = item.year  ? (item.year + '-' + month + '-' + day) : '';
    const notesHtml = item.notes ? '<div class="show-notes">' + esc(item.notes) + '</div>' : '';
    return '<tr class="show-row">'
      + '<td class="col-date">' + esc(dateDisp) + '</td>'
      + '<td class="col-venue"><div>' + esc(item.venue || '') + '</div>' + notesHtml + '</td>'
      + '<td class="col-location">' + esc(item.location || '') + '</td>'
      + '<td class="col-badges"><div class="badge-group">' + versionBadge(item.version) + formatBadge(item.format) + '</div></td>'
      + '</tr>';
  } else {
    return '<tr class="show-row">'
      + '<td class="col-date"></td>'
      + '<td class="col-venue"><div>' + esc(item.label || '') + '</div></td>'
      + '<td class="col-location"></td>'
      + '<td class="col-badges"><div class="badge-group">'
        + (item.version ? versionBadge(item.version) : '')
        + formatBadge(item.format)
        + '</div></td>'
      + '</tr>';
  }
}

function render() {
  const d = ARTIST_DATA;

  // Merge official dates from separate file (survives Apps Script re-exports)
  if (typeof ARTIST_OFFICIAL_DATES !== 'undefined' && ARTIST_OFFICIAL_DATES) {
    const officialSet = new Set(ARTIST_OFFICIAL_DATES);
    d.shows.forEach(s => {
      const key = s.year + '-' + String(s.month).padStart(2,'0') + '-' + String(s.day).padStart(2,'0');
      if (officialSet.has(key)) s.official = true;
    });
  }

  document.title = d.name + ' – Live Archive';

  // Group shows by year
  const byYear = {};
  d.years.forEach(y => (byYear[y] = []));
  d.shows.forEach(s => byYear[s.year].push(s));

  // Year nav pills
  const miscPill = (d.misc && d.misc.length)
    ? '<button class="year-pill" data-year="misc">MISC</button>'
    : '';
  const yearNav = d.years.map(y =>
    '<button class="year-pill" data-year="' + y + '">' + y + '</button>'
  ).join('') + miscPill;

  // Show rows by year
  const yearBlocks = d.years.map(year => {
    const rows = byYear[year].map((s, idx) => {
      const showId    = 'show-' + year + '-' + idx;
      const notesHtml = s.notes ? '<div class="show-notes">' + esc(s.notes) + '</div>' : '';
      const hasInfo   = !!s.textFile;
      const clickAttr = hasInfo ? ' data-txt="' + esc(s.textFile) + '"' : '';
      const infoIcon  = hasInfo ? '<span class="show-info-icon" title="View show info"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg></span>' : '';
      return '<tr class="show-row' + (hasInfo ? ' has-info' : '') + '" id="' + showId + '"' + clickAttr + '>'
        + '<td class="col-date">' + fmtDate(s) + '</td>'
        + '<td class="col-venue"><div>' + esc(s.venue) + infoIcon + '</div>' + notesHtml + '</td>'
        + '<td class="col-location">' + esc(s.location) + '</td>'
        + '<td class="col-badges"><div class="badge-group">'
          + versionBadge(s.version) + formatBadge(s.format)
          + (s.recordingVersion != null ? '<span class="badge badge-recver">v' + s.recordingVersion + '</span>' : '')
          + (s.official ? '<span class="badge badge-official">Official</span>' : '')
          + '</div></td>'
        + '</tr>';
    }).join('');
    return '<div class="year-block" id="year-' + year + '">'
      + '<h2 class="year-label">' + year + '</h2>'
      + '<table class="show-table"><tbody>' + rows + '</tbody></table>'
      + '</div>';
  }).join('');

  // Misc section
  const miscHtml = (d.misc && d.misc.length)
    ? '<div class="year-block" id="year-misc">'
        + '<h2 class="year-label">MISC</h2>'
        + '<table class="show-table"><tbody>'
        + d.misc.map(renderMiscRow).join('')
        + '</tbody></table></div>'
    : '';

  const photoSrc = '../../images/' + d.id + '/band.jpg';
  const logoHtml = '<a class="site-logo" href="../../"><img class="site-logo-img" src="../../favicon.png" alt=""><span class="site-logo-text">Shynomi\'s Live<span>Archive</span></span></a>';

  document.getElementById('app').innerHTML = `
    <header class="site-header">
      <div class="container">
        <div class="inner">${logoHtml}</div>
      </div>
    </header>

    <section class="artist-hero">
      <img class="artist-hero-img" src="${photoSrc}" alt="${esc(d.name)}" onerror="this.style.display='none'">
      <div class="artist-hero-gradient"></div>
      <div class="artist-hero-content">
        <div class="container">
          <a class="back-link" href="../../" onclick="if(document.referrer.includes(location.hostname)||document.referrer.startsWith('file:')){history.back();return false;}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
            </svg>
            All Artists
          </a>
          <h1 class="artist-name">${esc(d.name)}</h1>
          <div class="artist-meta">
            <span>${d.showCount} shows</span>
            <span class="dot">·</span>
            <span>${d.firstYear}–${d.lastYear}</span>
          </div>
        </div>
      </div>
    </section>

    <nav class="year-nav">
      <div class="container">
        <div class="year-nav-inner">${yearNav}</div>
      </div>
    </nav>

    <section class="shows-body">
      <div class="container">${yearBlocks}${miscHtml}</div>
    </section>`;

  // Inject modal
  const modal = document.createElement('div');
  modal.id = 'show-info-modal';
  modal.className = 'show-modal';
  modal.innerHTML = `
    <div class="show-modal-backdrop" onclick="closeShowInfo()"></div>
    <div class="show-modal-box">
      <button class="show-modal-close" onclick="closeShowInfo()">✕</button>
      <pre class="show-modal-content" id="show-modal-content">Loading…</pre>
    </div>`;
  document.body.appendChild(modal);

  setupNav();
}

function openShowInfo(filename) {
  const modal = document.getElementById('show-info-modal');
  const content = document.getElementById('show-modal-content');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  content.textContent = 'Loading…';
  fetch('../../shows/' + ARTIST_DATA.id + '/' + encodeURIComponent(filename))
    .then(r => {
      if (!r.ok) throw new Error('Not found');
      return r.text();
    })
    .then(t => {
        if (filename.toLowerCase().endsWith('.rtf')) {
          // Strip RTF control words and braces, leaving plain text
          t = t.replace(/\{\\[^}]*\}/g, '').replace(/\\[a-z]+\d*\s?/gi, '').replace(/[{}]/g, '').trim();
        }
        content.textContent = t;
      })
    .catch(() => { content.textContent = 'Could not load show info.'; });
}

function closeShowInfo() {
  document.getElementById('show-info-modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeShowInfo();
});

function setupNav() {
  document.querySelector('.shows-body').addEventListener('click', e => {
    const row = e.target.closest('tr[data-txt]');
    if (row) openShowInfo(row.dataset.txt);
  });

  document.querySelectorAll('.year-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const el = document.getElementById('year-' + pill.dataset.year);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const pills  = document.querySelectorAll('.year-pill');
  const blocks = document.querySelectorAll('.year-block');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const year = e.target.id.replace('year-', '');
        pills.forEach(p => p.classList.toggle('active', p.dataset.year === year));
      }
    });
  }, { rootMargin: '-5% 0px -88% 0px' });

  blocks.forEach(b => observer.observe(b));
}

render();
