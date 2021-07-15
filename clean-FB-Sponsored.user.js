// ==UserScript==
// @name         Clean FB Sponsored
// @namespace    https://github.com/haogege/ad
// @version      0.1
// @description  移除 FB 赞助内容
// @author       haogege
// @include      /https:\/\/www.facebook.com
// @grant        none
// @downloadURL  https://cdn.jsdelivr.net/gh/haogege/ad@master/clean-FB-Sponsored.user.js
// ==/UserScript==

function removerightRailAd() {
  var rr = document.querySelector("[data-pagelet='RightRail']");
  if (rr != null && rr.children.length > 0) {
    if (rr.children[0].children.length > 0) {
      rr.children[0].children[0].style = 'display:none';
    }
  }
}

const NeedToRemoveKeywords = ['赞助内容', 'Sponsored'];

function checkKeywordsExist(node) {
  return NeedToRemoveKeywords.some((lang) => node.querySelector('[aria-label=' + lang + ']') != null);
}

function removeSponsorPost() {
  document.querySelectorAll("div[data-pagelet*='FeedUnit_']").forEach((node) => {
    if (checkKeywordsExist(node)) {
      node.remove();
    }
  });
}

function executeActions() {
  removerightRailAd();
  removeSponsorPost();
  setTimeout(executeActions, 200);
}

(function () {
  'use strict';

  // Your code here...
  executeActions();
})();
