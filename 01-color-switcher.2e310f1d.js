const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.btnStart.addEventListener("click",(()=>{t.timerId=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.btnStart.setAttribute("disabled","disabled"),t.btnStop.removeAttribute("disabled")})),t.btnStop.addEventListener("click",(function(){console.log("eee"),clearInterval(undefined),t.btnStop.setAttribute("disabled","disabled"),t.btnStart.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.2e310f1d.js.map
