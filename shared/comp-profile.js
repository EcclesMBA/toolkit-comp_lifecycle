/*
 * Eccles Compensation Tools — Shared Offer Profile
 * -------------------------------------------------
 * Single source of truth for offer data shared across:
 *   - MBA Compensation & Negotiation Tool (triangulation + AI practice)
 *   - Offer Compensation Planner (detailed offer modeling)
 *   - Compensation Intelligence Framework (industry/COL context)
 *
 * Deployment requirement: this file must be hosted alongside the three tools
 * at the relative path "./shared/comp-profile.js" from each tool's own HTML
 * file — e.g.:
 *   /comp-tools/
 *     mba_comp_negotiation_tool.html
 *     offer_compensation_planner.html
 *     compensation_intelligence_framework.html
 *     shared/comp-profile.js
 *
 * If a tool can't reach this file (e.g. opened as a standalone email
 * attachment, or hosted alone), it degrades gracefully — window.CompProfile
 * will simply be undefined, and callers should check for it before use.
 *
 * Storage: browser localStorage, scoped to whatever origin/path serves these
 * files. This means the three tools only share data when hosted on the same
 * origin (e.g. the same GitHub Pages site or the same Canvas-embedded host).
 * It does not sync across devices or browsers.
 */
(function (global) {
  var KEY = 'eccles-comp-profile-v1';

  var EMPTY = {
    meta: { updatedAt: null, updatedBy: null },
    location: { city: '', state: '' },
    targetIndustry: '',
    triangulation: { target: null, floor: null, stretch: null, modelValid: false },
    initial: {
      base: null, signing: null, bonusPct: null, equity: null, vestYears: null,
      clawbackMonths: null, clawbackTrigger: null, clawbackBasis: null, taxRate: null
    },
    counter: {
      base: null, signing: null, bonusPct: null, equity: null, vestYears: null,
      clawbackMonths: null, clawbackTrigger: null, clawbackBasis: null, taxRate: null
    }
  };

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return clone(EMPTY);
      var parsed = JSON.parse(raw);
      return deepMerge(clone(EMPTY), parsed);
    } catch (e) {
      return clone(EMPTY);
    }
  }

  function save(profile, sourceTool) {
    try {
      profile.meta = profile.meta || {};
      profile.meta.updatedAt = new Date().toISOString();
      profile.meta.updatedBy = sourceTool || profile.meta.updatedBy || null;
      localStorage.setItem(KEY, JSON.stringify(profile));
      return true;
    } catch (e) {
      return false;
    }
  }

  function deepMerge(target, source) {
    Object.keys(source || {}).forEach(function (k) {
      var v = source[k];
      if (v && typeof v === 'object' && !Array.isArray(v)) {
        target[k] = target[k] && typeof target[k] === 'object' ? target[k] : {};
        deepMerge(target[k], v);
      } else {
        target[k] = v;
      }
    });
    return target;
  }

  // Merge a partial update into the stored profile and persist it.
  // Only fields you pass are touched — everything else is left as-is.
  function patch(partial, sourceTool) {
    var cur = load();
    var merged = deepMerge(cur, partial || {});
    save(merged, sourceTool);
    return merged;
  }

  function clear() {
    try { localStorage.removeItem(KEY); } catch (e) {}
  }

  global.CompProfile = {
    load: load,
    save: save,
    patch: patch,
    clear: clear,
    STORAGE_KEY: KEY
  };
})(window);
