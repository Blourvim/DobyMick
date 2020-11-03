"use strict";

var openLeft = function openLeft() {
  return document.getElementById("leftBar").style.width = "25%";
};

var closeLeft = function closeLeft() {
  return document.getElementById("leftBar").style.width = "0";
};

var daysSince = 0;

swap1 = function swap1() {
  document.getElementById("friend").style.visibility = "hidden";
  document.getElementById("play").style.visibility = "visible";
}; //              Story  
//
//              Gameplay
//              Design
//