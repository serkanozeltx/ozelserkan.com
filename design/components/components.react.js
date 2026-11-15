/* @ds-bundle: {"format":4,"namespace":"SO","components":[{"name":"SiteHeader"},{"name":"Button"},{"name":"Tag"},{"name":"Publication"},{"name":"ProjectCard"}]} */
(function () {
  var React = window.React, h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }

  function Button(p) {
    var variant = p.variant || 'quiet';
    var rest = Object.assign({}, p); delete rest.variant; delete rest.className; delete rest.children;
    var cls = cx('so-btn', 'so-btn-' + variant, p.className);
    return p.href ? h('a', Object.assign(rest, { className: cls }), p.children)
                  : h('button', Object.assign({ type: 'button' }, rest, { className: cls }), p.children);
  }

  function Tag(p) {
    return h('span', { className: cx('so-tag', 'so-tag-' + (p.tone || 'neutral')) }, p.children);
  }

  function Publication(p) {
    var self = p.self || 'Özel, S.';
    var parts = String(p.authors || '').split(self);
    var authors = [];
    parts.forEach(function (s, i) { if (i) authors.push(h('strong', { key: 'b' + i }, self)); authors.push(s); });
    return h('article', { className: 'so-pub' },
      p.kind ? h('span', { className: 'so-pub-kind' }, p.kind) : null,
      h('p', { className: 'so-pub-cite' },
        h('span', { className: 'so-pub-authors' }, authors), ' (', p.year, '). ',
        p.href ? h('a', { className: 'so-pub-title', href: p.href }, p.title) : h('span', { className: 'so-pub-title' }, p.title),
        '. ', h('em', null, p.venue), p.details ? ', ' + p.details : '', '.'),
      (p.doi || p.links) ? h('p', { className: 'so-pub-links' },
        p.doi ? h('a', { className: 'so-pub-doi', href: 'https://doi.org/' + p.doi }, 'doi:' + p.doi) : null,
        (p.links || []).map(function (l, i) { return h('a', { key: i, href: l.href }, l.label); })) : null);
  }

  function ProjectCard(p) {
    var Title = p.href ? h('a', { href: p.href }, p.title) : p.title;
    return h('article', { className: 'so-card' },
      p.eyebrow ? h('p', { className: 'so-eyebrow' }, p.eyebrow) : null,
      h('h3', { className: 'so-card-title' }, Title),
      p.summary ? h('p', { className: 'so-card-summary' }, p.summary) : null,
      p.tags ? h('div', { className: 'so-card-tags' }, p.tags.map(function (t, i) { return h(Tag, { key: i, tone: t.tone }, t.label); })) : null,
      p.meta ? h('p', { className: 'so-card-meta' }, p.meta) : null);
  }

  function Mark() {
    return h('svg', { className: 'so-mark', viewBox: '0 0 88 16', width: 88, height: 16, 'aria-hidden': 'true' },
      h('circle', { className: 'a', cx: 8, cy: 8, r: 7 }),
      h('rect', { className: 'b', x: 19, y: 1, width: 14, height: 14 }),
      h('circle', { className: 'a', cx: 44, cy: 8, r: 7 }),
      h('rect', { className: 'b', x: 55, y: 1, width: 14, height: 14 }),
      h('circle', { className: 'n', cx: 80, cy: 8, r: 6.25 }));
  }

  function SiteHeader(p) {
    var lang = p.lang || 'tr';
    return h('header', { className: 'so-header' },
      h('a', { className: 'so-header-brand', href: p.homeHref || '#' }, h(Mark), h('span', null, p.name || 'Serkan Özel')),
      h('nav', { className: 'so-header-nav', 'aria-label': lang === 'tr' ? 'Ana menü' : 'Main' },
        (p.links || []).map(function (l, i) {
          return h('a', { key: i, href: l.href || '#', 'aria-current': l.current ? 'page' : undefined }, l.label);
        })),
      h('div', { className: 'so-lang', role: 'group', 'aria-label': lang === 'tr' ? 'Dil' : 'Language' },
        ['tr', 'en'].map(function (code) {
          return h('button', { key: code, type: 'button', 'aria-pressed': lang === code,
            onClick: function () { p.onLangChange && p.onLangChange(code); } }, code.toUpperCase());
        })));
  }

  window.SO = Object.assign(window.SO || {}, { SiteHeader: SiteHeader, Button: Button, Tag: Tag, Publication: Publication, ProjectCard: ProjectCard });
})();
