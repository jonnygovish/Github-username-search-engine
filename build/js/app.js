!function e(n,o,r){function t(s,i){if(!o[s]){if(!n[s]){var a="function"==typeof require&&require;if(!i&&a)return a(s,!0);if(u)return u(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=o[s]={exports:{}};n[s][0].call(f.exports,function(e){var o=n[s][1][e];return t(o||e)},f,f.exports,e,n,o,r)}return o[s].exports}for(var u="function"==typeof require&&require,s=0;s<r.length;s++)t(r[s]);return t}({1:[function(e,n,o){function r(){}r.prototype.getRepos=function(){$.get("https://api.github.com/users/jonnygovish?access_token=ee9dbb36843ae12d1a5da073b5a2c361858f5082").then(function(e){console.log(e)}).fail(function(e){console.log(e.responseJSON.message)})},o.reposModule=r},{}],2:[function(e,n,o){var r=e("./../js/script.js").reposModule;$(document).ready(function(){var e=new r;$("#form-group").submit(function(n){n.preventDefault();var o=$("#username").val();console.log(o),$("#display-name").text(o),$("#username").val(""),e.getRepos()})})},{"./../js/script.js":1}]},{},[2]);