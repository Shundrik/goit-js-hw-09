!function(){function o(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},c={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in c){var o=c[e];delete c[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){c[e]=o},n.parcelRequire7bc7=r);var a=r("iU1Pc"),l={form:document.querySelector(".form"),btn:document.querySelector("button")};l.form.addEventListener("input",(function(e){i[e.target.name]=e.target.value;var o=l.form.elements.delay.value,n=l.form.elements.step.value,t=l.form.elements.amount.value;console.log(o),console.log(n),console.log(t)})),l.btn.addEventListener("submit",s);var i={};function s(o,n){e.preventDefault(),console.log("start ".concat(o," and ").concat(n));var t=Math.random()>.3;new Promise((function(e,o){})),setTimeout((function(){t&&Resolve({dataForm:i})}),n)}s(2,1500).then((function(e){var n=e.position,t=e.delay;console.log("start ".concat(n," and ").concat(t)),console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")),o(a).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms")),o(a).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}();
//# sourceMappingURL=03-promises.30ddf8d4.js.map
