// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"f0HGD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _addOnsView = require("./Views/addOnsView");
var _addOnsViewDefault = parcelHelpers.interopDefault(_addOnsView);
var _navigationBarView = require("./Views/navigationBarView");
var _navigationBarViewDefault = parcelHelpers.interopDefault(_navigationBarView);
var _pageView = require("./Views/pageView");
var _pageViewDefault = parcelHelpers.interopDefault(_pageView);
var _personalInfoView = require("./Views/personalInfoView");
var _personalInfoViewDefault = parcelHelpers.interopDefault(_personalInfoView);
var _selectPlanView = require("./Views/selectPlanView");
var _selectPlanViewDefault = parcelHelpers.interopDefault(_selectPlanView);
var _sideBarView = require("./Views/sideBarView");
var _sideBarViewDefault = parcelHelpers.interopDefault(_sideBarView);
var _summaryView = require("./Views/summaryView");
var _summaryViewDefault = parcelHelpers.interopDefault(_summaryView);
var _thankYouView = require("./Views/thankYouView");
var _thankYouViewDefault = parcelHelpers.interopDefault(_thankYouView);
var _config = require("./config");
var _model = require("./model");
var _modelDefault = parcelHelpers.interopDefault(_model);
const goNext = async function() {
    try {
        const currentPosition = VIEWS_INSTANCE_MAP[(0, _modelDefault.default).getData("currentPage")?.key];
        const currentPageKey = (0, _modelDefault.default).getData("currentPage")?.key;
        // validate form
        const isFormValid = "mock";
        // if invalid
        if (!isFormValid) // show validation errors
        return;
        // if valid
        // save data state
        const currentFormData = currentPosition.getFormData();
        (0, _modelDefault.default).updatePage(currentPageKey, currentFormData);
        // loading spinner
        currentPosition.renderSpinner();
        // get next step
        const allPagesKeys = Object.values((0, _config.pageKeys));
        const currentIndex = (0, _modelDefault.default).getData("currentPage").position;
        const nextPageKey = allPagesKeys[currentIndex + 1];
        // fetch next page data
        const nextPageData = await (0, _modelDefault.default).fetchPageData(nextPageKey);
        // render new page with data
        (0, _pageViewDefault.default).render(nextPageKey, nextPageData);
        if (nextPageKey === (0, _config.pageKeys).summary) (0, _addOnsViewDefault.default).addHandlerJumpToPage(jumpToPreviousPage);
        // manage navigationBar
        manageNavigationBar(nextPageKey);
        // update current position state
        (0, _modelDefault.default).updateCurrentPosition(nextPageKey, currentIndex + 1);
        // activateStep side bar
        if (nextPageKey === (0, _config.pageKeys).thankYou) return;
        else (0, _sideBarViewDefault.default).activateStep(nextPageKey);
        console.log("next position", (0, _modelDefault.default).getData("currentPage").position);
    } catch (error) {
        console.error("Error navigating to next step", error);
    }
};
const manageNavigationBar = function(pageKey) {
    pageKey !== (0, _config.pageKeys).personalInfo && (0, _navigationBarViewDefault.default).showGoBack();
    pageKey === (0, _config.pageKeys).personalInfo && (0, _navigationBarViewDefault.default).hideGoBack();
    pageKey === (0, _config.pageKeys).summary && (0, _navigationBarViewDefault.default).showConfirmBtn();
    pageKey !== (0, _config.pageKeys).summary && (0, _navigationBarViewDefault.default).showNextStepBtn();
    pageKey === (0, _config.pageKeys).thankYou && (0, _navigationBarViewDefault.default).hideBar();
};
const goBack = async function() {
    // find current page
    const currentPagePosition = (0, _modelDefault.default).getData("currentPage")?.position;
    console.log("currentPagePosition", currentPagePosition);
    // get previous page
    const allPagesKeys = Object.values((0, _config.pageKeys));
    const previousPageKey = allPagesKeys[currentPagePosition - 1];
    // loading spinner
    VIEWS_INSTANCE_MAP[previousPageKey].renderSpinner();
    // // fetch next page data
    // const previousPageData = await model.fetchPageData(previousPageKey);
    // get data of previous page
    const previousPageFormData = (0, _modelDefault.default).getPageData(previousPageKey);
    // render UI with data
    (0, _pageViewDefault.default).render(previousPageKey, {
        // ...previousPageData,
        ...previousPageFormData
    });
    // manage navigationBar
    manageNavigationBar(previousPageKey);
    // activateStep side bar
    (0, _sideBarViewDefault.default).activateStep(previousPageKey);
    // update current position state
    const previousIndex = (0, _modelDefault.default).getData("currentPage").position - 1;
    (0, _modelDefault.default).updateCurrentPosition(previousPageKey, previousIndex);
    console.log("back position", (0, _modelDefault.default).getData("currentPage").position);
};
const jumpToPreviousPage = async function(pageKey) {
    // fetch page data
    const previousPageData = await (0, _modelDefault.default).fetchPageData(pageKey);
    // get data of previous page
    const previousPageFormData = (0, _modelDefault.default).getPageData(pageKey);
    // render UI with data
    (0, _pageViewDefault.default).render(pageKey, {
        ...previousPageData,
        ...previousPageFormData
    });
    // manage navigationBar
    manageNavigationBar(pageKey);
    // activateStep side bar
    (0, _sideBarViewDefault.default).activateStep(pageKey);
};
const init = function() {
    // get state in localStorage if any
    const storedPages = localStorage.getItem("pages");
    // update state with localStorage if any
    storedPages && (0, _modelDefault.default).updateStateWithStoredData(storedPages);
    // current page
    const currentPageKey = (0, _modelDefault.default).getData("currentPage")?.key || (0, _config.pageKeys).personalInfo;
    // update state with current page
    if (!(0, _modelDefault.default).getData("currentPage")?.key) (0, _modelDefault.default).updateState("currentPage", {
        key: currentPageKey,
        position: 0
    });
    // render current page
    const pageData = (0, _modelDefault.default).getPageData(currentPageKey);
    (0, _pageViewDefault.default).render(currentPageKey, pageData);
    // render side bar
    (0, _sideBarViewDefault.default).render();
    (0, _sideBarViewDefault.default).activateStep(currentPageKey);
    // render navigationBar
    (0, _navigationBarViewDefault.default).render();
    // manage navigationBar
    manageNavigationBar(currentPageKey);
    // add event listeners
    (0, _navigationBarViewDefault.default).addHandlerNavigateNext(goNext);
    (0, _navigationBarViewDefault.default).addHandlerNavigateBack(goBack);
};
const VIEWS_INSTANCE_MAP = {
    PERSONAL_INFO: (0, _personalInfoViewDefault.default),
    SELECT_PLAN: (0, _selectPlanViewDefault.default),
    ADD_ONS: (0, _addOnsViewDefault.default),
    SUMMARY: (0, _summaryViewDefault.default),
    THANK_YOU: (0, _thankYouViewDefault.default)
};
init();

},{"./Views/addOnsView":"cUXDi","./Views/navigationBarView":"gZpJj","./Views/pageView":"cQlHk","./Views/personalInfoView":"egnZU","./Views/selectPlanView":"lCzLY","./Views/sideBarView":"3qWSh","./Views/summaryView":"4jn8F","./Views/thankYouView":"e560X","./config":"k5Hzs","./model":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cUXDi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class AddOnsView extends (0, _viewDefault.default) {
    #parentElement = "personal__info";
    #data;
    validatedForm() {
        // this.#parentElement get form etc
        return "formdata";
    }
    addHandlerJumpToPage(handler) {
    // const addOn = document.querySelector(".add-on-change");
    // addOn.addEventListener("click", function (e) {
    //   handler();
    // });
    }
}
exports.default = new AddOnsView();

},{"./View":"3BOfc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3BOfc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    render(page, data) {
        const markup = this.generateMarkup(page, data);
        this.clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    getFormData() {
        return this._parentElement.getFormData();
    }
    renderSpinner() {
        const markup = `
      <h4 class="loader__message">Loading...</h4>
      <span class="loader"></span>
    `;
        const pageContainer = document.querySelector(".page__container");
        pageContainer.innerHTML = "";
        pageContainer.insertAdjacentHTML("beforeEnd", markup);
    }
    clear() {
        this._parentElement.innerHTML = "";
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gZpJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class NavigationBarView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".navigation__bar");
    generateMarkup(page, data) {
        return `
      <button class="btn--back">Back</button>
      <button type="submit" class="btn--next">Next step</button>
    `;
    }
    addHandlerNavigateBack(handler) {
        this._parentElement.querySelector(".btn--back").addEventListener("click", async function(e) {
            await handler();
        });
    }
    addHandlerNavigateNext(handler) {
        const btnNxt = document.querySelector(".btn--next");
        btnNxt.addEventListener("click", async function(e) {
            e.preventDefault();
            await handler();
        });
    }
    hideBar() {
        this._parentElement.classList.add("hide");
    }
    showBar() {
        this._parentElement.classList.remove("hide");
    }
    showConfirmBtn() {
        this._parentElement.querySelector(".btn--next").textContent = "Confirm";
    }
    showNextStepBtn() {
        this._parentElement.querySelector(".btn--next").textContent = "Next step";
    }
    hideGoBack() {
        this._parentElement.querySelector(".btn--back").classList.add("hide");
    }
    showGoBack() {
        this._parentElement.querySelector(".btn--back").classList.remove("hide");
    }
}
exports.default = new NavigationBarView();

},{"./View":"3BOfc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQlHk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class PageView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".page__container");
    generateMarkup(pageKey, data) {
        return this.PAGE_LAYOUT_MAP[pageKey](data);
    }
    PAGE_LAYOUT_MAP = {
        PERSONAL_INFO: (data)=>{
            console.log("data received viw", data);
            return `
        <div class="page__title">
          <h1>Personal info</h1>
          <p>Please provide your name, email address and phone number</p>
        </div>
        <form id="form">
          <label for="name">Name</label>
          <input type="text" name="name" value="${data.name || ""}" autofocus />
          <label for="email">Email</label>
          <input type="text" name="email" value="${data.email || ""}" />
          <label for="phone">Phone</label>
          <input type="text" name="phone" value="${data.phone || ""}" />
        </form>`;
        },
        SELECT_PLAN: (data)=>{
            return `
        <div class="page__title">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <form id="form">
          <div class="input__container">
            <label>90\u{20AC}</label>
            <input type="button" class="arcade-btn" value="Arcade">
            <label>2 months free</label>
          </div>
          <div class="input__container">
            <label>90\u{20AC}</label>
            <input type="button" class="arcade-btn" value="Arcade">
            <label>2 months free</label>
          </div>
          <div class="input__container">
            <label>90\u{20AC}</label>
            <input type="button" class="arcade-btn" value="Arcade">
            <label>2 months free</label>
          </div>
          <div class="input__container">
            <label>90\u{20AC}</label>
            <input type="button" class="arcade-btn" value="Arcade">
            <label>2 months free</label>
          </div>
          <div class="radios__container">
            <label for="monthly">Monthly</label>
            <input type="radio" name="recurrence" value="monthly">
            <label for="yearly">Yearly</label>
            <input type="radio" name="recurrence" value="yearly">
          </div>
        </form>
      `;
        },
        ADD_ONS: (data)=>{
            return `
        <div class="page__title">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience</p>
        </div>
        <form id="form">
          <div class="input__container">
            <label for="online-service">Online service</label>
            <p>Access to multiplayer games</p>
            <input type="checkbox" id="online-service" class="addon-checkbox" value="onlineService" />
            <span class="value">+1\u{20AC}/mo</span>
          </div>
          <div class="input__container">
            <label for="larger-storage">Larger storage</label>
            <p>Extra 1TB of cloud save</p>
            <input type="checkbox" id="larger-storage" class="addon-checkbox" value="largerStorage" />
            <span class="value">+1\u{20AC}/mo</span>
          </div>
          <div class="input__container">
            <label for="customizable-profile">Customizable profile</label>
            <p>Custom theme on your profile</p>
            <input type="checkbox" id="customizable-profile" class="addon-checkbox" value="customizableProfile" />
            <span class="value">+1\u{20AC}/mo</span>
          </div>
        </form>
      `;
        },
        SUMMARY: (data)=>{
            return `
        <div class="page__title">
          <h1>Finishing up</h1>
          <p>Double-check everything looks right before confirming.</p>
        </div>
        <div class="summary--container">
          <div class="summary--item--container">
            <span>Arcade (yearly)</span>
            <span>90\u{20AC}</span>
            <button type="button">Change</button>
          </div>
          <div class="summary--item--container">
            <span>Online service</span>
            <span>90\u{20AC}</span>
            <button type="button">Change</button>
          </div>
          <div class="summary--item--container">
            <span>Larger storage</span>
            <span>90\u{20AC}</span>
            <button type="button">Change</button>
          </div>
          <div class="total">
            <span>Total (per year)</span>
            <span>270\u{20AC}/yr</span>
          </div>
        </div>
      `;
        },
        THANK_YOU: (data)=>{
            return `
        <div class="thanks--container">
          <p>
            Thank you! Thanks for confirming your subscription! We hope you
            have fun using our platform. If you ever need support, please feel
            free to email us at nubi@gmail.com
          </p>
        </div>
      `;
        }
    };
}
exports.default = new PageView();

},{"./View":"3BOfc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"egnZU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class PersonalInfoView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".page__container");
    _formData;
    _isFormValid;
    get isFormValid() {
        this._validateForm();
        return true;
    }
    getFormData() {
        const form = document.getElementById("form");
        const formElementsNodes = form.querySelectorAll("input");
        const formData = Array.from(formElementsNodes).reduce((acc, { name, value })=>{
            acc[name] = value;
            return acc;
        }, {});
        console.log(formData);
        return formData;
    }
    _validateForm() {
        // this.#parentElement get form etc
        this._isFormValid = "PersonalInfoView";
        this._formData = "";
        this.formData;
    // return ;
    }
    validateOnValueChange(input) {
        input.addEventListener("input", (e)=>{
            console.log(e.target.value);
        });
    }
}
exports.default = new PersonalInfoView();

},{"./View":"3BOfc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCzLY":[function(require,module,exports) {
// import iconAdvanced from "url:../../assets/images/icon-advanced.svg";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SelectPlanView extends (0, _viewDefault.default) {
    #parentElement = document.querySelector(".page__container");
    #data;
    // TODO if plan yearly there is discount
    addHandlerSelectPlan(handler) {
        handler(selectedPlan);
    }
    addHandlerSelectTime(handler) {
        handler(selectedTime);
    }
}
exports.default = new SelectPlanView();

},{"./View":"3BOfc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3qWSh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SideBarView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".side__bar");
    _currentStep;
    generateMarkup() {
        return `
    <div class="side__bar--steps">
      ${this.getSteps()}
    </div>`;
    }
    // TODO testare
    activateStep(currentPageKey) {
        if (this._currentStep) this._currentStep.querySelector(".position-circle").classList.remove("active");
        const stepsNodes = this._parentElement.querySelectorAll(".side__bar--step");
        const currentStep = Array.from(stepsNodes).find((step)=>{
            return step.dataset.key === currentPageKey;
        });
        this._currentStep = currentStep;
        currentStep.querySelector(".position-circle").classList.add("active");
    }
    getSteps() {
        const pages = Object.values((0, _config.pageKeys)).slice(0, -1);
        return pages.map((page, index)=>{
            const position = index + 1;
            return `<div class="side__bar--step" data-key="${page}">              
              <div class="position-circle">
                <span class="position-number">${position}</span>
              </div>
              <div class="title">
                <span class="position-name">STEP ${position}</span>
                <span class="page-title">${page.replace("_", " ")}</span>
              </div>
      </div>`;
        }).join("");
    }
}
exports.default = new SideBarView();

},{"../config":"k5Hzs","./View":"3BOfc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pageKeys", ()=>pageKeys);
const pageKeys = {
    personalInfo: "PERSONAL_INFO",
    selectPlan: "SELECT_PLAN",
    addOns: "ADD_ONS",
    summary: "SUMMARY",
    thankYou: "THANK_YOU"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4jn8F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SummaryView extends (0, _viewDefault.default) {
    #parentElement = "personal__info";
    #data;
    validatedForm() {
        // this.#parentElement get form etc
        console.log("validate personal info");
        return "formdata";
    }
    addHandlerJumpToPage(handler) {
        // parent.get change text
        window.addEventListener("click", async function(e) {
            await handler();
        });
    }
}
exports.default = new SummaryView();

},{"./View":"3BOfc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e560X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ThankYouView extends (0, _viewDefault.default) {
    _parentElement = "personal__info";
    _formData;
    _isFormValid;
    validateForm() {
        // this.#parentElement get form etc
        console.log("thank you view");
        this._isFormValid = "thank you view";
        this._formData = "";
    // return "";
    }
}
exports.default = new ThankYouView();

},{"./View":"3BOfc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("./config");
class Model {
    #state = {
        pages: {
            PERSONAL_INFO: {
                name: "",
                email: "",
                phone: ""
            },
            SELECT_PLAN: {
                plan: "",
                recurrence: ""
            },
            ADD_ONS: {
                addOn: ""
            },
            SUMMARY: {},
            THANK_YOU: {}
        },
        currentPage: {
            key: "",
            position: 0
        }
    };
    get state() {
        return this.#state;
    }
    // TODO
    #storeState() {
        if (!localStorage.getItem("pages")) return;
        const previousPages = JSON.parse(localStorage.getItem("pages"));
        localStorage.setItem("pages", JSON.stringify(...previousPages, ...this.#state.pages));
    }
    getPageData(page) {
        console.log("getpagedata", this.#state.pages[page]);
        return this.#state.pages[page];
    }
    async fetchPageData(page) {
        try {
            await new Promise((resolve)=>{
                setTimeout(resolve, 500);
            });
            page;
            return null;
        } catch (error) {
            console.error("An error occurred:", error);
            return null;
        }
    }
    getData(key) {
        return this.#state[key];
    }
    updateState(key, data) {
        this.#state = {
            ...this.#state,
            [key]: data
        };
        this.#storeState();
        console.log(this.#state);
    }
    updateCurrentPosition(key, position) {
        this.#state.currentPage.position = position;
        this.#state.currentPage.key = key;
    }
    updatePage(page, data) {
        console.log("update page", page, data);
        this.#state.pages[page] = data;
    }
    updateStateWithStoredData(pages) {
        this.#state = {
            ...this.#state,
            page1: {
                ...pages[1]
            },
            page2: {
                ...pages[2]
            }
        };
    }
}
exports.default = new Model();

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["f0HGD","aenu9"], "aenu9", "parcelRequire94c2")

//# sourceMappingURL=index.e37f48ea.js.map
