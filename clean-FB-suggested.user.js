// ==UserScript==
// @name         Clean FB Suggested for you
// @namespace    https://github.com/haogege/ad
// @version      0.1
// @description  移除 FB 为你推荐
// @author       haogege
// @include      /https:\/\/www.facebook.com
// @grant        none
// @downloadURL  https://github.com/chgc/CleanFBSapce/raw/master/clean-FB-recommand.user.js
// ==/UserScript==

const NeedToRemoveKeywords = ['为你推荐', 'Suggested for you'];

function checkKeywordsExist(node) {
  return NeedToRemoveKeywords.some((lang) => node.innerHTML.contains('dir="auto">' + lang + '</span>'));
}

function removeRecommandPost() {
  document.querySelectorAll("div[data-pagelet*='FeedUnit_']").forEach((node) => {
    if (checkKeywordsExist(node)) {
      node.remove();
    }
  });
}

function executeActions() {
  removeRecommandPost();
  setTimeout(executeActions, 200);
}

(function () {
  'use strict';

  // Your code here...
  executeActions();
})();
