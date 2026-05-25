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
      const showId   = 'show-' + year + '-' + idx;
      const notesHtml = s.notes ? '<div class="show-notes">' + esc(s.notes) + '</div>' : '';
      return '<tr class="show-row" id="' + showId + '">'
        + '<td class="col-date">' + fmtDate(s) + '</td>'
        + '<td class="col-venue"><div>' + esc(s.venue) + '</div>' + notesHtml + '</td>'
        + '<td class="col-location">' + esc(s.location) + '</td>'
        + '<td class="col-badges"><div class="badge-group">'
          + versionBadge(s.version) + formatBadge(s.format)
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
  const logoHtml = '<a class="site-logo" href="../../">Shynomi\'s Live<span>Archive</span></a>';

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
          <a class="back-link" href="../../">
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

  setupNav();
}

function setupNav() {
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
