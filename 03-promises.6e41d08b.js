!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var u=i("6JpON"),r={submitBtn:document.querySelector("form > button"),inputFirstDelay:document.querySelector("input[name=delay]"),inputDelayStep:document.querySelector("input[name=step]"),inputAmount:document.querySelector("input[name=amount]")};function a(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}r.submitBtn.addEventListener("click",(function(n){n.preventDefault();for(var t=r.inputFirstDelay.value,o=r.inputDelayStep.value,i=r.inputAmount.value,l=1;l<=i;l+=1){var c=l,d=Number(t)+l*Number(o);a(c,d).then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.6e41d08b.js.map