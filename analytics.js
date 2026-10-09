/* Suivi d'evenements sans cookie ni identifiant personnel (Plausible).
 *
 * Pourquoi ce fichier est charge en diferé (defer + requestIdleCallback) :
 * le site vise des visiteurs en 3G. Un script tiers bloque en tete de page
 * coutait cher en temps d'affichage ; ici il arrive apres le rendu.
 *
 * Les clics survenus avant l'arrivee du vrai script sont mis en file
 * d'attente puis rattrapes, pour ne pas perdre les conversions rapides.
 *
 * Si le domaine n'est pas enregistre chez Plausible, le script se charge
 * quand meme mais n'envoie rien : aucune erreur visible, rien de casse.
 */
(function () {
  window.__siditechEvents = [];
  window.__siditechStub = function () {};

  function __track(name) {
    if (window.plausible === window.__siditechStub) {
      window.__siditechEvents.push(name);
    } else if (typeof window.plausible === 'function') {
      window.plausible(name);
    }
  }
  window.__track = __track;
  window.plausible = window.__siditechStub;

  // Un seul ecouteur pour tout le site : delegation sur [data-track]
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-track]') : null;
    if (el) __track(el.getAttribute('data-track'));
  }, true);

  function load() {
    var s = document.createElement('script');
    s.defer = true;
    s.setAttribute('data-domain', 'mpmd16829-tech.github.io');
    s.src = 'https://plausible.io/js/script.js';
    s.onload = function () {
      window.__siditechEvents.forEach(function (n) { window.plausible(n); });
      window.__siditechEvents.length = 0;
    };
    document.head.appendChild(s);
  }

  if ('requestIdleCallback' in window) requestIdleCallback(load, { timeout: 3000 });
  else setTimeout(load, 1500);
})();