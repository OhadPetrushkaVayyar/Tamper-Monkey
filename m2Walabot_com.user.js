// ==UserScript==
// @name         SkipGeoIP Javascript
// @namespace    http://walabot.com
// @version      0.1
// @description  Simple Script to automatically skip geoip restrction on store.walabot.com
// @author       Ohad Petrushka
// @match        https://store.walabot.com/*
// @match        http://store.walabot.com/*
// @match        http://walabot.com/*
// @match        https://walabot.com/*
// @match        https://*.walabot.com/*
// @match        http://*.walabot.com/*
// @match        https://uatstore.walabot.com/*
// @match        http://uatstore.walabot.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.cookie="skipgeoip=1";
})();
