!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=r);var i=r("iU1Pc");function u(e,n){return console.log(n),new Promise((function(o,t){var r=Math.random()>.3;console.log(n),setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}({form:document.querySelector(".form"),btn:document.querySelector("button")}).form.addEventListener("submit",(function(n){n.preventDefault();for(var o=+n.currentTarget.delay.value,t=+n.currentTarget.step.value,r=+n.currentTarget.amount.value,a=1;a<=r;a+=1)u(a,o).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),o+=t}))}();
//# sourceMappingURL=03-promises.6d4a4df0.js.map