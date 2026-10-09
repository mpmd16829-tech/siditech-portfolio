/* Suivi d'evenements sans cookie ni identifiant personnel — Plausible.
 *
 * On utilise le "script proxy" (URL /js/pa-XXXX.js) plutot que le script
 * standard /js/script.js avec data-domain :
 *   - le domaine est deja injecte dans le proxy, donc aucune possibilite
 *     de desynchronisation entre le code et le tableau de bord ;
 *   - le proxy sert meme quand plausible.io/js/script.js est bloque, ce qui
 *     arrive sur certains reseaux ;
 *   - charge en async : ne bloque jamais l'affichage (contrainte 3G).
 *
 * ATTENTION : un seul script Plausible par page. Charger en plus un
 * <script src="https://plausible.io/js/script.js" data-domain="...">
 * compterait chaque pageview deux fois.
 *
 * Si le site n'est pas enregistre ou pas valide chez Plausible, le script se
 * charge quand meme mais n'envoie rien : aucune erreur visible.
 */
(function () {
  var SRC = 'https://plausible.io/js/pa-ROq79g7J_aBXT640_YHK6.js';

  // Stub-collecteur : les clics survenus avant l'arrivee du script sont
  // empiles dans plausible.q, que le vrai script vidange a son chargement.
  window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };

  function __track(name) {
    if (typeof window.plausible === 'function') window.plausible(name);
  }
  window.__track = __track;

  // Un seul ecouteur pour tout le site : delegation sur [data-track]
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-track]') : null;
    if (el) __track(el.getAttribute('data-track'));
  }, true);

  var s = document.createElement('script');
  s.async = true;
  s.src = SRC;
  document.head.appendChild(s);
})();