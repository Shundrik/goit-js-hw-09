!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")},e=(t.start.addEventListener("click",(function(){e=setInterval(n,1e3),t.start.disabled=!0})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.disabled=!1})),0);function n(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.cdb75883.js.map